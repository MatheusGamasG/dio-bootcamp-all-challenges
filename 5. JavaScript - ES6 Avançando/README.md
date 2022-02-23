# Curso de JavaScript Avançado

Anotações fora do meu escopo de conhecimento ou que agregaram bastante e decidi anotar. Omiti o que considero que já domino. 📖

##

## Arrow Functions
As Arrow Functions possuem algumas características únicas, como:
- Escopo léxico
- Praticidades. Sintaxe mais curta, retorno automático se o argumento for em apenas uma linha.
- Não é possível criar construtores

## Default Functions Arguments
Os argumentos das funções podem ter um valor default. Na hora de declarar a função colocar *function a(param = 1, param = 1) {}*. Isso indica que se houver esquecimento da declaração do parâmetro o valor default será o estabelecido na função.

##

## Rest e Spread Operator

**Rest Operator:** *Sintaxe: (...args) => {}* no campo de argumentos da funçaõ e a função recebe todos os argumentos da chamada da função (o número de argumentos pode variar) como um array nativo (para manipulação). Pode ser utilizado para capturar os argumentos restantes, caso a função devesse ter menos argumentos. Funciona em funções padrões e arrow.

**Spread Operator:** Mesma sintaxe do Rest Operator, faz o processo inverso do rest operator. Pega um array e transforma cada item em um parâmetro separado para outra função. Também pode ser utilizado em strings, objetos e objetos iteráveis.

**Destructuring:** Em vez de precisar vincular posições de arrays às variáveis (como var char = characters[0]) podemos criar o array já com um apelido (destructuring). *Sintaxe: var [char1, char2, char3] = [1, 2, 3]*. Muito usado em React e permite acessar o valor com o label da variável. char1 já é a var que queríamos declarar. Possível aplicar em objetos. *Nota: Destructuring de objetos difere de array. em vez de colchete usa-se chaves {}*
