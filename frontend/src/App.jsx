import React from "react";
import { Routes,Route } from "react-router-dom";
import Home from "./Pages/Home";
import Collection from "./Pages/Collection";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Product from "./Pages/Product";
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Placeorder from './Pages/Placeorder';
import Order from './Pages/Orders';
import Navbar from "./components/Navbar";

const App = () =>{
  return(
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]"> 
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="collction" element={<Collection/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="/product/:productId" element={<Product/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path="/Login" element={<Login/>} />
      <Route path="/place-order" element={<Placeorder/>}/>
      <Route path="/Order" element={<Order/>}/>
    </Routes>
         
    </div>
  )

}
export default App

