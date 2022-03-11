import Item from './components/item/index'
import Card from './components/Card';

function App() {
  return (
    <>
      <h1>Minha primeira aplicação com React</h1>
      <ul>
        <Item name="Item 1" />
        <Item name="Item 2" />
        <Item name="Item 3" />
      </ul>
      <Card />
    </>
  );
}

export default App;
