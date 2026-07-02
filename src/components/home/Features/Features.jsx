import "./Features.css";
import features from "../../../data/features";
import FeatureCard from "./FeatureCard";

function Features() {
  return (
    <section className="features">

      <div className="container">

        <div className="features-grid">

          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default Features;