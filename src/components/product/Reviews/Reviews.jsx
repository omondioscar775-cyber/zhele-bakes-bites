import { FaStar } from "react-icons/fa";
import "./Reviews.css";

const reviews = [
  {
    id: 1,
    name: "Mary Wanjiku",
    rating: 5,
    comment:
      "Absolutely delicious! The cake looked amazing and tasted even better.",
  },
  {
    id: 2,
    name: "Brian Otieno",
    rating: 5,
    comment:
      "Fast delivery and excellent customer service. Highly recommended.",
  },
  {
    id: 3,
    name: "Faith Njeri",
    rating: 4,
    comment:
      "Fresh pastries and great presentation. I'll definitely order again.",
  },
];

function Reviews() {
  return (
    <section className="reviews">
      <h2>Customer Reviews</h2>

      {reviews.map((review) => (
        <div
          key={review.id}
          className="review-card"
        >
          <div className="review-stars">
            {[...Array(review.rating)].map((_, index) => (
              <FaStar key={index} />
            ))}
          </div>

          <h4>{review.name}</h4>

          <p>{review.comment}</p>
        </div>
      ))}
    </section>
  );
}

export default Reviews;