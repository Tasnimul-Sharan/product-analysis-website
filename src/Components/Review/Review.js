import CastomerReview from "../CastomerReview/CastomerReview";
import useReview from "../useReview/useReview";
import "./Review.css";

const Review = () => {
  const [reviews] = useReview();
  return (
    <section>
      <h1>What our Castomers say!</h1>
      <div className="review-container">
        {reviews.map((review) => (
          <CastomerReview review={review}></CastomerReview>
        ))}
      </div>
    </section>
  );
};

export default Review;
