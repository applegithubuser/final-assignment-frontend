import React from "react";

const BookNowModal = ({ product, onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const phoneNumber = form.phoneNumber.value;
    const meetingLocation = form.meetingLocation.value;

    const order = {
      productId: product._id,
      buyerEmail: "user@example.com", // Replace with logged-in user's email
      phoneNumber,
      meetingLocation,
      paymentStatus: "unpaid",
    };

    fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Order placed successfully!");
          onClose();
        }
      });
  };

  return (
    <div className="modal modal-open">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Book {product.name}</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            className="input input-bordered w-full my-2"
            required
          />
          <input
            type="text"
            name="meetingLocation"
            placeholder="Meeting Location"
            className="input input-bordered w-full my-2"
            required
          />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <button onClick={onClose} className="btn btn-ghost">
          Close
        </button>
      </div>
    </div>
  );
};

export default BookNowModal;