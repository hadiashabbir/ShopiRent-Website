import React from "react";

import { Link } from "react-router-dom";

import Asset_3 from "../../assets/Asset_3.png";

import "./style.css";

const Header = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-md header-nav">
      <div className="container-fluid">
      <div className="col-md-2 col-sm-3 col-4  offset-1">
          <img
            src={Asset_3}
            alt="ShopiRent"
            className="navbar-brand"
            height="100%"
            width="70%"
          />
        </div>
        <button
          class="col-1 offset-sm-6 offset-5 navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="col-md-12 collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="col-md-6 navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
          <Link to="/" className="nav-link px-lg-3 px-xl-4 offset-1 offset-md-0">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/browse" className="nav-link px-lg-3 px-xl-4 offset-1 offset-md-0">
            Browse
          </Link>
        </li>
          <li className="nav-item">
          <Link to="/" className="nav-link px-lg-3 px-xl-4 offset-1 offset-md-0">
            Service Us
          </Link>
          </li>
          <li className="nav-item">
          <Link to="/" className="nav-link px-lg-3 px-xl-4 offset-1 offset-md-0">
            About Us
          </Link>
          </li>
          <li className="nav-item">
          <a href="#" className="nav-link px-lg-3 px-xl-4 offset-1 offset-md-0">
            Pages
          </a>
          </li>
        </ul>
        <div className="col-md-3 offset-1">
          <Link to='/login'>
          <button
            class="btn btn-outline-success header-button px-xl-4 py-1 px-md-3"
            type="button"
            >
            Sign In
          </button>
          </Link>
        </div>
        </div>
      </div>
    </nav>

);
};

export default Header;
