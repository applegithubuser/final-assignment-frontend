import React from "react";
import toast from "react-hot-toast";

const AddProduct = () => {
  const handleAddProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const description = form.description.value;
    const image = form.image.files[0];

    if (!image) {
      return toast.error("Image Is Required!");
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("image", image);

    fetch("http://localhost:3000/add-product", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Product Added Successfully!");
          form.reset();
        }
      });
  };

  return (
    <div>
      <h1 className="text-2xl">Add Product</h1>
      <div className="modal-box">
        <form onSubmit={handleAddProduct}>
          <input
            type="text"
            name="name"
            placeholder="Product name"
            className="input input-bordered w-full mt-4"
          />
          <input
            accept="image/*"
            type="file"
            name="image"
            placeholder="Add product image"
            className="input input-bordered w-full mt-4"
          />
          <textarea
            type="text"
            placeholder="Product description"
            name="description"
            className="input input-bordered w-full h-28 mt-4"
          />
          <input
            className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white w-full mt-4"
            type="submit"
            value="Add Product"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;