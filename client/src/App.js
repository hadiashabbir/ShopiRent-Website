import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer";
import Browse from "./components/Browse/Browse";

import { BrowserRouter, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path='/' element={<Home />}/>
      <Route path='/browse' element={<Browse/>}/>  
      <Route path='/login' element={<Login/>}/>  
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
