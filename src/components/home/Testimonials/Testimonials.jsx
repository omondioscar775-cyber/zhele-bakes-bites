import "./Testimonials.css";
import testimonials from "../../../data/testimonials";
import TestimonialCard from "./TestimonialCard";

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">

        <div className="section-title">
          <span>What Our Customers Say</span>

          <h2>Customer Testimonials</h2>

          <p>
            We love serving our customers, and their feedback
            inspires us to keep delivering quality every day.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;