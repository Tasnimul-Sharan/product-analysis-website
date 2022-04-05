import React from "react";
import "./CastomerReview.css";

const CastomerReview = ({ review }) => {
  const { name, reviews, ratings } = review;
  return (
    <div className="Review-item">
      <div className="Review-item-container">
        <h3> {name}</h3>
        <h4>{reviews}</h4>
        <h5>ratings: {ratings}</h5>
      </div>
    </div>
  );
};

export default CastomerReview;
