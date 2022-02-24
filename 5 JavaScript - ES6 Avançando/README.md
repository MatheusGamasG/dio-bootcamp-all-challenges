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

**Symbols:** Identificar único que nunca é igual a outro symbol. Bons para criaçao de atributos privados em objetos, mas ainda podem ser acessados pela função getOwnPropertySymbols.

**Symbol.iterator:** Torna um objeto iterável. Por exemplo, array e strings possuem nativamente. Ou seja, objetos não são iteraveis por natureza, mas é possível adicionar manualmente o que os arrays e strings possuem. Para isso: *Sintaxe: obj = {values: [a, b, c], [Symbol.iterator]() {let id = 0; return {next: ()=> {i++; return {value: this.values[i - 1], done: i > this.values.length}}}}}* ou de forma mais fácil utilizando Generators **obj = {values: [a, b, c], *[Symbol.iterator]() {for(let cont = 0, 0 < obj.values.length; cont++>) {yield.this.values[cont]}}}**

**array[Symbol.Iterator]().next() ->** Sintaxe básica para invocar o próximo value da iteração. Utiliza value (any) e done (boolean);


## Generators

É possível fazer pauses entre as execuções de uma função **Sintaxe: function* nome() {execut; yield; execut2; yield}** usando *yield* para travar temporariamente a execução; O generator se comunica pela interface do symbol.iterator, então cada momento que encontrar um yield a função pausa e o restante será executado apenas se chamar um próximo next.