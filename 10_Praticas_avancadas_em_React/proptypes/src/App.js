import './App.css';
import Exemplo from './Exemplo'

function App() {
  return (
    <Exemplo 
      array={[0, 1]}
      obj={{name: 'Matheus', foo: 'bar'}}
      boolean={true}
      fn={() => {console.log('Auuu')}}
    />
  );
}

export default App;
