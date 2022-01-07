import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {

  const condition = true;
  console.log(`this is ${condition ? 'correct' : 'incorrect'}`);


  return (
    <div>
    <div className="App">
      <h1>CORDOBA TECH</h1>
      </div>
      <NavBar/>
      <br />
      <ItemListContainer/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
