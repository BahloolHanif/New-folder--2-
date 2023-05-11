import React from "react";

function Whyus() {
  return (
    <div>
      {/* Why you Choose Us Section Start */}
      <div className="container mt-5 mb-3">
      <h1 className="text-center text-info mb-3">FAQs</h1>
        <div className="row">
          <div
            className="col-lg-4 col-md-6 col-sm-12 "
            style={{
              backgroundColor: "#FF9A8B", 
              backgroundImage:
                "linear-gradient(90deg, #FF9A8B 0%, #FF6A88 55%, #FF99AC 100%)",
                
            }}
          >
            <h2>Why You Choose Us </h2>
            <h6>
              1. Exceptional web development services that prioritize quality,
              user-friendliness, and customization.
            </h6>
            <h6>
              2. Effective social media marketing strategies to boost your
              online presence and engage with your target audience.
            </h6>

            <h6>
              3. Results-driven SEO services for improved website visibility and
              long-term organic traffic growth.
            </h6>

            <h6>
              4. Engaging whiteboard animation videos to effectively communicate
              your brand's message.
            </h6>

            <h6>
              5. Successful digital media marketing strategies tailored to
              maximize brand visibility and drive conversions.
            </h6>
          </div>

          <div className="col-lg-8 col-md-10 col-sm-12">
            <div id="accordion">
              <div class="card">
                <div class="card-header" id="headingOne">
                  <h5 class="m-1 text-center">
                    <button
                      class="btn "
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      What sets your web development services apart from others?
                    </button>
                  </h5>
                </div>

                <div
                  id="collapseOne"
                  class="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordion"
                >
                  <div class="card-body text-justify">
                    At our company, we take pride in our web development
                    services. We have a team of experienced and skilled
                    developers who are proficient in the latest technologies and
                    trends. We believe in creating visually appealing,
                    user-friendly, and functional websites that are tailored to
                    meet the specific needs of our clients. Our attention to
                    detail, commitment to delivering high-quality work, and
                    excellent customer service make us stand out from the
                    competition.
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingTwo">
                  <h5 class="m-1 text-center">
                    <button
                      class="btn collapsed"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      How can your social media marketing strategies benefit my
                      business?
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseTwo"
                  class="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordion"
                >
                  <div class="card-body text-justify">
                    Our social media marketing services are designed to help
                    businesses enhance their online presence, engage with their
                    target audience, and drive conversions. We develop
                    comprehensive social media strategies that align with your
                    business goals and target audience. Our team of experts
                    utilizes various social media platforms and implements
                    proven techniques to increase brand awareness, generate
                    leads, and foster meaningful connections with your
                    customers.
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingThree">
                  <h5 class="m-1 text-center">
                    <button
                      class="btn  collapsed"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      What makes your SEO services effective in boosting website
                      visibility?
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseThree"
                  class="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordion"
                >
                  <div class="card-body text-justify">
                    We understand the importance of search engine optimization
                    (SEO) in driving organic traffic to your website. Our SEO
                    experts conduct in-depth research and analysis to identify
                    the most relevant keywords for your industry. We optimize
                    your website's structure, content, and meta tags to improve
                    its search engine rankings. Additionally, we employ
                    white-hat SEO techniques that comply with search engine
                    guidelines, ensuring long-term visibility and sustainable
                    results.
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="card-header" id="headingFour">
                  <h5 class="m-1 text-center">
                    <button
                      class="btn collapsed"
                      data-toggle="collapse"
                      data-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      How can whiteboard animation videos help promote my brand?
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseFour"
                  class="collapse"
                  aria-labelledby="headingFour"
                  data-parent="#accordion"
                >
                  <div class="card-body text-justify">
                    Whiteboard animation videos are an engaging and effective
                    way to communicate your brand's message to your target
                    audience. Our team of creative professionals can craft
                    compelling whiteboard animation videos that bring your ideas
                    to life. These videos not only capture attention but also
                    simplify complex concepts, making them easier to understand
                    and remember. They can be used for promotional campaigns,
                    explainer videos, and educational content, helping you leave
                    a lasting impression on your viewers.
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="card-header" id="headingFive">
                  <h5 class="m-1 text-center">
                    <button
                      class="btn  collapsed"
                      data-toggle="collapse"
                      data-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      What makes your digital media marketing strategies
                      successful?
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseFive"
                  class="collapse"
                  aria-labelledby="headingFive"
                  data-parent="#accordion"
                >
                  <div class="card-body text-justify">
                    Our digital media marketing strategies are built on a
                    foundation of extensive market research and a deep
                    understanding of the digital landscape. We create customized
                    campaigns that leverage various digital channels to reach
                    your target audience effectively. Whether it's through
                    social media advertising, content marketing, email
                    marketing, or influencer collaborations, we tailor our
                    strategies to maximize your brand's visibility, drive
                    traffic, and ultimately boost conversions. Our data-driven
                    approach allows us to track and analyze campaign
                    performance, making necessary adjustments for optimal
                    results.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why you choose us section end */}
    </div>
  );
}

export default Whyus;
