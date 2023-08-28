import React from "react";

export default function Footer() {
  return (
    <>
      <>
       <hr />
        <footer className="footer">
          <div className="footer-widgets">
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <div className="widget widget_text">
                    <h3 className="widget-title">About Us</h3>
                    <div className="textwidget">
                      <p>
                        Sed ut perspiciatis unde omnis iste <br />
                        natus error sit voluptatem accusantium doloremque
                        laudantium.
                      </p>
                      <ul className="footer-info">
                        <li className="address">
                          203, Envato Labs, Behind Alis Steet, Melbourne,
                          Australia.
                        </li>
                        <li className="email">Email us: company@domain.com</li>
                        <li className="phone">Call us: 0084 962 216 601</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* /.col-md-3 */}
                <div className="col-md-3">
                  <div className="widget widget_recent_posts">
                    <h3 className="widget-title">Latest Posts</h3>
                    <ul>
                      <li className="clearfix">
                        <div className="thumb flat-hover-images">
                          <a href="#">
                            <img src="images/5_1.jpg" alt="image" />
                          </a>
                        </div>
                        <div className="content">
                          <h5 className="title">
                            <a href="#">Whole Wheat &amp; Soy Waffles Cake </a>
                          </h5>
                          <div className="meta">19 September, 2016</div>
                        </div>
                      </li>
                      <li className="clearfix">
                        <div className="thumb flat-hover-images">
                          <a href="#">
                            <img src="images/6_1.jpg" alt="image" />
                          </a>
                        </div>
                        <div className="content">
                          <h5 className="title">
                            <a href="#">Whole Wheat &amp; Soy Waffles Cake</a>
                          </h5>
                          <div className="meta">19 September, 2016</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* /.widget_recent_entries */}
                </div>
                {/* /.col-md-3 */}
                <div className="col-md-3">
                  <div className="widget widget-link clearfix">
                    <h3 className="widget-title">User Links</h3>
                    <ul className="links">
                      <li>
                        <a href="#.">About Us</a>
                      </li>
                      <li>
                        <a href="#.">Blog</a>
                      </li>
                      <li>
                        <a href="#.">Courses </a>
                      </li>
                      <li>
                        <a href="#.">FAQs</a>
                      </li>
                      <li>
                        <a href="#.">Events</a>
                      </li>
                      <li>
                        <a href="#.">Support</a>
                      </li>
                    </ul>
                    <div className="social-links">
                      <a href="#">
                        <i className="fa fa-facebook-square" />
                        Facebok
                      </a>
                      <a href="#">
                        <i className="fa fa-twitter-square" />
                        Twitter
                      </a>
                      <a href="#">
                        <i className="fa fa-google-plus-square" />
                        Google+
                      </a>
                      <a href="#">
                        <i className="fa fa-linkedin-square" />
                        Linkedin
                      </a>
                      <a href="#">
                        <i className="fa fa-instagram" />
                        Instagram
                      </a>
                      <a href="#">
                        <i className="fa fa-pinterest-square" />
                        Pinterest
                      </a>
                    </div>
                  </div>
                </div>
                {/* /.col-md-3 */}
                <div className="col-md-3">
                  <div className="widget widget_instagram">
                    <h3 className="widget-title">Instagram</h3>
                    <ul className="clearfix">
                      <li>
                        <div className="thumb images-hover flat-hover-images">
                          <a href="#">
                            <span>
                              <img src="images/1_2.jpg" alt="image" />
                            </span>
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="thumb images-hover flat-hover-images">
                          <a href="#">
                            <span>
                              <img src="images/2_3.jpg" alt="image" />
                            </span>
                          </a>
                        </div>
                      </li>
                      <li className="last">
                        <div className="thumb images-hover flat-hover-images">
                          <a href="#">
                            <span>
                              <img src="images/3_2.jpg" alt="image" />
                            </span>
                          </a>
                        </div>
                      </li>
                      <li className="last">
                        <div className="thumb images-hover flat-hover-images">
                          <a href="#">
                            <span>
                              <img src="images/4_2.jpg" alt="image" />
                            </span>
                          </a>
                        </div>
                      </li>
                      <li className="last">
                        <div className="thumb images-hover flat-hover-images">
                          <a href="#">
                            <span>
                              <img src="images/5_2.jpg" alt="image" />
                            </span>
                          </a>
                        </div>
                      </li>
                      <li className="last">
                        <div className="thumb images-hover flat-hover-images">
                          <a href="#">
                            <span>
                              <img src="images/6_2.jpg" alt="image" />
                            </span>
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* /.widget_instagram */}
                </div>
                {/* /.col-md-3 */}
              </div>
              {/* /.row */}
            </div>
            {/* /.container */}
          </div>
          {/* /.footer-widgets */}
          <div className="footer-content">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="copyright">
                    <div className="copyright-content">
                      Copyright © 2023. Designer by
                      <a href="themesflat.com"> Indrajit</a>. All Rights Reserved
                    </div>
                  </div>
                  {/* Go Top */}
                  <a className="go-top-v1">
                    <i className="fa fa-arrow-up" /> &nbsp;Back to Top
                  </a>
                </div>
                {/* /.col-md-12 */}
              </div>
              {/* /.row */}
            </div>
            {/* /.container */}
          </div>
          {/* /.footer-content */}
        </footer>
      </>
    </>
  );
}
