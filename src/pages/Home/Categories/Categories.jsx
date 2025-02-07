import React from "react";
import { Link } from "react-router-dom"; // Use Link for navigation
import { useInView } from "react-intersection-observer"; // Import useInView hook
import clothing from "../../../assets/image/clothing.png"; // Import your category images
import beauty from "../../../assets/image/beauty.png";
import homeDecor from "../../../assets/image/homedecor.png";
import electronics from "../../../assets/image/electronics.jpeg";
import accessories from "../../../assets/image/accessories.jpg";
import kitchen from "../../../assets/image/kitchen.png";
import health from "../../../assets/image/health.png";
import toys from "../../../assets/image/toy.png";

const Categories = () => {
  const categories = [
    { name: "Clothing", image: clothing, route: "/category/clothing" },
    { name: "Beauty & Personal Care", image: beauty, route: "/category/beauty" },
    { name: "Home & Garden", image: homeDecor, route: "/category/home-garden" },
    { name: "Electronics", image: electronics, route: "/category/electronics" },
    { name: "Accessories", image: accessories, route: "/category/accessories" },
    { name: "Kitchen", image: kitchen, route: "/category/kitchen" },
    { name: "Health & Wellness", image: health, route: "/category/health" },
    { name: "Toys", image: toys, route: "/category/toys" },
  ];

  // Use the useInView hook to detect when the section is in view
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.2, // Trigger when 20% of the element is visible
  });

  return (
    <div
      ref={ref} // Attach the ref to the section
      className="categories my-24 px-8"
    >
            <div className="text-center font-semibold mb-3 md:mb-10">
        <h2 className="text-primary">Our Collections</h2>
        <h3 className="text-2xl md:text-3xl">Categories of product</h3>
      </div>
      <div
        className={`grid grid-cols-2 md:grid-cols-4 gap-8 text-center transition-all duration-1000 ease-in-out ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        {categories.map((category, index) => (
          <Link to={category.route} key={index}>
            <div className="category-card w-full bg-slate-100 p-4 rounded-md shadow-lg flex flex-col items-center transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r from-primary to-secondary hover:text-white">
              {/* Category Image */}
              <img
                src={category.image}
                alt={`${category.name} category`}
                className="w-full h-40 object-cover rounded-md mb-4 transition-all duration-300 ease-in-out hover:scale-95"
              />
              {/* Category Name */}
              <h3 className="text-lg font-medium mb-2">{category.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;