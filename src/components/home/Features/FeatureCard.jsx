function FeatureCard({ feature }) {
  const Icon = feature.icon;

  return (
    <div className="feature-card">
      <div className="feature-icon">
        <Icon />
      </div>

      <div className="feature-text">
        <h3>{feature.title}</h3>
        <p>{feature.description}</p>
      </div>
    </div>
  );
}

export default FeatureCard;