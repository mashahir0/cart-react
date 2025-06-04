import React, { useEffect, useState } from "react";

function useFetchData({ query, limit = 10 }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const controller = new AbortController();
    const fetchData = async () => {
      try {
        const responce = await fetch(
          `https://dummyjson.com/products/search?q=${query}&limit=${limit}`,
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
  }, [limit, query]);
  return { data, loading, error };
}

export default useFetchData;
