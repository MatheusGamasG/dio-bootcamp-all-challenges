# TypeScript

Anotações fora do meu escopo de conhecimento ou que agregaram bastante e decidi anotar. 📖

##

**O que é?** Expansão do JavaScript com a principal finalidade de tipar os dados entre outros recursos.

## Bundler

Para que o TypeScript seja facilmente reconhecido e "montado" o uso de um bundler é muito prático, nesse caso usaremos o *Parcel*.

Instalar como dependência do projeto.
```
npm init

npm install parcel
```

Assim, automaticamente o arquivo .ts será reconhecido. Um outro método seria compilar o arquivo .ts em outro arquivo .js, com o comando *tsc arquivo.ts* (precisa da dependência TypeScript instalada).

## TypeScript

Caso haja uma tentativa de atribuir um valor de um tipo diferente do que a variável permite, ocorrerá um erro. Ou seja, TypeScript é fortemente tipado.

```
function sum(a:number, b:number) {
    return a + b;
}

sum('a', 'b'); // Passando string ocorre um erro
```

## Interfaces

Funcionam semelhantemente às classes, mas sem estrutura de dados completa (são apenas contratos), porém tipando os atributos e métodos. Interfaces não são instanciadas, então quando for criar uma classe a partir de uma interface precisa chamar *class className implements InterfaceName*

```
interface NomeInterface {
    nome: string;
    tipo: 'opcao1' | 'opcao2';

    metodoParaExecução(parâmetro:string): void;
}

interface OutraInterface extends NomeInterface {
    caracteristicaNova: boolean;
}

const variável: NomeInterface = {
    nome: 'string',
    tipo: 'opcao1',
    MetodoParaExecucao: (stringParam) => `Esse ${this.nome} faz ${stringParam}!` 
}
```

## Types

Enquanto interfaces são muito usadas para os contratos de uma estrutura de dados ou de classes, os tipos são usados para fazer junções entre as interfaces

```
// Continuando a partir do código anterior (interfaces)

interface AindaOutraInterface extends NomeInterface {
    caracteristicaOntologica:string;
}

type NovoTipo = OutraInterface & AindaOutraInterface;

const variávelNova : NovoTipo = {
    nome: 'string',
    tipo: 'opcao1',
    caracteristicaNova: true,
    caracteristicaOntologica:'string',
    metodoParaExecução(parâmetro:string): (stringParam) => `Esse ${this.nome} faz ${stringParam}!`
}
```

Ou seja, a variável nova do NovoTipo adquiriu as características de todas as suas interfaces e precisa ser declara com todas elas, caso contrário gerará erro.

## HTML Elements

No TypeScript é necessário especificar qual o tipo de HTMLElement que você está querendo pegar no DOM. Isso porque por padrão o TypeScript traz todo HTMLElement como um genérico sem todas as funcionalidades.

```
const input = document.getElementById('input') as HTMLInputElement;
```

## Generic Types

Existe a possibilidade de, caso você não saiba qual o tipo de dados que uma função receberá, usar tipagem dinâmica

```
    dados: any,
```

## Condicionais a partir de parâmetros

A tipagem pode oferecer alguns tipos de erros quando passarmos um tipo por parâmetro e tentarmos verificar condicionais. Por isso, podemos utilizar o *in* .

```
interface IInterface1 {
    atributo1:string,
    atributo2:string
}

interface IInterface2 extends IInterface1 {
    atributo3:string
}

function doSomething(interfaceObject: IInterface1 | IInterface2) {
    if('atributo3' in interfaceObject) {
        // do something here
    } else {
        // do something else here
    }
}
```

A questão é que seria impossível verificar por essa condicional if o interfaceObject.atributo3, pois o TypeScript acusaria erro. Só seria possível acessar diretamente as propriedades do IInterface1 (atributo1 e atributo2). Portanto, utilizar o *in* será muito prático para entender se o objeto é originado por qual interface.

## Variáveis opcionais

No entanto, é possível não utilizar duas interfaces para apenas alguns atributos a mais (via herança). Podemos simplificar com atributos opcionais (adicionando um ?) e isso facilitaria na hora de fazer as condicionais. O exemplo acima ficaria do seguinte modo:

```
    interface IInterface1 {
    atributo1:string,
    atributo2:string,
    atributo3?:string
}

function do Something(interfaceObject: IInterface1) {
    if(interfaceObject.atributo3) {
        // do something here
    } else {
        // do something else here
    }
}
```

## Readonly e Private

Permite que os atributos da classe/interface/type sejam privados ou somente leitura. Por exemplo:

```
class Frutas {
    readonly nome:string;
    sabor:string;

    constructor(nome, sabor) {
        this.nome = nome;
        this.sabor = sabor;
    }
}

const fruta = new Frutas('Banana', 'Doce');
fruta.nome = 'Morango';
```

Nesse caso, a atribuição de um novo nome (Morango) retornaria erro na compilação.

## Omit

Dentro dos diamantes <> é possível utilizar algumas funções do TypeScript, como o Omit, que omite um atributo da interface, caso necessário. São chamados de Utility Types e existe muitas opções na documentação. Exemplo:

```
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
```