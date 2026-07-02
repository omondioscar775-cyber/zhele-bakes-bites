import { FaHeart, FaShoppingCart, FaStar, FaEye } from "react-icons/fa";

function ProductCard({ product }) {
  return (
    <div className="product-card">

      {product.badge && (
        <span className="product-badge">
          {product.badge}
        </span>
      )}

      <div className="product-image">
        <img src={product.image} alt={product.name} />

        <div className="product-actions">
          <button><FaHeart /></button>
          <button><FaEye /></button>
        </div>
      </div>

      <div className="product-info">

        <span className="product-category">
          {product.category}
        </span>

        <h3>{product.name}</h3>

        <div className="product-rating">
          {[...Array(product.rating)].map((_, index) => (
            <FaStar key={index} />
          ))}
        </div>

        <div className="product-footer">
          <h2>KSh {product.price.toLocaleString()}</h2>

          <button className="cart-btn">
            <FaShoppingCart />
            Add
          </button>
        </div>

      </div>

    </div>
  );
}

export default ProductCard;