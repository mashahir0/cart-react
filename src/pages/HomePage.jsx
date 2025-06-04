import React, { useState } from "react";
import NavBar from "../components /NavBar";
import Products from "../components /Products";

function HomePage() {
  const [search, setSearch] = useState("");
  return (
    <div>
      <NavBar onSearch={setSearch} />
      <Products search={search} />
    </div>
  );
}

export default HomePage;
