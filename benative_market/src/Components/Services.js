import React from "react";
import "./Services.css";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="container ">
      <h3 className="services">Our Services</h3>
      <h2 className="serline">Discover the Variety of Services We Offer</h2>

      <div className="row  text-center">
        <div className="col-lg-4 col-md-6 col-sm-12 ">
          <div className="eachservice">
            <i className="fas fa-globe fa-3x  awesome"></i>
            <Link to="/webdev">
              <h4 className="multicolor ">Web Development</h4>
              <p className="service_p">
                We offer custom web development solutions using the latest
                technologies to build fast, responsive, and user-friendly
                websites.
              </p>
            </Link>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="eachservice">
            <i className="fas fa-bullhorn fa-3x  awesome"></i>
            <Link to="/digitalmm">
              <h4 className="multicolor">Digital Marketing</h4>
              <p className="service_p">
                Our digital marketing services help businesses of all sizes to
                increase their online presence, attract more customers, and
                achieve their goals.
              </p>
            </Link>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 ">
          <div className="eachservice">
            <i className="fas fa-paint-brush fa-3x awesome"></i>
            <Link to="/design">
              <h4 className="multicolor">Graphic Design</h4>
              <p className="service_p">
                We create visually appealing designs that convey your message
                effectively and enhance your brand identity across all mediums.
              </p>
            </Link>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="eachservice">
            <i className="fas fa-search fa-3x awesome"></i>
            <Link to="/seo">
              <h4 className="multicolor">Search Engine Optimization</h4>
              <p className="service_p">
                Our SEO experts use proven strategies to improve your website's
                visibility, ranking, and traffic to drive more leads and
                revenue.
              </p>
            </Link>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 ">
          <div className="eachservice">
            <i className="fas fa-share-alt fa-3x awesome"></i>
            <Link to="/socialmm">
              <h4 className="multicolor">Social Media Marketing</h4>
              <p className="service_p">
                We help you connect with your audience on social media
                platforms, engage them with relevant content, and convert them
                into loyal customers.
              </p>
            </Link>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 ">
          <div className="eachservice">
            <i className="fas fa-chalkboard-teacher fa-3x awesome"></i>
            <Link to="/whiteboard">
              <h4 className="multicolor">Whiteboard Animation</h4>
              <p className="service_p">
                Our whiteboard animation videos are engaging, informative, and
                effective in explaining complex ideas, processes, and concepts.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
