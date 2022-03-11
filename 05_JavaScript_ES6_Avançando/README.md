# Curso de JavaScript Avançado

Anotações fora do meu escopo de conhecimento ou que agregaram bastante e decidi anotar. Omiti o que considero que já domino. 📖

##

## Arrow Functions
As Arrow Functions possuem algumas características únicas, como:
- Escopo léxico
- Praticidades. Sintaxe mais curta, retorno automático se o argumento for em apenas uma linha.
- Não é possível criar construtores com ela

## Default Functions Arguments
Os argumentos das funções podem ter um valor default. Na hora de declarar a função colocar *function a(param = 1, param = 1) {}*. Isso indica que se houver esquecimento da declaração do parâmetro o valor default será o estabelecido na função.

##

## Rest e Spread Operator

**Rest Operator:** *Sintaxe: (...args) => {}* no campo de argumentos da função e a função recebe todos os argumentos da chamada da função (o número de argumentos pode ser variável) e o dado dentro da função funciona como um array nativo (possível manipulação). Pode ser utilizado para capturar os argumentos restantes, caso a função devesse ter menos argumentos. Funciona em funções padrões e arrow functions.

**Spread Operator:** Mesma sintaxe do Rest Operator, faz o processo inverso do rest operator. Pega um array e transforma cada item em um argumento separado para outra função. Também pode ser utilizado em strings, objetos e objetos iteráveis.

**Destructuring:** Em vez de precisar vincular posições de arrays às variáveis (como var char = characters[0]) podemos criar o array já com um apelido (destructuring). *Sintaxe: var [char1, char2, char3] = [1, 2, 3]*. Muito usado em React e permite acessar o valor com o label da variável. char1 já é a var que queríamos declarar. Possível aplicar em objetos. *Nota: Destructuring de objetos difere de array. em vez de colchete usa-se chaves {}*

## Symbols e Iterators

**Symbols:** Identificador único que nunca é igual a outro symbol. Bons para criaçao de atributos privados em objetos, mas ainda podem ser acessados pela função getOwnPropertySymbols.

**Symbol.iterator:** Torna um objeto iterável. Por exemplo, array e strings possuem nativamente. Ou seja, objetos não são iteraveis por natureza, mas é possível adicionar manualmente o que os arrays e strings possuem. Para isso: *Sintaxe: obj = {values: [a, b, c], [Symbol.iterator]() {let id = 0; return {next: ()=> {i++; return {value: this.values[i - 1], done: i > this.values.length}}}}}* ou de forma mais fácil utilizando Generators 

```
obj = {
    values: ['Matheus', '26', 'Professor'],
    *[Symbol.iterator]() {
        for (let cont = 0; cont < obj.values.length; cont++) 
        yield this.values[cont];
    }
}
```

**array[Symbol.Iterator]().next() ->** Sintaxe básica para invocar o próximo value da iteração. Utiliza value (any) e done (boolean);


## Generators

É possível fazer pauses entre as execuções de uma função **Sintaxe: function* nome() {execut; yield; execut2; yield}** usando *yield* para travar temporariamente a execução; O generator se comunica pela interface do symbol.iterator, então cada momento que encontrar um yield a função pausa e o restante será executado apenas se chamar um próximo *next()*.

## Callbacks e Promises

Callbacks (funções passadas como parâmetro) e promises são utilizados para programação assíncrona e aguardar respostas de requisições para prosseguir com operações ou não, ou retornando erros e lidando com eles. 

Antes, as callbacks eram muito utilizadas, mas facilmente deixava o código ilegível. Por isso, no ES6 as promises foram adicionadas para ajudar na construção de programação assíncrona. 

Nos exemplos do ./callbacks-promises.js vemos um callback hell tentando lidar com as requisição

**Sintaxe de promises:**
```
const myPromise = new Promise((resolved, reject) => {
    // trata a requisição
    
});
```

A promise possui *três status: pending, fulfilled e rejected.*
Espere a resposta da requisição e execute o próximo bloco:

```
myPromise.then((data) => {
    // tratamento dos dados da requisição
})
 .catch(err) {
     // throw new Error();
 }
 ```

 Usando *promise.all* o evento só acontece quando todas as promises estão prontas. Usando *promise.race* a promise que for respondida primeiro é executada.

 ## Fetch

 Faz requisições utilizando promises como base, simplificando o antigo *XMLHttpRequest*.

```
fetch('url').then(responseStream => {
     return responseStream.json();
 })
 .then(data => console.log(data));
```

responseStream.json faz um parse transformando os dados em um json. O .then seguinte sempre captura o retorno (que é uma promise) do .then anterior. O fetch ainda permite um segundo parâmetro além da url, um objeto especificando o método HTTP, entre outras possibilidades.

## Async/Await

Forma de criar promises de maneira mais simples, principalmente para usar promises dentro de promises. 

Colocar a palavra *async* antes da declaração de uma função a torna numa promise.

Já o *await* só pode ser utilizado dentro da função async

## EventEmitter

Exclusivo do node. É necessário puxar o module events. No browser os eventos são pelo EventListener, com funcionamento um pouco diferente.

```
    const eventEmitter = require('events');
```

Programação assíncrona que dispara alguma coisa de acordo com a ocorrência de um evento.

```
const emitter = new EventEmitter();

emitter.on('User Logged', data => {
    console.log(data);
})
emitter.emit('User Logged', { User: Matheus Guimarães});
```

*emitter.on ->* Emiter dispara a função vinculada
*emitter.emit ->* Evento foi emitido

##

## Testes

### Automatizados

**Testes unitários:** Servem para testar a menor parte do código (métodos, funções, classe, componente)

**Testes integrados:** Testam a integração entre as pequenas partes (função junto com outra função, componente junto com outro componente)

**Testes funcionais (end to end):** Integração do sistema com outros sistemas. Percorre as funcionalidades como um usuário faria. 

### Manuais ou Automatizados

- Testes de usabilidade
- Protótipos
- Testes de aceitação do usuário
- Testes funcionais
- Exemplos
- Alphas e Betas

### Ferramentas de Teste
- Testes de carga e performance
- Segurança

### TDD (Test Driven Development)

Testar e refatorar em pequenos ciclos. Escreve o teste antes do código.

a. Escreve o Teste | b. Escreve o código para passar no teste | c. Refatora o código

### BDD (Behavior Driven Development)

Visa integrar as regras de negócio em conjunto com a programação

a. Testes | b. Documentação | c. Exemplos

- Documentação dinâmica
- Compartilhamento de conhecimento

##

### Prática de Testes

**Mocha:** Test-runner muito descritivo, segue os parâmetros do BDD. É possível trabalhar com Node e no Browser.
(outras opções jest, karma)

```
a. Adicionar mocha via npm
b. Seguindo o princípio do TDD, escrever o teste primeiro e o código depois
c. Code básico:

// Capturar função nativa do node
const assert = require('assert');
// Capturar classe a ser testada
const Math = require('path');

// Recomenda-se não utilizar arrow function para não gerar problema de escopo (this) nos testes
describe('test description', function() {
    it('unit description', function() {
        // escreve a lógica e testa a unidade
        functionTestada(param, param2 => {
            assert.equal(param2, expectedResult);
            done();
        )}
    })

    it('unit description', function() {
        // outro teste
    })
})

```

A library **Chai** é útil na substituição do assert (que é nativo do Node e possui limitações descritivas). Ela é uma ferramenta de asserts e deixa o teste mais semântico.

Com o Chai o esqueleto de teste acima ficaria:

```
// Capturar classe a ser testada
const Math = require('path');
// Requerir o Chai após instalação via npm
const expect = require('Chai').expect;

// Recomenda-se não utilizar arrow function para não gerar problema de escopo (this) nos testes
describe('test description', function() {
    it('unit description', function() {
        // escreve a lógica e testa a unidade
        functionTestada(param, param2 => {
            expect(param2).to.equal(expectedResult);
            done();
        )}
    })

    it('unit description', function() {
        // teste para objetos
        expect(obj).to.have.property('name');
    })
})
```

**Sinon:** Mocka funções e observa se elas foram invocadas. Ferramenta que também pode ser utilizada para incrementar os testes.

##

## Tratamento de Erros

**Try, Catch:** Pode-se utilizar o try-catch para capturar um erro específico.
```
try {
    // code with error
} catch (err) {
    console.log(err)
} finally {
    // do something you want regardless
}
```

É possível instanciar erro com *const error = new Error('Erro 404')* e depois dando throw com *throw error*. Manipular a classe nativa Error do JavaScript via herança é possível, criando uma classe customizada e estendendo a classe Error.

### Debugging

É possível utilizar diversas técnicas de debug. As ferramentas do desenvolvedor nos navegadores são grandes aliados. Uma técnica muito comum é utilizar *breakpoints*.

Outra abordagem é utilizar comandos no console em diversas partes do código para entender os problemas de escopo ou diversas outras informações que estão gerando o bug.

```
console.log('message') // -> Mostra uma mensagem
console.warn('') // -> Mostra uma mensagem em amarelo
console.error('') // -> Mostra uma mensagem em vermelho

console.trace() // -> Mostra onde o código foi executado e em qual linha 

console.group('NomeGrupo')
console.log('Message1')
console.log('Message2')
console.groupEnd('NomeGrupo') // -> Exibe um grupo de mensagens no console que são minimizáveis

console.time('Log time')
console.timeEnd('Log time') // -> Verifica a duração de execução dos códigos

console.table([Array]) // -> Gera uma tabela organizada com dados mais longos
console.assert(1 == 0, 'message') // -> Exibe a message apenas se a verificação for false
```
