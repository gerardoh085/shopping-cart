import React, { useState } from "react";
import "./header.css";
import { Link, useParams } from "react-router-dom";

import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import CloseIcon from "@mui/icons-material/Close";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

function NavBar({ productData }) {
  const [dropdown, setDropdown] = useState(false);
  const { products } = productData;
  const ItemQuantity = products.reduce((acc, item) => acc + item.quantity, 0);
  const HandleDropDown = () => {
    return (
      <div className="invis-container">
        <div className="exit-icon-container">
          <CloseIcon
            className="dropdown-icon exit-icon"
            onClick={() => setDropdown((prev) => (prev = !prev))}
          ></CloseIcon>
        </div>
        {/* <div className="dropdown-menu">
          
        </div> */}
        <div className="item-link-list">
          <Link
            className="link-nav"
            onClick={() => setDropdown(false)}
            to={"/"}
          >
            Home
          </Link>
          <Link
            className="link-nav"
            onClick={() => setDropdown(false)}
            to={"/shop"}
          >
            Shop
          </Link>
          <Link
            className="link-nav"
            onClick={() => setDropdown(false)}
            to={"/about"}
          >
            About
          </Link>
          <Link
            className="link-nav"
            onClick={() => setDropdown(false)}
            to={"/shoppingcart"}
          >
            Shopping Cart
          </Link>

          {/* <div>Home</div>
          <div>Shop</div>
          <div>About</div>
          <div>Shopping Cart</div> */}
        </div>
      </div>
    );
  };
  return (
    <>
      <header className="header-container">
        {/* logo/icon */}
        <div className="header-item-container">
          <div className="logo">
            <ShoppingBagIcon className="logo-svg"></ShoppingBagIcon>

            <div className="title"> Fake Store API</div>
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
              <AddShoppingCartIcon className="icon" />
            </Link>
            {` (${ItemQuantity})`}
          </div>
          <div className="dropdown-lines invis">
            <DensityMediumIcon
              className="dropdown-icon"
              onClick={() => setDropdown((prev) => (prev = !prev))}
            />
            {dropdown === true ? <HandleDropDown></HandleDropDown> : <></>}
          </div>
        </div>
      </header>
    </>
  );
}

export default NavBar;
