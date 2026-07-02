import "./ProductGrid.css";
import products from "../../../data/products";
import MenuProductCard from "./MenuProductCard";

function ProductGrid() {
  return (
    <section className="menu-products">
      <div className="container">

        <div className="products-grid">

          {products.map((product) => (
            <MenuProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default ProductGrid;