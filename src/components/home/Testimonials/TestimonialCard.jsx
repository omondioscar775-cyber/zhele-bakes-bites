import { FaStar } from "react-icons/fa";

function TestimonialCard({ testimonial }) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-header">
        <div className="avatar">
          {testimonial.name.charAt(0)}
        </div>

        <div>
          <h3>{testimonial.name}</h3>
          <span>{testimonial.location}</span>
        </div>
      </div>

      <div className="stars">
        {[...Array(testimonial.rating)].map((_, index) => (
          <FaStar key={index} />
        ))}
      </div>

      <p>"{testimonial.comment}"</p>
    </div>
  );
}

export default TestimonialCard;