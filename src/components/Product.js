import React from "react";

export const Product = ({ product }) => {
  let { image, title, price, description } = product;
  return (
    <div className="Products-item">
      <img src={image} alt={image} />
      <div className="Product-item-info">
        <h2>
          {title}
          <span>$ {price}</span>
        </h2>
        <p>{description}</p>
      </div>
      <button type="button">Comprar</button>
    </div>
  );
};
