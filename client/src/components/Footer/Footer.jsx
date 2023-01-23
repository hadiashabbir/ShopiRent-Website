import React from "react";

import Asset_3 from "../../assets/Asset_3.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

import { Link } from "react-router-dom";

import "./style.css";

const Footer = () => {
  return (
    <div
      className="row footer"
      style={{ paddingTop: "4rem", paddingBottom: "2rem" }}
    >
      <div className="col-md-3 offset-md-1 col-8 offset-2 text-center text-md-start ">
        <img src={Asset_3} alt="ShopiRent" height="auto" width="50%" />
        <p
          className="mt-3"
          style={{ fontWeight: "400", overflow: "hidden", color: "GrayText" }}
        >
          Rent statement pieces from high-end
          <br />
          brands in Pakistani fashion.
        </p>
        <span>
          <FacebookIcon className="mt-2 me-2" />
        </span>
        <span>
          <InstagramIcon className="mt-2 me-2 ms-2" />
        </span>
        <span>
          <TwitterIcon className="mt-2 ms-2" />
        </span>
      </div>
      <div className="col-md-2 col-8 offset-2 offset-md-0 text-center text-md-start mt-5 mt-md-0">
        <h1
          className="display-6"
          style={{ fontSize: "1.6rem", fontWeight: "400" }}
        >
          About Us
        </h1>
        <Link className="links">
        <p
          style={{ lineHeight: "1rem", overflow: "hidden", marginTop: "2rem" }}
          >
          About Us
        </p>
        </Link>
        <Link className="links"><p style={{ lineHeight: "1rem", overflow: "hidden" }}>Service Us</p></Link>
        <Link className="links" to='/contact'><p style={{ lineHeight: "1rem", overflow: "hidden" }}>Contact</p></Link>
        <Link className="links"><p style={{ lineHeight: "1rem", overflow: "hidden" }}>Company</p></Link>
      </div>

      <div className="col-md-2 col-8 offset-2 offset-md-0 text-center text-md-start mt-5 mt-md-0">
        <h1
          className="display-6"
          style={{ fontSize: "1.6rem", fontWeight: "400" }}
        >
          Company
        </h1>
        <p
          style={{ lineHeight: "1rem", overflow: "hidden", marginTop: "2rem" }}
        >
          Partnership
        </p>
        <p style={{ lineHeight: "1rem", overflow: "hidden" }}>Term of Use</p>
        <p style={{ lineHeight: "1rem", overflow: "hidden" }}>Privacy</p>
        <p style={{ lineHeight: "1rem", overflow: "hidden" }}>Sitemap</p>
      </div>

      <div className="col-md-3 col-8 offset-2 offset-md-0 text-center text-md-start mt-5 mt-md-0">
        <h1
          className="display-6"
          style={{ fontSize: "1.6rem", fontWeight: "400" }}
        >
          Get in Touch
        </h1>
        <p
          className="mt-3"
          style={{ fontWeight: "400", overflow: "hidden", color: "GrayText" }}
        >
          Rent statement pieces from high-end
          <br />
          brands in Pakistani fashion.
        </p>
        <div className="row justify-content-center">
          <div className="col-md-7 col-5 text-center">
            <input type="text" className="text-field" placeholder="Email" />
          </div>
          <div className="col-md-5 col-4 text-center">
            <button type="button" className="btn btn-primary subscribe-button">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="col-12 text-center mt-5">
        <small>Copyright &copy; 2023 ShopiRent</small>
      </div>
    </div>
  );
};

export default Footer;
