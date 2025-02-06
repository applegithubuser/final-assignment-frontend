import React from "react";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Shared/Loading/Loading";

const MyProducts = () => {
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["my-products"],
    queryFn: async () => {
      const res = await fetch("http://localhost:3000/my-products?email=user@example.com"); // Replace with logged-in user's email
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h1 className="text-2xl">My Products</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product._id} className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{product.name}</h2>
              <p>{product.description}</p>
              <p>Price: ${product.resalePrice}</p>
              <button className="btn btn-error">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProducts;