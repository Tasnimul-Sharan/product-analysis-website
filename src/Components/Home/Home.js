import React from "react";
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
    </section>
  );
};

export default Home;
