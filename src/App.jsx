import { useState, useEffect } from "react";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/header/NavBar";
import { useParams } from "react-router-dom";
import Shop from "./components/shop/Shop";
import ShoppingCart from "./components/shoppingcart/ShoppingCart";
import Home from "./components/Home";
import About from "./components/about/About";

const useProductURL = () => {
  const [products, setProducts] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products", { cors: true })
      .then((res) => {
        if (res.statusCode >= 400) {
          throw new Error("server error");
        }
        return res.json();
      })
      .then((items) => {
        const modifiedData = items.map((item) => {
          if (!item.quantity) {
            item.quantity = 0;
          }
          return item;
        });
        setProducts(modifiedData);
        setFilteredData(modifiedData);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);
  // console.log(products);
  return {
    products,
    setProducts,
    filteredData,
    setFilteredData,
    error,
    loading,
  };
};

function App() {
  const { name } = useParams();
  const productData = useProductURL();
  return (
    <>
      <NavBar productData={productData} />
      {name === "shop" ? (
        <Shop productData={productData} />
      ) : name === "shoppingcart" ? (
        <ShoppingCart productData={productData} />
      ) : name === "about" ? (
        <About />
      ) : (
        <Home />
      )}
    </>
  );
}

export default App;
