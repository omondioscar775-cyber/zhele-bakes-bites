import "./MenuControls.css";

function MenuControls() {
  return (
    <section className="menu-controls">
      <div className="container controls">

        <input
          type="text"
          placeholder="Search products..."
        />

        <select>
          <option>All Categories</option>
          <option>Cakes</option>
          <option>Pastries</option>
          <option>Doughnuts</option>
          <option>Pizza</option>
          <option>Snacks</option>
          <option>Drinks</option>
        </select>

        <select>
          <option>Sort By</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Most Popular</option>
        </select>

      </div>
    </section>
  );
}

export default MenuControls;