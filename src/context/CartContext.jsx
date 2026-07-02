import { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Add product to cart
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

  // Remove one cart item
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

  // Increase quantity
  const increaseQuantity = (id, size, flavour) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id &&
        item.selectedSize === size &&
        item.selectedFlavour === flavour
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrease quantity
  const decreaseQuantity = (id, size, flavour) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id &&
          item.selectedSize === size &&
          item.selectedFlavour === flavour
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Clear entire cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Subtotal
  const subtotal = useMemo(() => {
    return cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }, [cartItems]);

  // Delivery fee
  const deliveryFee = cartItems.length > 0 ? 300 : 0;

  // Grand total
  const total = subtotal + deliveryFee;

  // Total number of items
  const itemCount = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,

        addToCart,
        removeFromCart,

        increaseQuantity,
        decreaseQuantity,

        clearCart,

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