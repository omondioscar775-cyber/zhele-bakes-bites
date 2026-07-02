import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";

import Navbar from "../components/layout/Navbar/Navbar";
import Footer from "../components/layout/Footer/Footer";

import products from "../data/products";

import ProductGallery from "../components/product/ProductGallery/ProductGallery";
import ProductInfo from "../components/product/ProductInfo/ProductInfo";
import ProductOptions from "../components/product/ProductOptions/ProductOptions";
import RelatedProducts from "../components/product/RelatedProducts/RelatedProducts";
import Reviews from "../components/product/Reviews/Reviews";

import "./Product.css";

function Product() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return <Navigate to="/menu" replace />;
  }

  const relatedProducts = products.filter(
    (item) =>
      item.category === product.category &&
      item.id !== product.id
  );

  return (
    <>
      <Navbar />

      <main className="product-page">

        <div className="container">

          {/* Breadcrumb */}

          <div className="breadcrumb">

            <Link to="/">Home</Link>

            <span>/</span>

            <Link to="/menu">Menu</Link>

            <span>/</span>

            <span>{product.name}</span>

          </div>

          {/* Product Section */}

          <section className="product-details">

            <ProductGallery product={product} />

            <div className="product-right">

              <ProductInfo product={product} />

              <ProductOptions product={product} />

            </div>

          </section>

          <RelatedProducts products={relatedProducts} />

          <Reviews />

        </div>

      </main>

      <Footer />
    </>
  );
}

export default Product;