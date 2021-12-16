import './App.css';
import NavBar from './components/NavBar';

function App() {

  const condition = true;
  console.log(`this is ${condition ? 'correct' : 'incorrect'}`);


  return (
    <div>
    <div className="App">
      <h1>FINANCIERA ONLINE</h1>
      </div>
      <div><NavBar/></div>

    </div>
  );
}

export default App;
