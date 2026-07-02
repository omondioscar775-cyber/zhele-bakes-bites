import { FaShoppingCart, FaTrash } from "react-icons/fa";
import { useCart } from "../../../context/CartContext";

import "./SavedItems.css";

function SavedItems() {
  const {
    savedItems,
    moveToCart,
    removeSavedItem,
  } = useCart();

  if (savedItems.length === 0) return null;

  return (
    <section className="saved-items">

      <h2>Saved for Later</h2>

      <div className="saved-grid">

        {savedItems.map((item) => (
          <div
            key={`${item.id}-${item.selectedSize}-${item.selectedFlavour}`}
            className="saved-card"
          >
            <img
              src={item.image}
              alt={item.name}
            />

            <h4>{item.name}</h4>

            <p>{item.category}</p>

            <strong>
              KSh {item.price.toLocaleString()}
            </strong>

            <button
              className="move-btn"
              onClick={() =>
                moveToCart(
                  item.id,
                  item.selectedSize,
                  item.selectedFlavour
                )
              }
            >
              <FaShoppingCart />
              Move to Cart
            </button>

            <button
              className="remove-btn"
              onClick={() =>
                removeSavedItem(
                  item.id,
                  item.selectedSize,
                  item.selectedFlavour
                )
              }
            >
              <FaTrash />
              Remove
            </button>

          </div>
        ))}

      </div>

    </section>
  );
}

export default SavedItems;