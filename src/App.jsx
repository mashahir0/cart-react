import { useEffect, useState } from "react";

import "./App.css";
import NavBar from "./components /NavBar";
import Products from "./components /Products";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import { CartProvider } from "./components /CartContext";

function App() {
  const [search, setSearch] = useState("");

  return (
    <>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </Router>
      </CartProvider>
    </>
  );
}

export default App;
