import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Cart } from './components/Cart';
import { CartContextProvider } from './components/CartContext';

function App() {

  const condition = true;
  console.log(`this is ${condition ? 'correct' : 'incorrect'}`);


  return (
    <CartContextProvider>
    <BrowserRouter>
<div className="App"><h1>CORDOBA TECH</h1></div>
      <NavBar/>
      <br />
    <Routes>
      <Route exact path='/' element={<ItemListContainer/>} />
      <Route exact path='/categoria/:idCategoria' element={<ItemListContainer/>} />    
      <Route exact path='/detalle/:idDetalle' element={<ItemDetailContainer/>} />   
      <Route exact path='/cart' element={<Cart/>} /> 
    </Routes>
        </BrowserRouter>
        </CartContextProvider>
  );
}

export default App;
