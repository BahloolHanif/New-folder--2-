import React from "react";
import Services from "./Services";
import Contact from "./Contact";
import HomeBlog from "./Blog/HomeBlog";
import "./Home.css";
import Whyus from "./Whyus";
function Home() {
  return (
    <div>
      {/* carousel slider start */}
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
        </ol>
        <div className="carousel-inner w-100">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="banner.jpg"
              style={{ height: "400px" }}
              alt="First slide"
            />
            <div className="carousel-caption">
              <h3>Web Development</h3>
              <p>
                We offer custom web development solutions using the latest
                technologies to build fast, responsive, and user-friendly
                websites.
              </p>
              <button className="btn btn-primary">Read More</button>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="banner.jpg"
              alt="Second slide"
              style={{ height: "400px" }}
            />
            <div className="carousel-caption">
              <h3>Digital Marketing</h3>
              <p>
                Our digital marketing services help businesses of all sizes to
                increase their online presence, attract more customers, and
                achieve their goals.
              </p>
              <button className="btn btn-primary">Read More</button>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="banner.jpg"
              style={{ height: "400px" }}
              alt="Third slide"
            />
            <div className="carousel-caption">
              <h3>Graphic Design</h3>
              <p>
                We create visually appealing designs that convey your message
                effectively and enhance your brand identity across all mediums.
              </p>
              <button className="btn btn-primary">Read More</button>
            </div>
          </div>

          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="banner.jpg"
              style={{ height: "400px" }}
              alt="Third slide"
            />
            <div className="carousel-caption">
              <h3>Search Engine Optimization</h3>
              <p>
                Our SEO experts use proven strategies to improve your website's
                visibility, ranking, and traffic to drive more leads and
                revenue.
              </p>
              <button className="btn btn-primary">Read More</button>
            </div>
          </div>

          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="banner.jpg"
              style={{ height: "400px" }}
              alt="Third slide"
            />
            <div className="carousel-caption">
              <h3>Socail Media Marketing</h3>
              <p>
                {" "}
                We help you connect with your audience on social media
                platforms, engage them with relevant content, and convert them
                into loyal customers.
              </p>
              <button className="btn btn-primary">Read More</button>
            </div>
          </div>

          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="banner.jpg"
              style={{ height: "400px" }}
              alt="Third slide"
            />
            <div className="carousel-caption">
              <h3>Whiteboard Animation</h3>
              <p>
                Our whiteboard animation videos are engaging, informative, and
                effective in explaining complex ideas, processes, and concepts.
              </p>
              <button className="btn btn-primary">Read More</button>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      {/* carousel Slider Ends */}

      <Whyus />
      <Services />
      <HomeBlog />
      <Contact />
    </div>
  );
}

export default Home;
