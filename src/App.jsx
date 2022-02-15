import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/Navbar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Cart } from './components/Cart/Cart';
import { CartContextProvider } from './context/CartContext';

function App() {



  return (
    <div className="fondo">
    <CartContextProvider>
    <BrowserRouter>

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
        </div>);
}

export default App;
