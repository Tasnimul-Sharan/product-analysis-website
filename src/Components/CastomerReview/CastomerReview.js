import React from "react";

const CastomerReview = ({ review }) => {
  const { name, reviews, ratings } = review;
  return (
    <div>
      <h4>name: {name}</h4>
      <h5>review: {reviews}</h5>
      <p>ratings: {ratings}</p>
    </div>
  );
};

export default CastomerReview;
