import React from "react";
import "./header.css";
import { Link, useParams } from "react-router-dom";

function NavBar() {
  return (
    <>
      <header className="header-container">
        {/* logo/icon */}
        <div className="header-item-container">
          <div className="logo">
            <h4>Fake Api Store</h4>
          </div>
          <div className="path-items">
            <div>
              <Link to={"/"}>Home</Link>
            </div>
            <div>
              <Link to={"/shop"}>Shop</Link>
            </div>
            <div>
              <Link to={"/"}>About</Link>
            </div>
            <div>
              <Link to={"/shoppingcart"}>Cart</Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default NavBar;
