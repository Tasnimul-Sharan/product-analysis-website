// import React, { useEffect, useState } from "react";

import CastomerReview from "../CastomerReview/CastomerReview";
import useReview from "../useReview/useReview";

const Review = () => {
  const [reviews] = useReview();
  return (
    <section>
      <div>
        <h1>What our Castomer say!</h1>
        {reviews.map((review) => (
          <CastomerReview review={review}></CastomerReview>
        ))}
      </div>
    </section>
  );
};

export default Review;
