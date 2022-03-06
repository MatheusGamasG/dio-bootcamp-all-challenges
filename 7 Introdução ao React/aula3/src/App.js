import './App.css';
import { Fragment } from 'react';


const showEvent = (params) => {
  console.log(params)
  alert('Obediente')
}

const Button = <button className="botao" onClick={showEvent}>Clique aqui!</button>

function App() {
  return (
    <Fragment>
      <h1>Aula de React</h1>
      <p>Estamos aprendendo...</p>
      {Button }
    </Fragment>
  )
}

export default App;
