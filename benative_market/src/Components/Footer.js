import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
function Footer() {
  return (
    <div>
      <footer className="footer ">
        <footer className="hero">
          <div className="container">
            <div className="line__separete" />
            <div className="by flex">
              <p className="copyright">
                Copyright © 2023 All Rights Reserved by Benative Markting &nbsp;
                &nbsp;
              </p>
              <ul className="list-unstyled link-menu nav-left">
                <li>
                  <Link
                    href="#"
                    data-toggle="modal"
                    data-target="#exampleModal1"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    data-toggle="modal"
                    data-target="#exampleModal2"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    data-toggle="modal"
                    data-target="#exampleModal3"
                  >
                    Code of Conduct
                  </Link>
                </li>
              </ul>
              <div className="icons">
                <Link
                  to="https://web.facebook.com/benativemarketing"
                  className="icon1 icon--facebook"
                >
                  <i className="ri-facebook-line" />
                </Link>
                <Link
                  to="https://www.instagram.com/benativemarketing/"
                  className="icon1 icon--instagram"
                >
                  <i className="ri-instagram-line" />
                </Link>
                <Link
                  to="https://www.pinterest.com/benativemarketing/"
                  className="icon1 icon--pinterest"
                >
                  <i className="ri-pinterest-line" />
                </Link>
                <Link href="" className="icon1 icon--youtube">
                  <i className="ri-youtube-line" />
                </Link>
                <Link href="#" className="icon1 icon--twitter">
                  <i className="ri-twitter-line" />
                </Link>
                <Link href="" className="icon1 icon--linkedin">
                  <i className="ri-linkedin-line" />
                </Link>
              </div>
            </div>
          </div>

          {/* Modal Starts */}
          <div
            class="modal fade"
            id="exampleModal1"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title text-danger" id="exampleModalLabel">
                    Privacy Policy
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body text-dark">
                  We value your privacy at Benative Marketing. This Privacy
                  Policy explains how we handle your personal information when
                  you use our online services. By using our website and
                  services, you agree to the terms outlined in this Privacy
                  Policy. We collect personal information, including your name
                  and contact details, provided by you. We also gather certain
                  information automatically, such as IP address and browsing
                  data, to enhance our services. Your personal information is
                  used to deliver and improve our services, communicate with
                  you, and process payments. We may share your information with
                  trusted third-party service providers for specific tasks and,
                  when required, disclose it to comply with legal obligations or
                  protect our rights. While we implement reasonable security
                  measures, please note that internet transmission is not
                  entirely secure. You have the right to access, update,
                  correct, and delete your personal data, and if you have any
                  concerns, please reach out to us using the provided contact
                  details. By using our services, you consent to the collection,
                  use, and disclosure of your personal information as described
                  in this Privacy Policy.
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Modal 1 Ends */}

          {/* Modal 2 Starts */}
          <div
            class="modal fade"
            id="exampleModal2"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title text-danger" id="exampleModalLabel">
                    Terms & Conditions
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body text-dark">
                  By accessing and using the online services provided by
                  Benative Marketing, you agree to be bound by these Terms and
                  Conditions. You confirm that you meet the eligibility
                  requirements and are responsible for maintaining the
                  confidentiality of your account information. All content and
                  intellectual property associated with our services are owned
                  by or licensed to Benative Marketing. Prohibited activities
                  include violating laws, unauthorized access, and misuse of
                  content. Benative Marketing and its affiliates shall not be
                  liable for any damages arising from the use of our services.
                  These Terms are governed by the laws of [Insert Jurisdiction].
                  We reserve the right to modify these Terms, and it is your
                  responsibility to review them periodically. For inquiries,
                  please contact us using the provided contact information. By
                  using our services, you agree to these Terms and Conditions.
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Modal 2 Ends */}

          {/* Modal 3 Starts */}
          <div
            class="modal fade"
            id="exampleModal3"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title text-danger" id="exampleModalLabel">
                    Code of Conduct
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body text-dark">
                  By using our services, you agree to adhere to our Code of
                  Conduct. Treat others with respect, professionalism, and avoid
                  offensive or discriminatory behavior. Maintain
                  confidentiality, comply with laws and regulations, and uphold
                  ethical practices. Foster collaboration, report violations,
                  and use technology responsibly. Violations may result in
                  disciplinary actions. We reserve the right to modify this Code
                  of Conduct.
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Modal 3 Ends */}
        </footer>
      </footer>
    </div>
  );
}

export default Footer;
