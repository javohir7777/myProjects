import facebook from "../../../assets/brand-companey/Facebook/Vector.png";
import twitter from "../../../assets/brand-companey/Twitter/Vector.png";
import instagram from "../../../assets/brand-companey/Instagram/Group.png";
import linkedin from "../../../assets/brand-companey/LinkedIn/Group.png";

import "./Footer.scss";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-flex">
          <div className="footer-text">
            <p className="footer-text">Finstreet 118 2561 Fintown</p>
            <p className="footer-text">Hello@finsweet.com 020 7993 2905</p>
          </div>
          <div className="footer-icons">
            <a href="https://www.facebook.com/javohir.jumayev.7503">
              {" "}
              <img src={facebook} alt="" />
            </a>
            <a href="https://t.me/javohir_zafar0vich">
              <img src={twitter} alt="" />
            </a>
            <a href="https://www.instagram.com/javohir_zafar0vich">
              {" "}
              <img src={instagram} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/javoxir-jumayev-01a91b235">
              <img src={linkedin} alt="" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
