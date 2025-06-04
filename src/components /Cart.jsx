import React from "react";
import Card from "./Card";
import { useCart } from "./CartContext";

function Cart() {
  const { cart, total, totalRupees } = useCart();
  return (
    <>
      <div className="cart">
        <h4>NO of items : {total}</h4>
        <h4>Total : $ {totalRupees.toFixed(2)}</h4>
        <div className="products">
          {cart.map((val) => (
            <Card key={val?.id} products={val} page={"cart"} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Cart;
