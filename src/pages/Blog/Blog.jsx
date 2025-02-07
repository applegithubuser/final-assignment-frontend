import React from "react";
import MainButton from "../../components/MainButton/MainButton";
import blogimage from "../../assets/image/blog1.jpg";
import blogimage2 from "../../assets/image/blog2.jpg";
import blogimage3 from "../../assets/image/blog3.jpg";
import blogimage4 from "../../assets/image/blog4.jpg";

const Blog = () => {
  const blogpost = [
    {
      image: blogimage,
      title: "Welcome to Dorkari Ponno!",
      description: "Dorkari Ponno is a trusted platform dedicated to making second-hand shopping easy, affordable, and secure. We bring together buyers and sellers, helping people find valuable products at reasonable prices. Whether you're searching for electronics, fashion, furniture, or household essentials, our platform provides a seamless shopping experience. Our goal is to promote sustainability by giving pre-loved products a second chance while helping you save money.",
    },
    {
      image: blogimage2,
      title: "Discover Amazing Deals!",
      description: "Why spend a fortune on brand-new items when you can get high-quality, gently used products at unbeatable prices? At Dorkari Ponno, we carefully curate second-hand items, ensuring affordability without compromising quality. From top-brand smartphones to trendy fashion items, our marketplace offers exclusive deals for smart shoppers. Enjoy incredible savings while reducing waste and contributing to an eco-friendly lifestyle.",
    },
    {
      image: blogimage3,
      title: "Sell Your Unused Items!",
      description: "Have items you no longer use? Don’t let them gather dust—turn them into cash with Dorkari Ponno! Our user-friendly platform allows you to list your products in just a few clicks. Whether it’s electronics, books, home appliances, or fashion accessories, our marketplace connects you with genuine buyers looking for affordable options. With secure transactions and a wide audience, selling has never been easier.",
    },
    {
      image: blogimage4,
      title: "Quality Finds at Second-Hand Prices!",
      description: "Shopping second-hand doesn’t mean compromising on quality. At Dorkari Ponno, we ensure that every product listed meets a certain standard. Whether it’s a smartphone, a stylish dress, or home decor, you can shop with confidence, knowing you're getting a great deal. Our platform embraces the idea of sustainability—by purchasing pre-loved products, you’re not only saving money but also reducing environmental waste. Great deals, second chances—Dorkari Ponno makes smart shopping a reality!",
    },
  ];

  return (
    <div className="md:my-20 px-5 md:w-3/4 mx-auto">
      {blogpost.map((post, index) => (
        <div key={index} className="px-5 my-10">
          <div className="md:flex items-center">
            <div className="md:w-1/2 mr-4">
              <h1 className="text-2xl md:text-5xl font-bold text-accent">
                {post.title}
              </h1>
              <p className="py-6">{post.description}</p>
              <MainButton>See more...</MainButton>
            </div>
            <div className="md:w-1/2 md:flex justify-end">
              <img
                src={post.image}
                alt={post.title}
                className="mt-5 md:mt-0 p-2 md:p-0 rounded-lg"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
