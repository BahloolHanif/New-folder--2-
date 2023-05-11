import React from "react";
import "./About.css";
import Whyus from "./Whyus";
function About() {
  return (
    <div className="container ">
      <div className="row">
        <div className="col-lg-6 col-md-8 col-sm-12">
          {" "}
          <img
            src="About.jpg"
            style={{ width: "100%", height: "100vh" }}
            alt="About"
          />
          <br />
          <br />
          <img
            src="Banner.png"
            style={{ width: "100%", height: "18vh" }}
            alt="About"
          />
        </div>
        <div className="col-lg-6 col-md-8 col-sm-12 jumbotron  text-center text-white about">
          {" "}
          <h3>About | Benative Marketing</h3>
          {<br />}
          <h5 style={{ color: "#095669" }}>
            "Socialize Your Business In Digital Era."
          </h5>
          <p className="text-justify">
            "Benative Marketing Is A Full-Service Digital Agency That Helps
            Businesses Maximize Their Online Potential. We Provide A Wide Range
            Of Services Including Digital Media Marketing, Web Development,
            Search Engine Optimization, Graphic Designing, Whiteboard Animation,
            And Content Writing.Our Team Of Experts Is Dedicated To Delivering
            Innovative Solutions That Drive Results And Help Businesses Succeed
            In A Constantly Evolving Digital Landscape. Whether You Need To
            Revamp Your Website, Improve Your Search Engine Rankings, Or Create
            Compelling Content, We Have The Skills And Expertise To Help You
            Achieve Your Goals. In Conclusion, If You're Looking For A
            Full-Service Digital Agency That Can Help You Maximize Your Online
            Potential, Look No Further Than Benative Marketing. Our Team Of
            Experts Is Dedicated To Delivering Innovative Solutions That Drive
            Results And Help Businesses Succeed In The Constantly Evolving
            Digital Landscape."
          </p>
        </div>
      </div>
      <Whyus />
    </div>
  );
}

export default About;
