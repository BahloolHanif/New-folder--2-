import React from "react";
import "./HowItWorks.css";
function HowItWorks() {
  return (
    <div>
      <h1 className="heading_1 mb-5">How It Works</h1>
      <div className="container">
        <div className="row">
          <div className="col-6  number">1</div>
          <div className="col-6">
            <h2>Placing Your Order</h2>
            <p className="ptext">
              Fill out the order form with complete details of the task you want
              us to complete.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <h2>Payment</h2>
            <p className="ptext">
              We require a 50% advance deposit to begin work. After delivery of
              70% of the work, the remaining 50% balance will be due before the
              final delivery.
            </p>
          </div>
          <div className="col-6     number">2</div>
        </div>

        <div className="row">
          <div className="col-6  number">3</div>
          <div className="col-6">
            <h2>Project Execution</h2>
            <p className="ptext">
              Once payment is received, your order will be assigned to a
              specialist with expertise in the relevant field. The specialist
              will work on your project, following your requirements and
              ensuring that it is completed within the estimated timeline.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <h2>Quality Assurance</h2>
            <p className="ptext">
              After completion, your work will be thoroughly checked to ensure
              that it meets your requirements and is free of errors or flaws. We
              perform strict scrutiny to ensure that our service is of the
              highest quality.
            </p>
          </div>
          <div className="col-6 number">4</div>
        </div>
        <div className="row">
          <div className="col-6  number">5</div>
          <div className="col-6">
            <h2>Delivery of the Order</h2>
            <p className="ptext">
              We prioritize timely delivery and high-quality service. If there
              are any problems, please let us know, and we will address them as
              soon as possible.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <h2>Maintenance and Support</h2>
            <p className="ptext">
              We provide ongoing maintenance and support for the project to
              ensure that it continues to meet your needs. We monitor the
              project for issues and provide regular reports on its performance.
              We provide additional support and updates as needed, based on your
              feedback and requirements..
            </p>
          </div>
          <div className="col-6  number">6</div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
