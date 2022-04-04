import React from "react";
import { Link } from "react-router-dom";
import CastomerReview from "../CastomerReview/CastomerReview";
import useReview from "../useReview/useReview";
// import image  "./images/drone.png";

const Home = () => {
  const [reviews] = useReview();

  return (
    <section>
      <div>
        <h1>this is home</h1>
      </div>
      <div>
        <img src="/src/images/drone.png" alt="" />
      </div>
      <div>
        <h3>Castomer review(3)</h3>
        {reviews.map((review) => (
          <CastomerReview review={review}></CastomerReview>
        ))}
        <Link to="/review">
          <button>See all Reviews</button>
        </Link>
      </div>
    </section>
  );
};

export default Home;
