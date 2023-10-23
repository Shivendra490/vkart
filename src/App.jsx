import { useState } from "react";



import "./App.css";
import NavBar from "./components/navbar/NavBar";
import FilterBar from "./components/filters/FilterBar";
import Products from "./components/products/Products";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/cart/Cart";
import WishList from "./components/wishlist/WishList";



function App() {

  return (
    <>
    
   <BrowserRouter>
   <NavBar/>
    <Routes>
      <Route exact path="/" element={<Products/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/wishlist" element={<WishList/>}/>
    </Routes>
    
    
   </BrowserRouter>
    </>
  );
}

export default App;
