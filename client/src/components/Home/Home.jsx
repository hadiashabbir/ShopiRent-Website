import React from "react";

import Casual from "../../assets/Casual.jpg";
import Casuals from "../../assets/Casuals.jpg";
import man from "../../assets/man.jpg";
import pents from "../../assets/pents.jpg";
import RedGirl from "../../assets/RedGirl.jpg";
import shopping from "../../assets/shopping.jpg";
import tshirt from "../../assets/tshirt.jpg";
import wedding from "../../assets/wedding.JPG";
import weddings from "../../assets/weddings.jpg";
import womanCoat from "../../assets/womanCoat.jpg";
import woman from "../../assets/woman.jpg";

import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import Avatar from "@mui/material/Avatar";
import DoneIcon from "@mui/icons-material/Done";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import StarIcon from "@mui/icons-material/Star";

import "./style.css";

const Home = () => {
  return (
    <>
      <div className="row main-div" style={{ overflow: "hidden" }}>
        <div className="col-8 text-center text-sm-start offset-2 col-sm-5 offset-sm-1 mt-5 text-div">
          <h1 className="main-text display-3  ">
            Matching style
            <br />
            and class
            <br />
            with luxury
          </h1>
          <p className="sub-text mt-4">
            We also have a vibrant and trendy online
            <br />
            fashion shop that is always stocked with
            <br />
            trendy fashion styles and accessories to match
            <br />
            any occasion.
          </p>
          <button type="button" class="btn btn-primary btn-lg">
            Rent Now
          </button>
        </div>
        <div className="col-8 offset-2 offset-sm-0 text-center col-sm-5 col-md-4 col-lg-3 col-xl-3 photo">
          <img
            src={RedGirl}
            alt="photo"
            className="redgirl"
            height="50%"
            width="90%"
          />
        </div>
        <div className="col-12 col-lg-3 third-div">
          <div className="row comment d-flex align-items-center">
            <div className="col-md-4 col-xl-3 offset-1 avatar d-flex">
              <Avatar
                alt=""
                src={Casual}
                sx={{ width: 56, height: 56 }}
              ></Avatar>
            </div>
            <div className="col-xl-8 col-md-7">
              <p className="display-4">Hareem</p>
              <p className="lead">"Wow, its amazing product!"</p>
              <StarIcon fontSize="sm" className="star" />
              <StarIcon fontSize="sm" className="star" />
              <StarIcon fontSize="sm" className="star" />
              <StarIcon fontSize="sm" className="star" />
              <StarIcon fontSize="sm" className="star" />
            </div>
          </div>
          <div className="row overlap text-center mt-5">
            <div className="offset-5 col-md-7 support">
              <span className="badge bg-light text-dark first-badge">
                <DoneIcon fontSize="small" />
                &nbsp;&nbsp;24/7 Support
              </span>
            </div>
          </div>
          <div className="row align-items-center overlap-support">
            <div className="col-6 overlap">
              <span className="badge bg-light text-dark first-badge">
                <DoneIcon fontSize="small" />
                &nbsp;&nbsp;Lowest Price
              </span>
            </div>
            <div className="col-6 overlapping">
              <img src={shopping} alt="shopping" className="shopping-pic" />
            </div>
          </div>
          <div className="row text-center overlap shipping-overlap">
            <div className="offset-5 col-md-7">
              <span className="badge bg-light text-dark first-badge">
                <DoneIcon fontSize="small" />
                &nbsp;&nbsp;Free Shipping
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        className="row text-center collection-heading"
        style={{ overflow: "hidden" }}
      >
        <p className="h1" style={{ overflow: "hidden" }}>
          Our Collection
        </p>
      </div>

      <div
        className="row justify-content-center collections gy-5"
        style={{ overflow: "hidden" }}
      >
        <div className="col-8 col-md-3">
          <div className="card">
            <img src={weddings} alt="Wedding suit" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title" style={{ overflow: "hidden" }}>
                Wedding Suits
              </h5>
              <p className="card-text">
                This product is very well designed and suitable for everyone
              </p>
              <a href="#" className="card-link">
                View All Products
              </a>
            </div>
          </div>
        </div>

        <div className="col-8 col-md-3">
          <div className="card">
            <img src={weddings} alt="Party Wear" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title" style={{ overflow: "hidden" }}>
                Party Wear
              </h5>
              <p className="card-text">
                This product is very well designed and suitable for everyone
              </p>
              <a href="#" className="card-link">
                View All Products
              </a>
            </div>
          </div>
        </div>

        <div className="col-8 col-md-3">
          <div className="card">
            <img src={Casuals} alt="Wedding suit" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title" style={{ overflow: "hidden" }}>
                Casuals
              </h5>
              <p className="card-text">
                This product is very well designed and suitable for everyone
              </p>
              <a href="#" className="card-link">
                View All Products
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className="row justify-content-center collections gy-5 mt-5"
        style={{ overflow: "hidden" }}
      >
        <div className="col-7 col-md-2">
          <div className="card">
            <img src={wedding} alt="Wedding suit" className="card-img-top" />
            <div className="card-body">
              <h5
                className="card-title text-center"
                style={{ overflow: "hidden", fontWeight: "400" }}
              >
                Wedding Suit
              </h5>
            </div>
          </div>
        </div>

        <div className="col-7 col-md-2">
          <div className="card">
            <img src={pents} alt="Party Wear" className="card-img-top" />
            <div className="card-body">
              <h5
                className="card-title text-center"
                style={{ overflow: "hidden", fontWeight: "400" }}
              >
                Pents
              </h5>
            </div>
          </div>
        </div>

        <div className="col-7 col-md-2">
          <div className="card">
            <img src={tshirt} alt="Wedding suit" className="card-img-top" />
            <div className="card-body">
              <h5
                className="card-title text-center"
                style={{ overflow: "hidden", fontWeight: "400" }}
              >
                T-shirts
              </h5>
            </div>
          </div>
        </div>

        <div className="col-7 col-md-2">
          <div className="card">
            <img src={Casual} alt="Wedding suit" className="card-img-top" />
            <div className="card-body">
              <h5
                className="card-title text-center"
                style={{ overflow: "hidden", fontWeight: "400" }}
              >
                Casual Shirts
              </h5>
            </div>
          </div>
        </div>
      </div>

      <div
        className="row align-items-center"
        style={{
          paddingTop: "5rem",
          paddingBottom: "5rem",
          backgroundColor: "#f5f3ec",
        }}
      >
        <div className="col-5 offset-1">
          <p className="lead pb-2" style={{ fontWeight: "500" }}>
            Featured Product
          </p>
          <p className="h1" style={{ overflow: "hidden", lineHeight: "1.2" }}>
            You Always
          </p>
          <p className="h1" style={{ overflow: "hidden" }}>
            Have a choice.
          </p>
          <p className="lead" style={{ fontWeight: "400" }}>
            Rent statement pieces from high-end brands in Pakistani fashion.
            <br />
            Featuring formal and festive wear collection of Faraz Manan,
            <br />
            Republic WomenSwear, Suffuse, and more.
          </p>
          <button
            type="button"
            className="btn btn-primary btn-lg mt-4"
            style={{ fontSize: "1.4rem" }}
          >
            Rent Now
          </button>
        </div>

        <div className="col-3 col-lg-2 offset-lg-1">
          <img
            src={man}
            alt="man"
            height="auto"
            width="100%"
            style={{ borderRadius: "20px" }}
          />
        </div>
        <div className="col-3 col-lg-2">
          <img
            src={woman}
            alt="woman"
            height="auto"
            width="100%"
            style={{ borderRadius: "20px" }}
          />
        </div>
      </div>

      <div
        className="row justify-content-center"
        style={{ marginTop: "10rem" }}
      >
        <div className="col-9 col-md-3">
          <img
            src={womanCoat}
            alt="woman"
            height="auto"
            width="100%"
            className="woman-coat"
          />
        </div>

        <div className="col-9 col-md-7 ms-md-5 mt-lg-5 mt-md-4 mt-sm-3 mt-2">
          <h1
            className="mt-5 mt-sm-0"
            style={{
              overflow: "hidden",
              fontWeight: "bolder",
              letterSpacing: "1px",
            }}
          >
            Amazing Clothes Store
          </h1>
          <h1
            style={{
              overflow: "hidden",
              fontWeight: "bolder",
              letterSpacing: "1px",
            }}
          >
            with Benefits
          </h1>

          <div className="row mt-5">
            <div className="col-md-1 col-12 gx-0 gx-lg-4 text-center text-md-start">
              <MonetizationOnIcon
                fontSize="large"
                style={{ color: "#f2a154" }}
              />
            </div>
            <div className="col-md-3 col-12 gx-0  text-center text-md-start">
              <h1
                className="display-6"
                style={{ fontSize: "1.6rem", fontWeight: "400" }}
              >
                Lowest Price
              </h1>
              <p style={{ color: "GrayText" }}>
                You will definitely get this benefit. This is very useful for
                your life.
              </p>
            </div>
            <div className="col-md-1 col-12 gx-0 gx-lg-4 mt-3 mt-md-0 text-center text-md-start">
              <AdminPanelSettingsIcon
                fontSize="large"
                style={{ color: "#f2a154" }}
              />
            </div>
            <div className="col-md-3 col-12 gx-0  text-center text-md-start">
              <h1
                className="display-6"
                style={{ fontSize: "1.6rem", fontWeight: "400" }}
              >
                24/7 Support
              </h1>
              <p style={{ color: "GrayText" }}>
                You will definitely get this benefit. This is very useful for
                your life.
              </p>
            </div>
            <div className="col-md-1 col-12 gx-0 gx-lg-4 mt-3 mt-md-0  text-center text-md-start">
              <LocalShippingIcon
                fontSize="large"
                style={{ color: "#f2a154" }}
              />
            </div>
            <div className="col-md-3 col-12 gx-0  text-center text-md-start">
              <h1
                className="display-6"
                style={{ fontSize: "1.6rem", fontWeight: "400" }}
              >
                Free Shipping
              </h1>
              <p style={{ color: "GrayText" }}>
                You will definitely get this benefit. This is very useful for
                your life.
              </p>
            </div>
          </div>
        </div>

        <div
          className="row align-items-center sub-div"
          style={{
            paddingTop: "2rem",
            paddingBottom: "1rem",
            marginTop: "8rem",
          }}
        >
          <div className="col-md-4 offset-md-1 text-center text-md-start">
            <p
              className="h1"
              style={{
                overflow: "hidden",
                lineHeight: "1.2",
                color: "#e7e6e1",
              }}
            >
              Get Our Stylish
            </p>
            <p className="h1" style={{ overflow: "hidden", color: "#e7e6e1" }}>
              Clothes Now!
            </p>
            <p className="lead" style={{ fontWeight: "400", color: "#e7e6e1" }}>
              We also have a vibrant and trendy online fashion shop
              <br />
              that is always stocked with trendy fashion styles and
              <br />
              accessories to many occasions
            </p>
            <button
              type="button"
              className="btn btn-primary btn-lg mt-4"
              style={{ fontSize: "1.4rem" }}
            >
              Rent Now
            </button>
          </div>

          <div className="col-6 shopping-div">
            <div className="row overlap text-center mt-5">
              <div className="offset-5 col-7 support">
                <span className="badge bg-light text-dark second-badge">
                  <DoneIcon fontSize="small" />
                  &nbsp;&nbsp;24/7 Support
                </span>
              </div>
            </div>
            <div className="row align-items-center overlap-support">
              <div className="col-xl-3 offset-xl-3 col-4 offset-2 overlap">
                <span className="badge bg-light text-dark second-badge">
                  <DoneIcon fontSize="small" />
                  &nbsp;&nbsp;Lowest Price
                </span>
              </div>
              <div className="col-6 overlapping">
                <img src={shopping} alt="shopping" className="shopping-pic2" />
              </div>
            </div>
            <div className="row text-center overlap shipping-overlap">
              <div className="offset-5 col-7">
                <span className="badge bg-light text-dark second-badge">
                  <DoneIcon fontSize="small" />
                  &nbsp;&nbsp;Free Shipping
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
