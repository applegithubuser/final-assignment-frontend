import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faHeadset, faLock } from "@fortawesome/free-solid-svg-icons";

const InfoCards = () => {
  const [isVisible, setIsVisible] = useState(false);
  const infoRef = useRef(null);

  const info = [
    { title: "Free Shipping", description: "On all orders over $50", icon: faTruck },
    { title: "24/7 Support", description: "We're here to help you anytime", icon: faHeadset },
    { title: "Secure Payment", description: "Your payment information is safe", icon: faLock },
  ];

  // Intersection Observer to trigger animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Show cards when in view
          } else {
            setIsVisible(false); // Hide cards when out of view
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the cards are in view
    );

    if (infoRef.current) {
      observer.observe(infoRef.current);
    }

    return () => {
      if (infoRef.current) {
        observer.unobserve(infoRef.current);
      }
    };
  }, []);

  return (
    <div ref={infoRef} className="info-cards flex justify-around my-16 px-16">
      {info.map((item, index) => (
        <div
          key={index}
          className={`card bg-gradient-to-r from-primary to-secondary p-4 rounded-md shadow-md text-center transform transition-all duration-500 ease-in-out hover:scale-105 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          <FontAwesomeIcon
            icon={item.icon}
            className="text-6xl text-white mb-4" // Changed icon color to white
          />
          <h3 className="font-semibold text-lg text-white">{item.title}</h3> {/* Changed text color to white */}
          <p className="text-white">{item.description}</p> {/* Changed text color to white */}
        </div>
      ))}
    </div>
  );
};

export default InfoCards;