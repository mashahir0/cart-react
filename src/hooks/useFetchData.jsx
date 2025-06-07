import React, { useEffect, useState } from "react";

function useFetchData({ query, limit = 15,page =1 }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [debouncedQuery, setDebouncedQuery] = useState('')

  useEffect(()=>{
    const timer = setTimeout(() => {
      setDebouncedQuery(query || '')
    }, 400);
    return ()=>clearInterval(timer)
  },[query])

  useEffect(() => {
    setLoading(true);
    setError(null);

    const controller = new AbortController();
    const fetchData = async () => {
      try {
        const skip = (page - 1) *limit
        const responce = await fetch(
          `https://dummyjson.com/products/search?q=${debouncedQuery}&limit=${limit}&skip=${skip}`,
          { signal: controller.signal }
        );
        const result = await responce.json();
        console.log(result);
        setData(result.products || []);
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(err.message || "Something went wrong");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    return () => controller.abort();
  }, [debouncedQuery , limit, page]);
  return { data, loading, error };
}

export default useFetchData;
