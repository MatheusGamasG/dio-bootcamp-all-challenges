# Práticas avançadas em projetos com React

## Ciclo de Vida Detalhado

O hook useEffect possui a capacidade de emular todas as etapas do ciclo de vida do React em uma função (componentes funcionais).

## Context API

Utilizado para passar dados globais ao React. Para usá-lo, primeiro é necessário criar um contexto:

Em um novo arquivo, exemplo:
```
import { createContext } from 'react'

export const globalVariable = {
    first: 'wow',
    foo: 'bar'
}

export const GlobalTheme = createContext(globalVariable.first)
```

Isso ainda não basta para ser acessada globalmente, por isso iremos na camada superior da aplicação (que normalmente será o App.js), importaremos o arquivo criado com o contexto global e: 
```
import { GlobalTheme, globalVariable }  from './pathname'

function App() {
    return (
        <GlobalTheme.Provider value={globalVariable.foo}>
            <RandomComponent />
        </GlobalTheme.Provider>
    )
}
```

O provider fará com que todas as camadas inferiores a ela ouça o contexto aplicado. Quando eu quiser usar em algum componente, deve-se usar o useContext.
```
import React, { use Context } from 'react'
import { GlobalTheme } from './pathname/

function RandomComponent() {
    const myVar = useContext(GlobalTheme);
    console.log(globalVariable);
    return (
        <button>{myVar.foo}</button>
    )
}
```

## Fragments

Serve para adicionar multiplos elementos lado a lado sem precisar criar um nós extra no dom, como uma div.

Isso prejudica bastante o SEO da página e cria nós desnecessários.

```
<>
    <Child />
    <Child />
</>
```

## Error Boundary

Captura o erro sem quebrar todo o layout do React, que é o que acontece normalmente. PAra iso, é necessário envelopar toda a aplicação com um Error Boundary. Ou seja, encapsular o componente <App /> em um error boundary.

```
class ErrorBoundary extends Component {
    super(props)
    this.state = {
        hasError = false
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo)
        this.setState({
            hasError: true
        })
    }

    render() {
        if (this.state.hasError) {
            return <img src={imageError} />
        }

        return this.props.children
    }
}

export default ErrorBoundary
```

Depois disso é só importar a tag no arquivo de mais alto nível do React e encapsular toda a aplicação com o ErrorBoundary.

## Render Props

Compartilhar código entre componentes cujo corpo é uma função. Ou seja, reaproveita uma lógica em outro componente.

```
import React, { Component } from 'react'

class Counter extends Component {
    super(props)
    this.state = {
        count: 0
    }

    increment = () => {
        const { count } = this.state
        this.setState({
            count: count + 1
        })
    }

    decrement = () => {
        const { count } = this.state
        this.setState({
            count: count - 1
        })
    }

    render() {
        const { render } = this.props
        const { count } = this.state

        return (
            <div>
                {
                    render({
                        increment: this.increment,
                        decrement: this.decrement,
                        count
                    })
                }
            </div>
        )
    }
}

export default Counter

```

Então pode-se criar um componente com todas as lógicas que você quer utilizar, que é o exemplo acima, e depois utilizar em outro componente a mesma lógica.

```
import Counter from './path/Counter'

const Buttons = ({ increment, decrement, count }) => {
    return (
        <div>
            <h1>Valor Atual: {count}</h1>
            <div>
                <button onClick={increment}>Adicionar</button>
            </div>
            <div>
                <button onClick={decrement}>Remover</button> 
            </div>
        </div>
    )
}

class App extends Component {

    render() {
        return (
            <div>
                <Counter render={
                    ( { increment, decrement, count } ) => (
                        <Buttons 
                            increment={increment}
                            decrement={decrement}
                            count={count}    
                        />
                    )
                }>

                </Counter>
            </div>
        )
    }
}

```

## PropTypes

Verifica se as propriedades estão sendo importadas e quais os tipos dela. Os proptypes não são utilizados quando o projeto utiliza TypeScript.

Então dentro de um componente eu poderia definir os tipos de props que seriam utilizados. Inclusive, posso fazer com que algumas props sejam obrigatórias de existir dentro de determinado componente.

```
import React from 'react'
import PropTypes from 'prop-types'

function Exemplo(props) {
    const {gatos, cachorros, homens} = props

    return (
        <div>
            <h1>Gatos: {gatos}</h1>
            <h2>Cachorros: {cachorros}</h2>
            <h3>Donos: {homens}</h3>
        </div>
    )
}

Exemplo.propTypes = {
    gatos: PropTypes.number.isRequired,
    cachorros: PropTypes.string,
    donos: PropTypes.string
}

export default Exemplo
```

É possível colocar também propriedades default. Adicionando no mesmo arquivo:

```
Exemplo.propDefault = {
    gatos: 0,
    cachorros: 'Labrador',
    donos: 'Matheus'
}
```

## Refs e DOM

É possível passar um ref para todo elemento, é assim que vamos acessar tal elemento. Para isso, usa-se o hook useRef

```
import { useRef } from 'react'

function App() {

    const inputRef = useRef()

    const handleClick = () => {
        inputRef.current.focus();
    }


    return (
        <>
            Foco: <input ref={inputRef} />
            <button onClick={handleClick}>Focar</button>
        </>
    )
}

```

Por meio do atributo current do ref do elemento, é possível acessar qualquer atributo nativo dele. Como no exemplo, o focus.

## Dumb Components

Componentes sem lógica interna, apenas para renderizar algo na tela (apresentação) e recebem valores via props, são dumbs pq não fazem nenhum tratamento de dados. Normalmente não usam states. Os cálculos ficariam nos containers.

Ex: Cards, Lists. **Verificar pasta dumbcomponents com exemplos de tabela e botão.**

Nos Dumb Components é muito interessante usar o memo para evitar que ocorra alguma re-renderização desnecessária sem mudança de props quando atualizamos um elemento pai, já que eles não possuem estado.

```
import React, { memo } from 'react'

function Button({ onClick }) {
    return (
        <button onClick={onClick}>Delete</button>
    );
} 

export default memo(Button)
```

## Smart Components

Preocupam-se como as coisas vão funcionar, mas tem aplicações mais especificas do que os dumb components. Podem conter smart e dumb components. Na maioria dos casos possuem estado e chamam outros fluxos do sistema.

Dificilmente serão usados em outro contexto, pois terá contextos bem específicos.

Diferente dos dumb components, não costumam possuir estilizações CSS.

