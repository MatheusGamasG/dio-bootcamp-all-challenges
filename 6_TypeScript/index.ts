// Tipagem

function sum(a:number, b:number) {
    return a + b;
}

const soma = sum(1, 2);

// Interfaces

interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquático';

    executarRugido(som:string): void;
}

interface Felinos extends IAnimal {
    visaoNoturna: boolean;
}

const animal: IAnimal = {
    nome: 'Elefante',
    tipo: 'terrestre',
    executarRugido: (rugido) => `Esse ${this.nome} faz ${rugido}!` 
}

animal.executarRugido('Rawr');

// Types

interface Caninos extends IAnimal {
    porte: 'grande' | 'medio' | 'pequeno';
}

type IFera = Caninos & Felinos;
// Desse modo algum objeto do tipo IFera precisará conter todos os atributos de Caninos e Felinos, além da classe mãe deles.
const ferinha: IFera = {
    nome: 'Cachorro',
    tipo: "terrestre",
    porte: "pequeno",
    visaoNoturna: false,
    executarRugido: (param) => `Luls ${param}!`
}

// Tratando as tags HTML

const input = document.getElementById('input') as HTMLInputElement; // Isso tipa como um input especificamente, e não um HTML Element genérico. Normalmente segue esse padrão.

// Generic Types

function atualizaLista<T>(arr:any[], value:T) {
    return arr.map(item => item = item + value) 
} 

atualizaLista([1, 2, 3], 4);

// Condicionais a partir de parâmetros

interface IUsuario {
    nome:string,
    cpf:string
}

interface IAdmin extends IUsuario {
    cargo: 'coordenador' | 'supervisor'
}

function redicionar(usuario: IAdmin | IUsuario) {
    if('cargo' in usuario) { // Tentar a condicional com usuario.cargo não funcionaria
        // Redireciona para admin area
    }
    // Redireciona para user area
}

// Variáveis opcionais

interface IUsuarios {
    nome:string,
    cpf:string,
    cargo?: 'coordenador' | 'supervisor' | 'funcionario'
}

function redireciona(usuario: IUsuarios) {
    if(usuario.cargo) {
        // Redireciona área interna
    } else {
        // Redireciona área externa
    }
}

// Privates e ReadOnlys

class Frutas {
    readonly nome:string;
    sabor:string;

    constructor(nome, sabor) {
        this.nome = nome;
        this.sabor = sabor;
    }
}

const fruta = new Frutas('Banana', 'Doce');
// fruta.nome = 'Morango';
console.log(fruta);

// Omit

interface Pessoa {
    nome: string,
    idade: number,
    nacionalidade: string
}

interface Brasileira extends Omit<Pessoa, 'nacionalidade'> {

}

const pessoa: Brasileira = {
    nome: 'Fulano',
    idade: 14
}