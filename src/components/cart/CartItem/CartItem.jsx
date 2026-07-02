import { useState } from "react";
import { FaMinus, FaPlus, FaTrash, FaBookmark } from "react-icons/fa";

import { useCart } from "../../../context/CartContext";

import ConfirmModal from "../../common/ConfirmModal/ConfirmModal";

import "./CartItem.css";

function CartItem({ item }) {
  const {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    saveForLater,
  } = useCart();

  const [showModal, setShowModal] = useState(false);

  const handleRemove = () => {
    removeFromCart(
      item.id,
      item.selectedSize,
      item.selectedFlavour
    );

    setShowModal(false);
  };

  return (
    <>
      <div className="cart-item">

        <div className="cart-product">

          <img
            src={item.image}
            alt={item.name}
          />

          <div className="cart-info">

            <h4>{item.name}</h4>

            <p className="category">{item.category}</p>

            <p className="price">
              KSh {item.price.toLocaleString()}
            </p>

            <small>
              Size: <strong>{item.selectedSize}</strong>
            </small>

            <br />

            <small>
              Flavour: <strong>{item.selectedFlavour}</strong>
            </small>

            <button
              className="save-btn"
              onClick={() =>
                saveForLater(
                  item.id,
                  item.selectedSize,
                  item.selectedFlavour
                )
              }
            >
              <FaBookmark />
              Save for Later
            </button>

          </div>

        </div>

        <div className="quantity">

          <button
            onClick={() =>
              decreaseQuantity(
                item.id,
                item.selectedSize,
                item.selectedFlavour
              )
            }
          >
            <FaMinus />
          </button>

          <span>{item.quantity}</span>

          <button
            onClick={() =>
              increaseQuantity(
                item.id,
                item.selectedSize,
                item.selectedFlavour
              )
            }
          >
            <FaPlus />
          </button>

        </div>

        <div className="cart-total">
          KSh {(item.price * item.quantity).toLocaleString()}
        </div>

        <button
          className="delete"
          onClick={() => setShowModal(true)}
        >
          <FaTrash />
        </button>

      </div>

      <ConfirmModal
        isOpen={showModal}
        title="Remove Item"
        message={`Are you sure you want to remove "${item.name}" from your cart?`}
        onCancel={() => setShowModal(false)}
        onConfirm={handleRemove}
      />
    </>
  );
}

export default CartItem;