import './App.css';
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
      <div><NavBar/></div>
      <div><ItemListContainer producto1='Parlante JBL Xtreme 3' producto2='Notebook HP Omen' producto3='Samsung Z Flip 3'/></div>
    </div>
  );
}

export default App;
