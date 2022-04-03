import React from "react";
import "./CastomerReview.css";

const CastomerReview = ({ review }) => {
  const { name, reviews, ratings } = review;
  return (
    <div className="Review-item">
      <h4>name: {name}</h4>
      <h5>review: {reviews}</h5>
      <p>ratings: {ratings}</p>
    </div>
  );
};

export default CastomerReview;
