import React from "react";
import "./About.css";
import AboutImg from "../../image/asset 46.jpeg";
import PageHeader from "../PageHeader/PageHeader";

const About = () => {
  return (
    <>
      <PageHeader>About Us</PageHeader>
      <div className="about-content container">
        <div className="about-text">
          <span>Our Story</span>
          <h2>
            Our Mission is to <br /> Provide a World‑class <br /> Education.
          </h2>
          <p>
            Online courses designed for creatives and made for <br /> everyone.
            Take a course on Code, Design or Project
          </p>
        </div>
        <div>
          <img src={AboutImg} alt="about" className="about-img" />
        </div>
      </div>
    </>
  );
};

export default About;
