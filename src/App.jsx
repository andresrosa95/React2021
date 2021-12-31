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
      <NavBar/>
      <br />
      <ItemListContainer producto1='Parlante JBL Xtreme 3' producto2='Notebook HP Omen' producto3='Samsung Z Flip 3'
      producto4='Scooter Xiaomi Mi Pro 2' producto5='Apple Ipad Mini 2021' producto6='Smartwatch Amazfit GTS 3'/>
    </div>
  );
}

export default App;
