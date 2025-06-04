import React, { useEffect, useState } from "react";
import Card from "./Card";
import useFetchData from "../hooks/useFetchData";

function Products({ search }) {
  console.log(search);
  const [products, setProducts] = useState([]);
  const { data, loading, error } = useFetchData({ query: search, limit: 10 });
  useEffect(() => {
    setProducts(data || []);
  }, [data]);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  return (
    <>
      <div className="products">
        {products.map((val) => (
          <Card key={val.id} products={val} page={"home"} />
        ))}
      </div>
    </>
  );
}

export default Products;
