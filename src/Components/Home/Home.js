import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import CastomerReview from "../CastomerReview/CastomerReview";
import useReview from "../useReview/useReview";
import drone from "./images/drone.png";

const Home = () => {
  const [reviews] = useReview();

  return (
    <section>
      <div className="home">
        <div>
          <h1>Drone Neutralization Device</h1>
          <p>
            Drones now have many functions, ranging from monitoring climate
            change to carrying out search operations after natural disasters,
            photography, filming, and delivering goods. But their most
            well-known and controversial use is by the military for
            reconnaissance, surveillance and targeted attacks.
          </p>
          <button>Live Demo</button>
        </div>
        <div>
          <img src={drone} alt="" />
        </div>
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
