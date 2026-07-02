import "./Categories.css";
import categories from "../../../data/categories";
import CategoryCard from "./CategoryCard";

function Categories() {
  return (
    <section className="categories">
      <div className="container">

        <div className="section-title">
          <span>Browse Our Menu</span>

          <h2>Popular Categories</h2>

          <p>
            Discover our delicious range of freshly prepared meals,
            baked goods, and refreshing drinks.
          </p>
        </div>

        <div className="categories-grid">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Categories;