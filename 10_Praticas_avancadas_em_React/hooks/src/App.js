import React, { Component } from 'react'
import './App.css';
import Counter from './Counter'

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

export default App;
