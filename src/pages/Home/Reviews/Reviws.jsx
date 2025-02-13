import React from "react";
import people1 from "../../../assets/image/people1.jpg";
import people2 from "../../../assets/image/people2.jpg";
import people3 from "../../../assets/image/people3.jpg";
import qoute from "../../../assets/image/qoute.png";
import Review from "./Review";

const Reviws = () => {
  const reviews = [
    {
      _id: 1,
      name: "Winson Herry",
      img: people1,
      review:
        "Absolutely love this store! The products are of top-notch quality, and the customer service team is always ready to assist. My order arrived earlier than expected, and the packaging was excellent. Will definitely be shopping again!",
      location: "California",
    },
    {
      _id: 2,
      name: "Winson Herry",
      img: people2,
      review:
        "Great experience! The website is easy to navigate, and the checkout process was smooth. The product exceeded my expectations, and the prices are reasonable. Highly recommended!",
      location: "United Kingdom",
    },
    {
      _id: 3,
      name: "Winson Herry",
      img: people3,
      review:
        "This store never disappoints! I’ve ordered multiple times, and each time, I’ve been impressed with the quality and fast shipping. Plus, their return policy is hassle-free. Five stars!",
      location: "France",
    },
    {
      _id: 4,
      name: "Winson Herry",
      img: people3,
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "California",
    },
  ];

  return (
    <div className="my-12 px-5 mx-auto">
      <div className="flex justify-between">
        <div>
          <h2 className="text-4xl text-primary font-semibold">Customer Reviews</h2>
          <h4 className="text-2xl">People Says about us</h4>
        </div>
        <div>
          <img className="w-20 h-20" src={qoute} alt="" />
        </div>
      </div>

      <div className=" grid md:grid-cols-3 gap-4">
        {reviews.slice(0, 3).map((singleReview) => (
          <Review key={singleReview._id} singleReview={singleReview}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviws;
