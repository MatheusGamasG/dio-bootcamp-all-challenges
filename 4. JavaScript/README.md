# Curso de JavaScript

Anotações fora do meu escopo de conhecimento ou agregaram bastante e decidi anotar. Omiti o que considero que já domino. 📖

## JavaScript

A linguagem continua evoluindo e precisa passar por um número de etapas para novas propostas de atualização. (ECMAScript Proposals)

É possível utilizar o Babel para verificar o seu código em outras versões.

### Conceitos básicos

**- Interpretada:** O código é executado de cima para baixo e o resultado é imediatamente retornado. Não precisa transformar em algo diferente para que seja executada (que são as linguagens compiladas)

**- Tipagem fraca e dinâmica:** Ser fraca significa que eu posso concatenar dados de tipos diferentes, como por exemplo “inteiro + string”. Ser dinâmica ou estática significa que a variável armazenada na memória possui um tipo específico e não pode ser trocada no caso das estáticas, e dinâmica pode. Por isso que se usa o Typescript.

**- Funções de primeira classe e ordem maior:** podem ser atribuidas em uma variável, atribuída a uma estrutura de dados e pode ser usada como parâmetro/argumento de outra função. 

**- Closure:** Capacidade de uma função lembrar do ambiente que ela foi criada. Basicamente as relações de escopo entre escopo Global, Escopo de Bloco e Escopo de Função. As funções aninhadas dentro de outra função se LEMBRAM das variáveis declaradas na função anterior. 

**- Currying:** Transformar uma função com n parâmetros em apenas uma função que recebe um parâmetro e para cada parâmetro retorna uma função. Muito utilizado em programação funcional.

**- Hoisting:** Içamento das variáveis e das funções. A diferença entre os dois içamentos é que as variáveis são içadas, mas sem valor atribuído, então se a chamarmos antes da atribuição, o resultado será undefined. As funções são içadas como um todo, então se chamarmos uma função ANTES da declaração dela, ela funcionará perfeitamente.

**- Imutabilidade:** Conceito de linguagem funcional, as variáveis de tipos primitivos nunca mudam por métodos e se precisar muda-la cria uma nova. Em JavaScript o conceito é evitar fazer essas mudanças, mas é um desafio quando trabalhando com arrays e objetos, pois mesmo consts permitem redeclaração de suas propriedades.

*Nota:* Objetos e Arrays são passados para funções por referência na memória, ou seja, se modificarmos, modifica o Objeto/Array original. Uma boa prática é criar uma cópia rasa do Objeto. Com “...Objeto” na declaração de um novoObjeto.

### Tipos e Variáveis

**var ->** Não entende escopo de bloco. Apenas global ou de função

**const ->** Respeita escopo de bloco. Não pode ser alterada

**let->** Respeita escopo de bloco. Pode ser alterada

**string ->** Cadeia de caracteres

**number ->** Números

**null ->** Quando um valor é declarado como nulo usa-se esse tipo. (Cuidado, é considerado um objeto por baixo dos panos)

**undefined ->** Quando algum valor ainda não foi definido e está vazio. (Um null não proposital)

**boolean ->** true or false;

**symbol ->** ?

### Comandos

**string.length ->** Tamanho de caracteres da string

**string.split(‘’) ->** Divide a string em um array, o parâmetro principal é o que será utilizado para dividir. Se não passar nada vai dividir caractere por caractere.

**string.replace(texto, texto) ->** Substitui o texto da string. Primeiro argumento é o que vai ser substituído e o segundo é o texto que substituirá.

**string.slice(-1) ->** Corta uma parte da string. Com -1 retorna o último caractere. O normal é utilizar dois argumentos, o primeiro seria o começo e o segundo seria o fim.

**string.substr(); ->** Parecido com o slice, mas os argumentos funcionam diferente. Primeiro argumento é a posição da string que inicia o corte e o segundo argumento é a quantidade de caracteres.

**number.toString() ->** Transforma o número em uma string;

**number.toFixed(2) ->** Retorna o número com a quantidade de casas decimais passadas no argumento;

**parseFloat(string) e parseInt(string) ->** Retorna um tipo numérico a partir de uma string.

**Object.keys(user) ou Objeto.values(user) ->** Retorna os valores de um objeto em um array.

**Object.entries(user) ->** Retorna uma array de arrays, onde cada array-filho terá [0] Nome da prop [1] Valor.

**Object.assign(user, {propNova: valorNovo}) ->** Adiciona uma nova propriedade em um objeto. Pensando em imutabilidade isso não é recomendado.

**Object.freeze(user) ->** Não deixa o objeto sofrer alterações.

**Object.seal(user) ->** Não dá pra deletar nem criar, mas é possível alterar as props que já existem.

**Array.map(function) ->** A call-back function vai iterar pelo array (assim como forEach), mas vai retornar um NOVO ARRAY com as alterações realizadas pela call-back function. Primeiro parâmetro da call-back function é o item que está sendo iterado, o segundo o index.

**Array.filter(function) ->** Itera e filtra o array.

**Array.reduce(callbackfunction, acumulador) ->** Executa cada item do array olhando por alguma coisa e retorna apenas um valor. Primeiro parâmetro é o acumulador da callback, segundo parâmetro é o valor atual do array

**...array ->** Copia arrays ou objetos em uma nova variável, sem modificar o original. const array1 = [“a”, “b”]. const array2 = [ ...array1, “c”]. Isso se chama Spread e é específico do ES6.
