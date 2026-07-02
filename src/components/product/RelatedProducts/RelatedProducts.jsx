import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import "./RelatedProducts.css";

function RelatedProducts({ products }) {
  if (!products.length) return null;

  return (
    <section className="related-products">
      <h2>You May Also Like</h2>

      <div className="related-grid">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="related-card"
          >
            <img
              src={product.image}
              alt={product.name}
            />

            <div className="related-content">
              <span>{product.category}</span>

              <h3>{product.name}</h3>

              <div className="stars">
                {[...Array(product.rating)].map((_, index) => (
                  <FaStar key={index} />
                ))}
              </div>

              <h4>KSh {product.price.toLocaleString()}</h4>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default RelatedProducts;