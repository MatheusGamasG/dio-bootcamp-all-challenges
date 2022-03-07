import { Fragment } from 'react';
import './App.css';
import Button from './Botao'

function Container(props) {
  return <div className="container">{props.children}</div>;
}

function sum(a, b) {
  return alert(a + b);
}

function App() {
  return (
    <Fragment>
      <Button name="Click Here to Sum" onClick={() => sum(1, 2)}/>
      <Container>
        <Button name="Don't show me" onClick={() => sum(5, 5)}/>
      </Container>
    </Fragment>
  );
}

export default App;
