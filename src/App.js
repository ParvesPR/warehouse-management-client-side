import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Products from './components/Home/Products/Products';
import Inventory from './components/Inventory/Inventory';
import ItemDetails from './components/ItemDetails/ItemDetails';
import Login from './components/Header/Login/Login';
import MyItems from './components/MyItems/MyItems';
import AddItems from './components/AddItems/AddItems';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/inventory/:productId' element={<ItemDetails></ItemDetails>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/myitems' element={<MyItems></MyItems>}></Route>
        <Route path='/additem' element={<AddItems></AddItems>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
