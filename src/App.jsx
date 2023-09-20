import { useState, useEffect } from "react";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/header/NavBar";
import { useParams } from "react-router-dom";
import Shop from "./components/shop/Shop";
import ShoppingCart from "./components/ShoppingCart";
import Home from "./components/Home";

function App() {
  const { name } = useParams();
  return (
    <>
      <NavBar />
      {name === "shop" ? (
        <Shop />
      ) : name === "shoppingcart" ? (
        <ShoppingCart />
      ) : (
        <Home />
      )}
    </>
  );
}

export default App;
