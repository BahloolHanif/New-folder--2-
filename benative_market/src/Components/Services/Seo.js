import React from "react";
import { Link } from "react-router-dom";
import CallAction from "./CallAction";

function Seo() {
  return (
    <div style={{ backgroundColor: "	#D3D3D3" }}>
    <div className="banner">
      <img src="banner2.jpg" height="100px" width="100%" alt="banner" />
      <h4 className="bannerlink ">
        <Link to="/Services">
          <span style={{ color: "white" }}>Services</span>
        </Link>
        <span> | </span>
        <span>Search Engine Optimization </span>
      </h4>
    </div>
    <h1 className="text-center mt-3"> Web Application Development</h1>
    <h3 className="servicetagline mt-5">Unlock Your Business's Potential</h3>
    <div className="container mt-5 mb-3">
      <div className="row">
        <div className="col-lg-7 col-md-12 col-sm-12 mt-5">
          <img src="web1.jpg" className="img-fluid" alt="image1" />
        </div>
        <div className="col-lg-5 col-md-12 col-sm-12">
          {" "}
          <p className="para">
            In the fast-paced digital world, businesses need to leverage the
            power of web applications to stay ahead of the competition. At
            Benative Marketing, we specialize in crafting customized web
            applications that align perfectly with your business needs. Our
            expert development team collaborates closely with you to
            understand your goals, target audience, and unique selling points.
            With our tailored solutions, we build web applications that
            deliver seamless user experiences, enhance efficiency, and drive
            growth. From conceptualization to deployment, our skilled
            professionals ensure that your web application is robust,
            scalable, and optimized for success.
          </p>
        </div>
      </div>
      <h1 className="text-center mt-3 mb-3"> Ecommerce Website </h1>

      <div className="row">
        <div className="col-lg-5 col-md-12 col-sm-12">
          <h3 className="servicetagline ">Expand Your Online Storefront</h3>
          <p className="para">
            In the age of online shopping, having a strong eCommerce presence
            is crucial for businesses to reach a broader customer base.
            Benative Marketing offers comprehensive eCommerce website
            solutions that empower your business to thrive in the digital
            marketplace. Our expert developers create stunning, user-friendly
            online stores that captivate customers, optimize conversion rates,
            and streamline the purchasing process. With secure payment
            gateways, inventory management systems, and intuitive interfaces,
            we provide you with an eCommerce website that maximizes sales and
            elevates your brand.
          </p>
        </div>

        <div className="col-lg-7 col-md-12 col-sm-12  mt-5 ">
          <img src="web4.jpg" alt="image1" className="img-fluid" />
        </div>
      </div>
      <h1 className="text-center"> Web Design and Development </h1>

      <div className="row">
        <div className="col-lg-7 col-md-12 col-sm-12  mt-5">
          <img src="web2.jpg" alt="image1" className="img-fluid" />
        </div>

        <div className="col-lg-5 col-md-12 col-sm-12">
          <h4 className="servicetagline">
            Make an Impactful Online Impression
          </h4>
          <p className="para">
            First impressions matter, especially in the digital realm.
            Benative Marketing's web design and development services ensure
            that your online presence is visually captivating and engaging.
            Our talented team of designers creates stunning interfaces that
            are not only aesthetically pleasing but also user-friendly and
            intuitive. From wireframing and prototyping to responsive design
            and front-end development, we combine creativity with
            functionality to deliver exceptional web experiences. Our designs
            are optimized for seamless integration with various platforms and
            devices, ensuring a consistent and impactful brand presence across
            the digital landscape.
          </p>
        </div>
      </div>
    </div>
    <CallAction />
  </div>
  );
}

export default Seo;
