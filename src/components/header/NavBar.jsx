import React from "react";
import "./header.css";
import { Link, useParams } from "react-router-dom";
import { BiShoppingBag } from "react-icons/Bi";
function NavBar({ productData }) {
  const { products } = productData;
  console.log(products);
  const ItemQuantity = products.reduce((acc, item) => acc + item.quantity, 0);
  console.log(ItemQuantity);
  return (
    <>
      <header className="header-container">
        {/* logo/icon */}
        <div className="header-item-container">
          <div className="logo">
            <h4 className="title">Fake Store API</h4>
          </div>
          <div className="path-items">
            <div>
              <Link className="paths" to={"/"}>
                Home
              </Link>
            </div>
            <div>
              <Link className="paths" to={"/shop"}>
                Shop
              </Link>
            </div>
            <div>
              <Link className="paths" to={"/about"}>
                About
              </Link>
            </div>
          </div>
          <div className="cart-container">
            <Link to={"/shoppingcart"}>
              <BiShoppingBag className="icon" />
            </Link>
            {` (${ItemQuantity})`}
          </div>
        </div>
      </header>
    </>
  );
}

export default NavBar;
