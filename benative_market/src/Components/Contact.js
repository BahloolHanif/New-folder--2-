import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      <div className=" container">
        <div className="row">
          <div className="col-lg-7 col-md-12 col-sm-12">
            <h3 style={{ color: "#095669" }}>Send a message</h3>
            <form className="mt-3 mb-3">
              <input
                type="text"
                placeholder=" Name"
                className="form-control input-field"
              />
              <input
                type="email"
                placeholder=" Email"
                className="form-control input-field"
              />
              <input
                type="text"
                placeholder=" Subject"
                className="form-control input-field"
              />
              <textarea
                name="message"
                style={{ minHeight: "250px" }}
                className="form-control input-field"
                id="message"
                placeholder="Message"
              ></textarea>
              <button className="btn btn-info">Submit Message</button>
            </form>
          </div>
          <div className="col-lg-5  col-md-10 col-sm-12 mb-3 btn">
            <h3 className="heading">Contact us</h3>
            <p style={{ color: "#095669", marginTop: "30px" }}>
              "Connect with us for all your inquiries"
            </p>
            <div >
              <div             style={{ display: "flex", alignItems: "center" }}> 
                <p className="mt-4 smallcontact">
                  <i className="fas fa-globe fa-1x "></i>&nbsp;&nbsp;
                  <span className="spanname">Website: </span>
                  <Link to="https://www.benative-marketing.com/">
                    www.benative-marketing.com
                  </Link>
                </p>
              </div>

              <div 
              style={{ display: "flex", alignItems: "center" }}
              >
                <p className=" mt-4">
                  <i className="fas fa-map-marker fa-1x "></i>&nbsp;&nbsp;
                  <span className="spanname"> Address:</span> Lahore, Pakistan
                </p>
              </div>

              <div 
              style={{ display: "flex", alignItems: "left" }}
              >
                {" "}
                <p className="mt-4">
                  <i className="fas fa-envelope fa-1x "></i>&nbsp;&nbsp;
                  <span className="spanname">Email:</span>{" "}
                  info@benative-marketing.com
                </p>{" "}
              </div>

              <div 
              style={{ display: "flex", alignItems: "left" }}
              >
                {" "}
                <p className=" mt-4">
                  <i className="fas fa-phone fa-1x "></i>&nbsp; &nbsp;
                  <span className="spanname">Phone:</span> +923039722422
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
