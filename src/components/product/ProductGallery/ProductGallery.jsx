import { useState } from "react";
import "./ProductGallery.css";

function ProductGallery({ product }) {
  const [selectedImage, setSelectedImage] = useState(product.gallery[0]);

  return (
    <div className="product-gallery">

      <div className="main-image">
        <img
          src={selectedImage}
          alt={product.name}
        />
      </div>

      <div className="thumbnail-gallery">
        {product.gallery.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${product.name} ${index + 1}`}
            className={
              selectedImage === image ? "active" : ""
            }
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>

    </div>
  );
}

export default ProductGallery;