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

Funcionam semelhantemente às classes, mas sem estrutura de dados completa (são apenas contratos), porém tipando os atributos e métodos.

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

Enquanto interfaces são muito usadas para os contratos de uma estrutura de dados ou de classes, enquanto os tipos para fazer junções entre as interfaces

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

