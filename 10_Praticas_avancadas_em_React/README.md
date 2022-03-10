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