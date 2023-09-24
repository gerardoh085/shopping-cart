import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./ShoppingCart.css";
const ShoppingCart = ({ productData }) => {
  const {
    products,
    setProducts,
    filteredData,
    setFilteredData,
    error,
    loading,
  } = productData;

  const hasItemsInCart = products.some((item) => item.quantity > 0);

  const handleRemoval = (itemId) => {
    const updatedProduct = products.map((items) => {
      if (itemId === items.id) {
        return { ...items, quantity: 0 };
      }
      return items;
    });
    const updatedFilteredData = filteredData.map((item) => {
      if (itemId === item.id) {
        return { ...item, quantity: 0 };
      }
      return item;
    });
    setProducts(updatedProduct);
    setFilteredData(updatedFilteredData);
  };
  const handleQuantityDecr = (itemId) => {
    const updatedProductItem = products.map((item) => {
      if (itemId === item.id) {
        if (item.quantity <= 1) {
          return { ...item, quantity: 1 };
        } else {
          return { ...item, quantity: item.quantity - 1 };
        }
      }
      return item;
    });
    const updatedFilteredDataItem = filteredData.map((item) => {
      if (itemId === item.id) {
        if (item.quantity <= 1) {
          return { ...item, quantity: 1 };
        } else {
          return { ...item, quantity: item.quantity - 1 };
        }
      }
      return item;
    });

    setProducts(updatedProductItem);
    setFilteredData(updatedFilteredDataItem);
  };

  const handleQuantityIncr = (itemId) => {
    const updatedProductItem = products.map((item) => {
      if (itemId === item.id) {
        if (item.quantity >= 99) {
          return { ...item, quantity: 1 };
        } else {
          return { ...item, quantity: item.quantity + 1 };
        }
      }
      return item;
    });
    const updatedFilteredDataItem = filteredData.map((item) => {
      if (itemId === item.id) {
        if (item.quantity >= 99) {
          return { ...item, quantity: 1 };
        } else {
          return { ...item, quantity: item.quantity + 1 };
        }
      }
      return item;
    });

    setProducts(updatedProductItem);
    setFilteredData(updatedFilteredDataItem);
  };
  const handleTotalPrice = products
    .reduce((acc, item) => acc + item.quantity * item.price, 0)
    .toFixed(2)
    .toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  const handlePayment = () => {
    // for now just reset item quantity to zero:
    const updatedProductItem = products.map((item) => {
      return { ...item, quantity: 0 };
    });
    const updatedFilteredDataItem = filteredData.map((item) => {
      return { ...item, quantity: 0 };
    });
    setProducts(updatedProductItem);
    setFilteredData(updatedFilteredDataItem);
  };

  return (
    <div className="general-shop-container">
      <div className="shopping-cart-container">
        {hasItemsInCart ? (
          <>
            {products.map((item) => {
              return (
                item.quantity > 0 && (
                  <div className="shopping-cart-items" key={item.id}>
                    <div className="cart-boxes">
                      <div className="cart-image-container">
                        <img src={item.image} className="cart-image" />
                      </div>

                      <div className="item-info-container">
                        <h3 className="item-title">{item.title}</h3>
                        <h4 className="item-orig-price">
                          ${item.price.toFixed(2)}
                        </h4>
                        <div className="item-info">
                          <div className="item-price-container">
                            <div className="item-total-price">
                              Total Price: $
                              {parseFloat(
                                (item.quantity * item.price).toFixed(2)
                              ).toLocaleString("en-US", {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              })}
                            </div>
                          </div>
                          <div className="item-remove-container">
                            <button
                              className="btn-rm"
                              onClick={() => {
                                handleRemoval(item.id);
                              }}
                            >
                              Remove x
                            </button>
                          </div>
                        </div>
                        <div className="item-quantity-control">
                          <button
                            className="btn_num"
                            onClick={() => {
                              handleQuantityDecr(item.id);
                            }}
                          >
                            -
                          </button>
                          <div className="item-num">{item.quantity}</div>
                          <button
                            className="btn_num"
                            onClick={() => {
                              handleQuantityIncr(item.id);
                            }}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              );
            })}
          </>
        ) : (
          <></>
        )}
      </div>
      {hasItemsInCart === false && (
        <div className="no-cart-items">
          <div className="no-items-box">
            <div className="no-items-desc">
              Your shopping cart is currently empty. Explore our store and
              discover a wide range of clothing, accessories, and more. Start
              shopping now and fill your cart with stylish items!
            </div>
            <div className="btn-shop">
              <Link className="linkBtn" to={"/shop"}>
                <button className="shopBtn">Shop Now</button>
              </Link>
            </div>
          </div>
        </div>
      )}
      {hasItemsInCart && (
        <div className="user-pay-info">
          <div className="discounts">
            <div>Discounts:</div>
            <div className="apply-discount">Apply discount</div>
          </div>
          <div className="login-section">
            <div>Log in to use your member offers!</div>
            <button className="btn-login" type="button">
              Log in
            </button>
          </div>
          <div className="underline"></div>
          <div className="total-item-prices">
            <p>Total Price:</p>
            <p>${handleTotalPrice}</p>
          </div>
          <div className="pay-container">
            {/* <Link className="btn-container" to={"/"} onClick={handlePayment}> */}

            <Link className="btn-continue" onClick={handlePayment} to={"/"}>
              <button className="btn-pay">Continue to Checkout</button>
            </Link>

            {/* </Link> */}
          </div>
          {/* <div className="pay-container">
            <button>Proceed to purchase</button>
          </div> */}
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
