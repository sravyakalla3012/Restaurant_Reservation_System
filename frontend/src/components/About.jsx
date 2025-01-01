import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
              Welcome to Food Munch, where every meal is a celebration of flavor, freshness, and hospitality. 
              We take pride in crafting dishes that combine the finest ingredients with a passion for culinary artistry.
              Whether you're here for a casual lunch, a family dinner, or a special celebration, our warm and inviting atmosphere makes every visit unforgettable. 
              At Food Munch, we believe in creating not just meals but memories, one plate at a time.
            </p>
            {/* Link to the Menu Page */}
            <Link to={"/menu"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.jpeg" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
