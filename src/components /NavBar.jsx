import React from "react";
import { Link } from "react-router-dom";

function NavBar({ onSearch }) {
  return (
    <>
      <div className="container">
        <Link to="/" className="box">
          <h2>Title</h2>
        </Link>
        <Link to="/" className="box">
          <h2>Home</h2>
        </Link>
        <div className="box">
          <input
            type="text"
            placeholder="search product"
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
        <Link to="/cart" className="box">
          <h2>Cart</h2>
        </Link>
      </div>
    </>
  );
}

export default NavBar;
