import './App.css';
import { useState } from 'react'

function App() {

  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  return (
    <div>
      <h1>Teste</h1>
      <button onClick={() => setCounter(counter + 1)}>{counter}</button>
      <button onClick={() => setCounter2(counter2 + 1)}>{counter2}</button>
    </div>
  );
}

export default App;
