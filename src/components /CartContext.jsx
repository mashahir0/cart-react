import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    setCart((prev) => {
      const exist = prev.find((p) => p.id === item.id);
      if (exist) {
        alert("item already exist in cart ");
        return prev;
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };
  const remove = (id) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  const total = cart.reduce((acc, val) => acc + val.quantity, 0);
  const totalRupees = cart.reduce(
    (acc, val) => acc + val.price * val.quantity,
    0
  );
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        remove,
        total,
        totalRupees,
      }}
    >
      {" "}
      {children}
    </CartContext.Provider>
  );
}
