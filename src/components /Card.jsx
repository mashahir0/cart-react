import React, { useState } from "react";
import useFetchData from "../hooks/useFetchData";
import { useCart } from "./CartContext";

function Card({ page, products }) {
  const { addToCart, remove } = useCart();

  const handleClick = (id) => {
    if (page === "cart") {
      remove(id);
    } else if (page === "home") {
      console.log(products, "www");
      addToCart(products);
      console.log("home operation");
    }
  };

  return (
    <div className="card">
      <h2>{products?.title}</h2>
      <p>{products?.description}</p>
      <span>${products?.price}</span>
      <button onClick={() => handleClick(products?.id)}>
        {page === "cart" ? "remove" : "add to cart"}{" "}
      </button>
    </div>
  );
}

export default Card;
