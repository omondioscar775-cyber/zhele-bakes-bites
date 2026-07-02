import { FaStar, FaClock, FaCheckCircle } from "react-icons/fa";
import "./ProductInfo.css";

function ProductInfo({ product }) {
  return (
    <div className="product-info">

      <span className="product-category">
        {product.category}
      </span>

      <h1>{product.name}</h1>

      <div className="rating">
        {[...Array(product.rating)].map((_, index) => (
          <FaStar key={index} />
        ))}
      </div>

      <h2>KSh {product.price.toLocaleString()}</h2>

      <p>{product.description}</p>

      <div className="product-meta">

        <p>
          <FaClock /> Preparation: {product.prepTime}
        </p>

        <p>
          <FaCheckCircle />
          {product.stock ? " In Stock" : " Out of Stock"}
        </p>

      </div>

    </div>
  );
}

export default ProductInfo;