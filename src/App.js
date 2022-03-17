import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './comp/Cart';
import Header from './comp/Header';
import Home from './comp/Home';

function App() {
  return (
    <BrowserRouter>
     <Header/>

     <Routes>
     <Route path='/' element ={<Home/>} />
     <Route path='/cart' element={<Cart/>}/ >



     </Routes>

     {/* <div>
       <Route path='/' exact >
           <Home/>
       </Route>
       <Route path='/cart' exact >
           <Cart/>
       </Route>
     </div> */}

    </BrowserRouter>
  );
}

export default App;
