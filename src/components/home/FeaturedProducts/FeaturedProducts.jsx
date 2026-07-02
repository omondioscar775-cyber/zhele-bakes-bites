import "./FeaturedProducts.css";
import products from "../../../data/products";
import ProductCard from "./ProductCard";

function FeaturedProducts() {

  const featuredProducts = products.filter(
    (product) => product.featured
  );

  return (
    <section className="featured-products">

      <div className="container">

        <div className="section-title">

          <span>Customer Favorites</span>

          <h2>Featured Products</h2>

          <p>
            Discover our most loved cakes, pastries,
            snacks, pizzas and refreshing drinks.
          </p>

        </div>

        <div className="products-grid">

          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default FeaturedProducts;