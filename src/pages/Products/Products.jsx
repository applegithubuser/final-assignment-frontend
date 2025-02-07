import React from "react";
import Product from "./Products";
import { useQuery } from "@tanstack/react-query";
import Loading from "../Shared/Loading/Loading";

const Products = () => {
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["all-products"],
    queryFn: async () => {
      const res = await fetch("http://localhost:3000/all-products");
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="mt-20 px-5 mx-auto">
      <div className="text-center font-semibold mb-3 md:mb-10">
        <h2 className="text-primary">Our Products</h2>
        <h3 className="text-2xl md:text-3xl">Explore our second-hand products</h3>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;