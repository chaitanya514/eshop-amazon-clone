import React from "react";
import "./Product.css";

const Product = ({ id, prodTitle, prodPrice, prodRatings, prodImage }) => {
  return (
    <div className="product__wrapper">
      <div className="product__card">
        <div className="product__info">
          <title></title>
          <p className="product__title">{prodTitle}</p>
          <p className="product__Price">${prodPrice}</p>
          <div className="product__ratings">
            {Array(prodRatings)
              .fill()
              .map((_, i) => (
                <p className="ratings">⭐</p>
              ))}
          </div>
          <img src={prodImage} alt={prodTitle} className="product__img" />
        </div>
        <button>Add To Basket</button>
      </div>
    </div>
  );
};

export default Product;
