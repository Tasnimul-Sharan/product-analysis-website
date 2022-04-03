import React from "react";
import { Link } from "react-router-dom";
import CastomerReview from "../CastomerReview/CastomerReview";
import useReview from "../useReview/useReview";

const Home = () => {
  const [reviews] = useReview();
  //   const data = [
  //     {
  //       picture:
  //         "https://img.freepik.com/free-photo/laptop-wooden-table_53876-20635.jpg?size=626&ext=jpg&uid=R67494978&ga=GA1.2.986424658.1648222770",
  //     },
  //   ];
  return (
    <section>
      <div>
        <h1>this is home</h1>
      </div>
      <div>{/* <img src={data.picture} alt="" /> */}</div>
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
