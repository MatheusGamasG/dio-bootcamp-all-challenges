
import Table from './Components/Table'

function App() {

  const deleteRow = ({ target }) => {
    target.parentNode.remove();
  }

  const user1 = {
    name: 'Matheus',
    age: 26
  }

  const user2 = {
    name: 'Ana Paula',
    age: 21
  }

  return (
    <Table user1={user1} user2={user2} deleteRow={deleteRow} />
  );
}

export default App;
