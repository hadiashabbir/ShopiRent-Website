import { useEffect} from "react";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer";
import Browse from "./components/Browse/Browse";
import Cart from "./components/Cart/Cart";

import { BrowserRouter, Route, Routes, useLocation} from 'react-router-dom';
import PostDetail from "./components/PostDetail/PostDetail";
import Checkout from "./components/Checkout/Checkout";
import Contact from "./components/Contact/Contact";


function App(props) {
  
  return (
    <BrowserRouter>
    {/* const location = useLocation(); */}
    {/* {
      location.pathname == '/login'? null : <Header/>
    } */}
    <Header/>
    <Routes>
    <Route path='/' element={<Home />}/>
      <Route path='/browse' element={<Browse/>}/>  
      <Route path='/browse/:id' element={<PostDetail/>}/>  
      <Route path='/login' element={<Login/>}/>  
      <Route path='/cart' element={<Cart/>}/> 
      <Route path='/checkout' element={<Checkout/>}/> 
      <Route path='/contact' element={<Contact/>}/> 
    </Routes>
    <Footer/>
    {/* {
      window.location.pathname === '/login'? null : <Footer/>
    } */}
    </BrowserRouter>
  );
}

export default App;
