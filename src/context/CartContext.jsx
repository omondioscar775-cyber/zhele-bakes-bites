import { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [savedItems, setSavedItems] = useState([]);

  // ===========================
  // Add product to cart
  // ===========================
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) =>
          item.id === product.id &&
          item.selectedSize === product.selectedSize &&
          item.selectedFlavour === product.selectedFlavour
      );

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id &&
          item.selectedSize === product.selectedSize &&
          item.selectedFlavour === product.selectedFlavour
            ? {
                ...item,
                quantity: item.quantity + product.quantity,
              }
            : item
        );
      }

      return [...prevItems, product];
    });
  };

  // ===========================
  // Remove from cart
  // ===========================
  const removeFromCart = (id, size, flavour) => {
    setCartItems((prevItems) =>
      prevItems.filter(
        (item) =>
          !(
            item.id === id &&
            item.selectedSize === size &&
            item.selectedFlavour === flavour
          )
      )
    );
  };

  // ===========================
  // Save for later
  // ===========================
  const saveForLater = (id, size, flavour) => {
    const item = cartItems.find(
      (item) =>
        item.id === id &&
        item.selectedSize === size &&
        item.selectedFlavour === flavour
    );

    if (!item) return;

    setSavedItems((prevItems) => {
      const exists = prevItems.find(
        (saved) =>
          saved.id === item.id &&
          saved.selectedSize === item.selectedSize &&
          saved.selectedFlavour === item.selectedFlavour
      );

      if (exists) {
        return prevItems;
      }

      return [...prevItems, item];
    });

    removeFromCart(id, size, flavour);
  };

  // ===========================
  // Move back to cart
  // ===========================
  const moveToCart = (id, size, flavour) => {
    const item = savedItems.find(
      (item) =>
        item.id === id &&
        item.selectedSize === size &&
        item.selectedFlavour === flavour
    );

    if (!item) return;

    addToCart(item);

    setSavedItems((prevItems) =>
      prevItems.filter(
        (saved) =>
          !(
            saved.id === id &&
            saved.selectedSize === size &&
            saved.selectedFlavour === flavour
          )
      )
    );
  };

  // ===========================
  // Remove saved item
  // ===========================
  const removeSavedItem = (id, size, flavour) => {
    setSavedItems((prevItems) =>
      prevItems.filter(
        (item) =>
          !(
            item.id === id &&
            item.selectedSize === size &&
            item.selectedFlavour === flavour
          )
      )
    );
  };

  // ===========================
  // Increase quantity
  // ===========================
  const increaseQuantity = (id, size, flavour) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id &&
        item.selectedSize === size &&
        item.selectedFlavour === flavour
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  // ===========================
  // Decrease quantity
  // ===========================
  const decreaseQuantity = (id, size, flavour) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id &&
          item.selectedSize === size &&
          item.selectedFlavour === flavour
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // ===========================
  // Clear cart
  // ===========================
  const clearCart = () => {
    setCartItems([]);
  };

  // ===========================
  // Totals
  // ===========================
  const subtotal = useMemo(() => {
    return cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }, [cartItems]);

  const deliveryFee = cartItems.length > 0 ? 300 : 0;

  const total = subtotal + deliveryFee;

  const itemCount = useMemo(() => {
    return cartItems.reduce(
      (sum, item) => sum + item.quantity,
      0
    );
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        // State
        cartItems,
        savedItems,

        // Cart actions
        addToCart,
        removeFromCart,
        clearCart,

        // Saved items
        saveForLater,
        moveToCart,
        removeSavedItem,

        // Quantity
        increaseQuantity,
        decreaseQuantity,

        // Totals
        subtotal,
        deliveryFee,
        total,
        itemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);