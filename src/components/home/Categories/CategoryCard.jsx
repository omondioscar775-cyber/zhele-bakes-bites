function CategoryCard({ category }) {
  return (
    <div className="category-card">
      <img src={category.image} alt={category.name} />

      <div className="category-overlay">
        <h3>{category.name}</h3>
        <p>{category.items}</p>
      </div>
    </div>
  );
}

export default CategoryCard;