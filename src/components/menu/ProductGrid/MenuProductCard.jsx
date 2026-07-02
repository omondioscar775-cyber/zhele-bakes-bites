import { Link } from "react-router-dom";
import { FaShoppingCart, FaHeart, FaStar } from "react-icons/fa";
import { useCart } from "../../../context/CartContext";

function MenuProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="menu-product-card">

      <div className="product-image">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
          />
        </Link>

        {product.badge && (
          <span className="badge">
            {product.badge}
          </span>
        )}
      </div>

      <div className="product-content">

        <span className="category">
          {product.category}
        </span>

        <Link
          to={`/product/${product.id}`}
          className="product-title"
        >
          <h3>{product.name}</h3>
        </Link>

        <div className="rating">
          {[...Array(product.rating)].map((_, index) => (
            <FaStar key={index} />
          ))}
        </div>

        <p className="product-description">
          {product.description.length > 80
            ? `${product.description.substring(0, 80)}...`
            : product.description}
        </p>

        <div className="price-row">
          <h2>KSh {product.price.toLocaleString()}</h2>

          <button
            className="wishlist"
            aria-label="Add to wishlist"
          >
            <FaHeart />
          </button>
        </div>

        <button
          className="cart-button"
          onClick={() => addToCart(product)}
        >
          <FaShoppingCart />
          Add to Cart
        </button>

      </div>
    </div>
  );
}

export default MenuProductCard;