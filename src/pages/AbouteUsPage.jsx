import "./AbouteUsPage.scss";

import know from "../assets/about-us/Know more image.png";
import know2 from "../assets/about-us/Image.png";
const AbouteUsPage = () => {
  return (
    <>
      <div className="con">
        <div className="container">
          <div className="mision">
            <div className="row g-3">
              <div className="col-12 col-md-12 col-lg-6">
                <h6>Our mision</h6>
                <h3>
                  Creating valuable content for creatives all around the world
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Non blandit massa enim nec. Scelerisque viverra mauris in
                  aliquam sem. At risus viverra adipiscing at in tellus.
                </p>
              </div>
              <div className="col-12 col-md-12 col-lg-6">
                <h6>Our Vision</h6>
                <h3>A platform that empowers individuals to improve</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Non blandit massa enim nec. Scelerisque viverra mauris in
                  aliquam sem. At risus viverra adipiscing at in tellus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="div-img__asos">
        <div className="container">
          <div className="div-img">
            <div className="div-img1">
              <h1>Our team of creatives</h1>
              <h6>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat.
              </p>
            </div>
            <div className="div-img2">
              <img src={know} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="div-footer">
        <div className="container">
          <div className="div-footer-img">
            <img src={know2} alt="" />
            <div className="div-footer-img2">
              <h6>Why we started this Blog</h6>
              <h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AbouteUsPage;
