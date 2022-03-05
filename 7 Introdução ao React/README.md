# React 

É uma biblioteca, e não um framework, para criar interfaces para os usuários. É uma linguagem declarativa e não imperativa, a maior preocupação da lib é a exibição da interface ao usuário. E suas aplicabilidades são muito vastas e é baseada em componentes (pequenos pedaços que vão se encaixando e compondo a aplicação).

*Single Page Application (SPA):* Não há a necessidade de se fazer requisições constante para carregamento de novas páginas. A aplicação seria “carregada” por inteiro na primeira requisição, onde todo o HTML, CSS e JavaScript necessários seriam carregados de uma vez evitando posteriores requisições ao servidor. 

## Getting Started

Para começar um projeto é necessário instalar o react via npm. É possível fazer manualmente, mas um bom modo de fazer isso é com:
```
npx create-react-app
```

O arquivo que renderizará a página é o App.js que conta com um retorno da função App que vai ser o corpo da nossa aplicação. O interessante é que trata-se de um formato chamado JSX que mistura JavaScript com html. Então o retorno da função é em HTML, com algumas diferenças. Por exemplo, quando atribuímos uma classe:
```
// HTML padrão
<div class="container">

// No JSX
<div className="container">
```

Isso ocorre porque class é uma palavra reservada do React. Outra diferença interessante é que dentro do html é possível adicionar funções e variáveis JavaScript abrindo chaves.
```
<div>Texto qualquer {chamaFuncao()}</div>
```

## Renderização de elementos

O React não trabalha diretamente em cima do DOM, mas usa o virtual DOM. Quando existir uma mudança na página o React não vai renderizar toda a página novamente, mas vai pegar aquela parte e renderizar apenas ela.

Basicamente, o responsável por renderizar a página é a função ReactDOM.render que recebe o parâmetro A (que normalmente vai ser os elementos que queremos inserir em html) e o parâmetro B que é o root, o ambiente onde o parâmetro A será adicionado. No caso do create-react-app padrão uma div root já vem por padrão como parâmetro B e uma função App.js já vem por padrão como parâmetro A retornando algum HTML.

Para a função ReactDOM.render a função App (ou qualquer outra função que for renderizada, na verdade) será declara da forma:
```
function App() {
    // declarations
}

ReactDOM.render(<App />, rootElement)
```

Ou seja, para chamar uma função na renderização a sintaxe varia um pouco do JavaScript Vanilla.
Não é necessário ter apenas o App renderizando na página, mas, de acordo com o instrutor, é o que normalmente é utilizado e as outras funções estarão dentro do corpo da função App.

## Componentes e Props

Conceitos básicos do React que o torna modular e organizado. Tenta reaproveitar código. 

Os **componentes** são funções desacopladas que retornam HTML e serão renderizadas na página. É exatamente o que a função App está fazendo no exemplo do Getting Started.

Nome de componentes usando o padrão CamelCase, mas com a letra inicial maiúscula. Importante observação é que se quisermos usar mais do que um elemento html de retorno é necessário encapsular em uma div, caso contrário compilará erro.

Exemplo de componente:
```
function Button() {
    return (
        <div>
            <button>Botão 1</button>
            <button>Botão 2</button>
        </div>
    )
}
```

A boa prática é que os componentes sejam o mais puro possível para que possa ser reutilizável. (Sem regra de negócio interna, etc.)

As **props** são informações passadas aos componentes, passagem de parâmetros de um componente ao outro. Por exemplo:

```
function Button(props) {
    const {name, onClick} = props;

    return (
        <button onClick={onClick}>{name}</button>
    )
}

// em outro arquivo temos

function sum(a, b) {
    return alert(a + b);
}

function App() {
    <Button name="Clique aqui" onClick={() => sum(1, 2)}/>
}

ReactDOM.render(<App />, rootElement)
```
Nesse caso as props são o nome do botão e uma callback function que será executada no clique. Note como o componente Button ficou pura e podendo ser reutilizável.

Para utilizar componentes aninhados é necessário repassar uma props chamada children (props.children). Pense no contexto anterior mas com um novo componente, o DivComponent:
```
function DivComponent(props) {
    return <div>{props.children}</div>
}

function App() {
    <Fragment>
        <Button name="Clique aqui" onClick={() => sum(1, 2)}/>
        <DivComponent>
            <Button name="Show me, please" onClick{() => sum(3, 4)}>
        </DivComponent>
    </Fragment>
}

ReactDOM.render(<App />, rootElement)
```

A primeira coisa é que elementos adjacentes precisam de algo as envolvendo. Por isso existe a tag Fragment no React, para não precisar ficar criando elementos HTML desnecessariamente.
A segunda coisa é que o segundo botão não apareceria se não fosse o *props.children* sendo chamado no seu retorno, é preciso dizer ao react que esse componente terá algum filho.

## Estado e Ciclo de Vida

**O que é estado?** Estado que um componente está e é um dado que varia com o tempo. Diferente do props que são dados passados de componente para componente.

Quando o estado é mudado deve causar uma nova renderização daquele componente. O estado só pode ser utilizado em componentes de classe, que possui acesso ao *this*. Componentes funcionais (que vimos até agora) não podem acessar states.

O Ciclo de Vida do React passa por um fluxo esperado e algumas funções, basicamente temos:

Inicialização -> Montagem -> Atualização -> Desmontagem

Dentro desse ciclo de vida existem várias funções específicas que vale a pena ir mais fundo.
Link para mais informações sobre o ciclo de vida: https://i.pinimg.com/originals/ff/54/ff/ff54ff744556e997e339bca0514dd724.png

Visando evitar problemas de performance, nenhum componente deve saber outro componente possui estado ou não. O state é apenas local ao componente e se for necessário usar a informação em outro componente usar props.

Como funciona a Componentização por classes?

Precisa importar o {Component} from 'React' e construir nos moldes de Orientação a Objetos. Nisso, é possível definir estado no constructor e depois acessá-los.

```
class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
        state1 = 0,
        state2 = 'string'
        }
    }

    modifyState() {
        this.setState({
            state1: newvalue
        })
    }

    render() {
        return (
            <div>
                <h1></h1>
                <button onClick={() => this.modifyState()}></button>
            </div>
        );
    }
}
```

## Webpack

Webpack é um module blunder que facilita a organização de arquivos e reduz os arquivos javascript para que possa ser importado diretamente no html, por exemplo. Melhora muito a otimização do projeto.

### Principais conceitos:

a) Entry - Ponto de entrada: O arquivo raiz principal para mapear(via grafos) onde estão os outros módulos
b) Output: Quais são os módulos que vão exportar para o arquivo final.
c) Loaders: Servem para permitir que o Webpack gerencie outros tipos de arquivos além do javascript
d) Plugins: Servem para injeção de scripts, minificação, otimização de pacotes, etc.
e) Mode: Passar os tipos de configurações que queremos no Webpack
    *Production (Otimizações internas para entrar em produção), Development (Executa três plugins mais básicos para ajudar no debug e sem as otimizações) ou None (Nenhuma configuração)*

### Configurando

Primeiramente, instalar a dependência via npm:

```
npm install -D webpack webpack-cli
```

Depois, criar um arquivo webpack.config.js e fazer a configuração inicial:
```
const path = require('path');

module.exports = {
    entry: './src/index.js'
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundler.js'
    }
}
```
As propriedades do path estão explicados nos principais conceitos. 
Configurando um script com "webpack --mode production" ele já trará o resultado (output) como um bundler.js com o arquivo otimizado para produção.

Vamos instalar o Babel também. Ele transpila os dados para que navegadores com suportes antigos de javascript possam entender o código.
```
npm install @babel/core babel-loader @babel/preset-env @babel/preset-react -dev
```

Para que o webpack possa utilizar os recursos do babel, adicionar ao webpack.config.js outra propriedade ao exports:
```
module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }
    ]
}
```

Criar um arquivo .babelrc com o seguinte conteúdo dentro: (esse arquivo é o padrão que o babel vai ler todos os presets e plugins dentro dele)
```
{
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
    ]
}
```

Para começar a rodar o react em modo desenvolvimento, criar o arquivo index.js e app.js na pasta src e definir algumas importações e renderização padrão:
```
// Para o arquivo index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js'

ReactDOM.render(<App />, document.getElementById("root"));
```
```
// Para o arquivo app.js
import React from 'react';

const App = () => {
    return <div>Hello world!</div>
}

export default App;
```
Por fim é necessário configurar o arquivo html que vai ser a base também (criar um index.html):
```
<html>
<head></head>
<body>
    <div id='root'>
    </div>
</body>
</html>
```

Instalar o plugin e loader do webpack em relação ao html com:
```
npm install -D html-web-plugin html-loader
```

Requerir o plugin, então adicionar no webpack.config.js:
```
import webPackHtmlPlugin = require("html-web-plugin");
```

Adicionar o mode: production (ou development) e o plugin no JSON do webpack.config.js.
```
module.exports = {
    [...]
        mode: production,
        plugins: [
            new webPackHtmlPlugin({
                template: "indexhtmlpath",
                filename: "htmlOutputAlongsideBundler.js"
            })
        ]
    [...]
}
```

Adicionar mais uma dependência:
```
npm install -D webpack-dev-server
```

Ir no package.json e adicionar o script: 
```
    "start-dev": "webpack-dev-server"
```

E usar o script para gerar a página e ter hot reload (dar build antes para gerar o bundler.js e bundler.html) :)

**Nota importante:** Para mais informações do webpack: https://webpack.js.org/concepts/

**Nota importante:** Usar o comando abaixo via npm já nos traz esse ambiente montado, porém conhecer como ele é construído é bem importante, pois é facilmente manipulável e consegue entregar uma aplicação com apenas os packages e plugins necessários para o objetivo do projeto.
```
npx create-react-app
```