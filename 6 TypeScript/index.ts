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

interface IFelinos extends IAnimal {
    visaoNoturna: boolean;
}

const animal: IAnimal = {
    nome: 'Elefante',
    tipo: 'terrestre',
    executarRugido: (rugido) => `Esse ${this.nome} faz ${rugido}!` 
}

animal.executarRugido('Rawr');

// Types

interface ICaninos extends IAnimal {
    porte: 'grande' | 'medio' | 'pequeno';
}

type IFera = ICaninos & IFelinos;
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

console.log(input)