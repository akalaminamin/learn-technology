import React from "react";
import "./Footer.css";
import {Link} from "react-router-dom";
import logo from "../../image/asset 1.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container footer-content">
        <div className="logo">
          <img src={logo} className="footer-logo" alt="footer logo" />
        </div>
        <div className="footer-item">
            <Link className="footer-link" to='/'>Privacy Policy</Link>
            <Link className="footer-link" to='/'>Terms {"&"} Condition</Link>
            <p>© 2021 created by md Al Amin. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
