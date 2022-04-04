import React from "react";
import "./Product.css";

const Product = ({ review }) => {
  const { name, reviews, ratings } = review;
  return (
    <div className="home-review-item">
      <h3> {name}</h3>
      <h4>{reviews}</h4>
      <h5>ratings: {ratings}</h5>
    </div>
  );
};

export default Product;
