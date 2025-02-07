import React from "react";
import about from "../../assets/image/aboutfirst.png";
import InfoCards from "./../Home/InfoCard/InfoCards";
import Reviws from "../Home/Reviews/Reviws";
import { NavLink } from 'react-router-dom';
import MainButton from './../../components/MainButton/MainButton';


const About = () => {
  return (
    <div>
        <div>
          <div className="md:my-20 px-5 md:w-3/4 mx-auto">
          <div className="">
            <div className="px-5 my-10">
              <div className=" md:flex items-start">
                <div className="md:w-1/2 md:flex justify-end mr-2">
                  <img
                    src={about}
                    className="mt-5 md:mt-0 p-2 md:p-0 rounded-lg"
                  />
                </div>
                <div className="md:w-1/2 ml-2">
                  <h1 className="text-2xl md:text-5xl font-bold text-accent">
                    Explore the world with F1 visa
                  </h1>
                  <p className="py-6">
                  Welcome to <b><NavLink to="/">Dorkari Ponno</NavLink></b>, your go-to online store for quality second-hand and essential products. We believe in making shopping affordable, sustainable, and hassle-free. Our platform offers a wide range of items, including electronics, home appliances, furniture, and daily necessities—carefully selected to ensure quality and value for money. 
                  <br/>
                  <br/>
                  At <b><NavLink to="/">Dorkari Ponno</NavLink></b>, we are committed to eco-friendly shopping by giving products a second life while helping customers save more. Whether you're looking for budget-friendly deals or rare finds, we’ve got you covered!
                  </p>
                  <MainButton>Contact Us</MainButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <InfoCards></InfoCards>
      <Reviws></Reviws>
    </div>
  );
};

export default About;
