import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import banner1 from "../../../assets/image/banner1.jpg";
import banner2 from "../../../assets/image/banner2.jpg";
import banner3 from "../../../assets/image/banner3.jpg";
import banner4 from "../../../assets/image/banner4.jpg";

const Banner = () => {
  // Define images and texts for the slider
  const slides = [
    {
      image: banner1,
      text: "Welcome to Dorkari Ponno!",
      description: "Your trusted platform for buying and selling second-hand products.",
    },
    {
      image: banner2,
      text: "Discover Amazing Deals!",
      description: "Find high-quality second-hand products at unbeatable prices.",
    },
    {
      image: banner3,
      text: "Sell Your Unused Items!",
      description: "Turn your unused items into cash with Dorkari Ponno.",
    },
    {
      image: banner4,
      text: "Quality Finds at Second-Hand Prices!",
      description: "Great Deals, Second Chances – Shop Smart with Dorkari Ponno.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false); // State to handle transition
  const navigate = useNavigate(); // Initialize navigation hook

  // Update the slide every 5 seconds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setIsTransitioning(true); // Start transition
      setTimeout(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        setIsTransitioning(false); // End transition
      }, 500); // Transition duration
    }, 5000);

    return () => clearInterval(slideInterval); // Clean up interval on component unmount
  }, [slides.length]);

  return (
    <div
      className="banner relative w-full h-[600px] flex items-center justify-center bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
    >
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Centered Text */}
      <div
        className={`relative z-10 text-center text-white transition-all duration-1000 ease-in-out ${
          isTransitioning ? "opacity-0 translate-y-10" : "opacity-100 translate-y-0"
        }`}
      >
        <h1 className="text-4xl md:text-6xl font-bold">{slides[currentSlide].text}</h1>
        <p className="mt-4 text-lg md:text-xl font-semibold">
          {slides[currentSlide].description}
        </p>

        {/* Shop Now Button */}
        <button
          onClick={() => navigate("/products")} // Navigate to the products page
          className="mt-8 px-6 py-3 bg-primary text-white font-bold rounded-3xl hover:bg-secondary transition"
        >
          Explore Products
        </button>
      </div>

      {/* Background Image Transition */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
        style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
      ></div>
    </div>
  );
};

export default Banner;