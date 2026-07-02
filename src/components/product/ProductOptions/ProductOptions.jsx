import { useState } from "react";
import { FaHeart, FaShoppingCart, FaBolt } from "react-icons/fa";
import { useCart } from "../../../context/CartContext";
import "./ProductOptions.css";

function ProductOptions({ product }) {
  const { addToCart } = useCart();

  const [size, setSize] = useState(product.sizes[0]);
  const [flavour, setFlavour] = useState(product.flavours[0]);
  const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity((prev) => prev + 1);

  const decrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart({
      ...product,
      selectedSize: size,
      selectedFlavour: flavour,
      quantity,
    });
  };

  return (
    <div className="product-options">

      <div className="option-group">
        <label>Choose Size</label>

        <div className="option-buttons">
          {product.sizes.map((item) => (
            <button
              key={item}
              className={size === item ? "active" : ""}
              onClick={() => setSize(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="option-group">
        <label>Choose Flavour</label>

        <div className="option-buttons">
          {product.flavours.map((item) => (
            <button
              key={item}
              className={flavour === item ? "active" : ""}
              onClick={() => setFlavour(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="quantity-selector">
        <label>Quantity</label>

        <div className="quantity-controls">
          <button onClick={decrease}>−</button>

          <span>{quantity}</span>

          <button onClick={increase}>+</button>
        </div>
      </div>

      <div className="action-buttons">

        <button
          className="wishlist-btn"
          aria-label="Add to wishlist"
        >
          <FaHeart />
        </button>

        <button
          className="cart-btn"
          onClick={handleAddToCart}
        >
          <FaShoppingCart />
          Add to Cart
        </button>

        <button className="buy-btn">
          <FaBolt />
          Buy Now
        </button>

      </div>

    </div>
  );
}

export default ProductOptions;