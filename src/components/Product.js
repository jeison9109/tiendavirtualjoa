import React from "react";

export const Product = ({ product, handleAddToCart }) => {
  let { image, title, price, description } = product;
  return (
    <div className="Products-item">
      <img src={`http://localhost:3006${product.image[0].url}`} alt={image} />
      <div className="Product-item-info">
        <h2>
          {title}
          <span>$ {price}</span>
        </h2>
        <p>{description}</p>
      </div>
      <button type="button" onClick={handleAddToCart(product)}>
        Comprar
      </button>
    </div>
  );
};
