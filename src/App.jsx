import { useState } from "react";



import "./App.css";
import NavBar from "./components/navbar/NavBar";
import FilterBar from "./components/filters/FilterBar";
import Products from "./components/products/Products";


function App() {

  return (
    <>
    <NavBar/>
    <Products/>
    </>
  );
}

export default App;
