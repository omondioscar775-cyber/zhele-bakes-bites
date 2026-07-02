import { useState } from "react";

import Navbar from "../components/layout/Navbar/Navbar";
import Footer from "../components/layout/Footer/Footer";

import MenuHero from "../components/menu/MenuHero/MenuHero";
import MenuControls from "../components/menu/MenuControls/MenuControls";
import ProductGrid from "../components/menu/ProductGrid/ProductGrid";

import products from "../data/products";

import "./Menu.css";

function Menu() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [sort, setSort] = useState("Sort By");

  let filteredProducts = [...products];

  // Search
  filteredProducts = filteredProducts.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  // Category Filter
  if (category !== "All Categories") {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === category
    );
  }

  // Sort
  if (sort === "Price: Low to High") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sort === "Price: High to Low") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <>
      <Navbar />

      <MenuHero />

      <MenuControls
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        sort={sort}
        setSort={setSort}
      />

      <ProductGrid products={filteredProducts} />

      <Footer />
    </>
  );
}

export default Menu;