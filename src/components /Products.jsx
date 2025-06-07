import React, { useEffect, useState } from "react";
import Card from "./Card";
import useFetchData from "../hooks/useFetchData";

function Products({ search }) {
  console.log(search);
  const [products, setProducts] = useState([]);
  const [page ,setPage] = useState(1)
  const { data, loading, error } = useFetchData({ query: search, limit: 15 , page });
  useEffect(() => {
    setProducts(data || []);
  }, [data]);

  const handlePrev = ()=>{
    if(page > 1) setPage((prev)=> prev-1)
  }
  const handleNext = ()=> setPage((prev) => prev+1)

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  return (
    <>
      <div className="products">
        {products.map((val) => (
          <Card key={val.id} products={val} page={"home"} />
        ))}
      </div>
      <div className="pagination">
        <button onClick={()=>handlePrev()} disabled={page === 1}>prev</button>
        <span>{page}</span>
        <button onClick={()=>handleNext()}>next</button>
      </div>
    </>
  );
}

export default Products;
