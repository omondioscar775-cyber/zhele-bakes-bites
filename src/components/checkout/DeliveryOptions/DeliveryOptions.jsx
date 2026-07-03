import "./DeliveryOptions.css";

function DeliveryOptions() {
  return (
    <section className="checkout-section">
      <h2>Delivery Options</h2>

      <label className="option">
        <input
          type="radio"
          name="delivery"
          value="pickup"
          defaultChecked
        />
        Pickup
      </label>

      <label className="option">
        <input
          type="radio"
          name="delivery"
          value="delivery"
        />
        Home Delivery
      </label>
    </section>
  );
}

export default DeliveryOptions;