import React, { useState } from "react";
import "./header.css";
import { Link, useParams } from "react-router-dom";
import { BsCart4 } from "react-icons/Bs";
import { GiClothes } from "react-icons/Gi";
import { FaShoppingBag } from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
function NavBar({ productData }) {
  const [dropdown, setDropdown] = useState(false);
  const { products } = productData;
  const ItemQuantity = products.reduce((acc, item) => acc + item.quantity, 0);
  const HandleDropDown = () => {
    return (
      <div className="invis-container">
        <div className="exit-icon-container">
          <RxCross2
            className="dropdown-icon exit-icon"
            onClick={() => setDropdown((prev) => (prev = !prev))}
          ></RxCross2>
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
            <FaShoppingBag className="logo-svg"></FaShoppingBag>

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
              <BsCart4 className="icon" />
            </Link>
            {` (${ItemQuantity})`}
          </div>
          <div className="dropdown-lines invis">
            <HiOutlineMenu
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
