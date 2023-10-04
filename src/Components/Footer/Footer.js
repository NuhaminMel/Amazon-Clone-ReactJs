import React from "react";
import "./Footer.css";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const Footer = () => {
  const HandleClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="footer">
        <a onClick={HandleClick}>
          <div className="footerBackToTop">
            <ExpandLessIcon />
          </div>
        </a>

        <div className="footerVerticalRow">
          <div className="footerVerticalCol">
            <div className="footerVerticalColHead">Get To Know us</div>
            <ul>
              <li>About</li>
              <li>Career</li>
              <li>Services</li>
              <li>Amazon Cares</li>
              <li>Gift Products</li>
            </ul>
          </div>

          <div className="footerVerticalCol">
            <div className="footerVerticalColHead">Connect With Us</div>
            <ul>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Facebook</li>
              <li>Twitch</li>
            </ul>
          </div>

          <div className="footerVerticalCol">
            <div className="footerVerticalColHead">Make Money</div>
            <ul>
              <li>Amazon Pay</li>
              <li>Become an Affiliate</li>
              <li>Sell On Amazon</li>
              <li>Fulfilment by Amazon</li>
              <li>Sell On Amazon</li>
            </ul>
          </div>
        </div>

        <hr />

        <div className="footerLine">
          <span className="footerMessage">Amazon Clone By Nuhamin ©</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
