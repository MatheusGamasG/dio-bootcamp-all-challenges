// Arrow Functions

const fn = () => console.log('Arrow Function: Sintaxe Básica e Retorno Automático')
fn();

// Default Functions Arguments

const sum = function(param = 3, param2 = 1) {
    let soma = param + param2;
    return console.log(soma);
}
sum(5);

// Rest Operator and Spread Operator

const boi = 'boi';
const cavalo = 'cavalo';
const cachorro = 'cachorro';

const rest = (a, b, ...rest) => {
    console.log(rest);
    return rest;
}
const arr = rest(1, 2, boi, cavalo, cachorro);

const newArr = [...arr, 'lagartixa', 'peru'];
console.log(`${newArr} é um exemplo de utilização de spread operator`);

//Destructuring

const [item1, item2, item3] = ['Leão', 'Coelho', 'Capivara'];
console.log(item2);

const ney = {
    nome: 'Neymar',
    profissao: 'Jogador'
}
const {nome, profissao} = ney;
console.log({profissao});

// Generators

function* imprime() {
    console.log('Matheus');
    yield
    console.log('Gamas');
    yield
    console.log('Guimarães');
    yield
}
const imprimir = imprime();
imprimir.next();
imprimir.next();
imprimir.next();