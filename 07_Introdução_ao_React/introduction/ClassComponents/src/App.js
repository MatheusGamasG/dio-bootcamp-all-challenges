import { Fragment , Component} from 'react';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      idade: 18,
      profissao: 'professor'
    }
  }

  aumentaIdade() {
    this.setState({
      idade: this.state.idade + 1
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.idade}</h1>
        <button onClick={() => this.aumentaIdade()}>Aumentar</button>
      </div>
    );
  }
}

export default App;
