import React, { useEffect, useState } from "react";
import "./shop.css";
import ShoppingCart from "../shoppingcart/ShoppingCart";
import { Link } from "react-router-dom";

// const useProductURL = () => {
//   const [products, setProducts] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products", { cors: true })
//       .then((res) => {
//         if (res.statusCode >= 400) {
//           throw new Error("server error");
//         }
//         return res.json();
//       })
//       .then((items) => {
//         const modifiedData = items.map((item) => {
//           if (!item.quantity) {
//             item.quantity = 0;
//           }
//           return item;
//         });
//         setProducts(modifiedData);
//         setFilteredData(modifiedData);
//       })
//       .catch((error) => setError(error))
//       .finally(() => setLoading(false));
//   }, []);
//   console.log(products);
//   return {
//     products,
//     setProducts,
//     filteredData,
//     setFilteredData,
//     error,
//     loading,
//   };
// };

const Shop = ({ productData }) => {
  const handleNegativeBtn = (e, itemId) => {
    const updatedData = products.map((item) => {
      if (item.id === itemId) {
        if (item.quantity <= 0) {
          return { ...item, quantity: 0 };
        } else {
          return { ...item, quantity: item.quantity - 1 };
        }
      }
      return item;
    });
    const updatedDataFiltered = filteredData.map((item) => {
      if (item.id === itemId) {
        if (item.quantity <= 0) {
          return { ...item, quantity: 0 };
        } else {
          return { ...item, quantity: item.quantity - 1 };
        }
      }
      return item;
    });
    setProducts(updatedData);
    setFilteredData(updatedDataFiltered);
  };
  const handleAddBtn = (itemId) => {
    const updatedQuantity = products.map((item) => {
      if (item.id === itemId) {
        if (item.quantity >= 99) {
          return { ...item, quantity: 0 };
        } else {
          return { ...item, quantity: item.quantity + 1 };
        }
      }
      return item;
    });
    const updatedQuantityFiltered = filteredData.map((item) => {
      if (item.id === itemId) {
        if (item.quantity >= 99) {
          return { ...item, quantity: 0 };
        } else {
          return { ...item, quantity: item.quantity + 1 };
        }
      }
      return item;
    });
    setFilteredData(updatedQuantityFiltered);
    setProducts(updatedQuantity);
  };
  const handleFilteredItems = (e, cate) => {
    if (cate === "All") {
      setFilteredData(products);
    } else {
      const filteredItems = products.filter((items) => items.category === cate);
      setFilteredData(filteredItems);
    }
  };
  const {
    products,
    setProducts,
    filteredData,
    setFilteredData,
    error,
    loading,
  } = productData;

  if (error) {
    return <p>A network error was encountered</p>;
  }
  if (loading) {
    return <p>loading...</p>;
  }
  return (
    <section className="shop-container">
      <div className="btn-container">
        <div>
          <button
            onClick={(e) => {
              handleFilteredItems(e, "All");
            }}
            className="btn-options"
          >
            All
          </button>
        </div>
        <div>
          <button
            onClick={(e) => {
              handleFilteredItems(e, "men's clothing");
            }}
            className="btn-options"
          >
            Men's
          </button>
        </div>
        <div>
          <button
            onClick={(e) => {
              handleFilteredItems(e, "women's clothing");
            }}
            className="btn-options"
          >
            Women's
          </button>
        </div>
        <div>
          <button
            onClick={(e) => {
              handleFilteredItems(e, "electronics");
            }}
            className="btn-options"
          >
            Electronics
          </button>
        </div>
        <div>
          <button
            onClick={(e) => {
              handleFilteredItems(e, "jewelery");
            }}
            className="btn-options"
          >
            Jewelery
          </button>
        </div>
      </div>
      <div className="product-container">
        {filteredData.map((item) => {
          return (
            <div className="product-items-ti" key={item.id}>
              <div className="item-boxes">
                <div className="image-container">
                  <img className="product-image" src={`${item.image}`}></img>
                </div>
                <div className="product-title-container">
                  <p className="product-title">{item.title}</p>
                </div>
                <div className="product-price-container">
                  <p className="product-price">${item.price.toFixed(2)}</p>
                </div>
                <div className="add-item-container">
                  <button
                    onClick={(e) => {
                      handleNegativeBtn(e, item.id);
                    }}
                    className="decr btn_num"
                  >
                    -
                  </button>
                  <div className="quantity_display">{item.quantity}</div>
                  <button
                    onClick={() => {
                      handleAddBtn(item.id);
                    }}
                    className="asc btn_num"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Shop;
