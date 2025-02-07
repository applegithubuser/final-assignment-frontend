import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import BookNowModal from "./BookNowModal";

const ProductDetails = () => {
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    data: product,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const res = await fetch(`http://localhost:3000/products/${id}`);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching product details</div>;

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.resalePrice}</p>
      <p>Condition: {product.condition}</p>
      <p>Location: {product.location}</p>
      <button onClick={() => setIsModalOpen(true)} className="btn btn-primary">
        Book Now
      </button>
      {isModalOpen && (
        <BookNowModal
          product={product}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default ProductDetails;