import { Fragment, useState } from 'react'
import { connect } from 'react-redux'

function App() {
  let [valor, setValor] = useState(0);

  const decrement = () => {
    setValor(valor - 1)
  }

  const increment = () => {
    setValor(valor + 1)
  }

  return (
    <Fragment>
      <h1>Counter</h1>
      <button onClick={increment}>+</button>
        <div>{valor}</div>
      <button onClick={decrement}>-</button>
    </Fragment>
  );
}

export default App;
