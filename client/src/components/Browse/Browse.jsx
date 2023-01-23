import React, { useState } from "react";

import businessman from "../../assets/businessman.jpg";
import Pagination from "./Pagination";
import Posts from "./Posts/Posts";

import { useLocation, Link, useNavigate } from "react-router-dom";

import { Collapse, Stack } from "@mui/material";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import TuneIcon from "@mui/icons-material/Tune";

import "./style.css";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Browse = () => {
  const navigate = useNavigate();
  const query = useQuery();

  const page = query.get("page") || 1;
  var category = query.get("category");
  const subCategory = query.get("subcategory");

  const [color, setColor] = useState([]);
  const [size, setSize] = useState([]);
  const [highlight, setHighlight] = useState([]);
  const [price, setPrice] = useState([2000, 3000]);
  const [brand, setBrand] = useState([]);
  const [weather, setWeather] = useState([]);
  const [sleeve, setSleeve] = useState([]);
  const [bodyType, setBodyType] = useState([]);
  const [data, setData] = useState([
    {
      id: 1,
      name: "hoodie",
      sale_price: 8000,
      actual_price: 8900,
      sale: true,
    },
    {
      id: 2,
      name: "t-shirt",
      sale_price: null,
      actual_price: 8000,
    },
    {
      id: 3,
      name: "sweater",
      sale_price: 2200,
      actual_price: 3000,
      sale: true,
    },
    {
      id: 4,
      name: "t-shirt",
      sale_price: null,
      actual_price: 8000,
    },
    {
      id: 5,
      name: "sweater",
      sale_price: null,
      actual_price: 3000,
      sale: false,
    },
  ]);

  if(!category) {
    category= "null";
  }

  const handleChange = (event, newValue) => {
    setPrice(newValue);
  }

  function valuetext(price) {
    return `Rs. ${price}`;
  }


  const handleClick = () => {
    let color_radio = document.querySelectorAll(".color:checked");
    if(color.indexOf(color_radio[0]?.value) === -1) {
      setColor([]);
      color.push(color_radio[0]?.value);
    }

    let size_radio = document.querySelectorAll(".size:checked");
    if(size.indexOf(size_radio[0]?.value) === -1) {
      setSize([]);
      size.push(size_radio[0]?.value);
    }

    let checkboxes = document.querySelectorAll(".highlight:checked");
    for( let i = 0; i < checkboxes.length; i++) {
      if(highlight.indexOf(checkboxes[i].value) === -1) {
        highlight.push(checkboxes[i].value)
      }
    }

    let brand_checkboxes = document.querySelectorAll(".brand:checked");
    for( let i = 0; i < brand_checkboxes.length; i++) {
      if(brand.indexOf(brand_checkboxes[i].value) === -1) {
        console.log(brand_checkboxes[i].value);
        setBrand([]);
        brand.push(brand_checkboxes[i].value)
      }
    }

    let weather_checkboxes = document.querySelectorAll(".weather:checked");
    for( let i = 0; i < weather_checkboxes.length; i++) {
      if(weather.indexOf(weather_checkboxes[i].value) === -1) {
        weather.push(weather_checkboxes[i].value)
      }
    }

    let sleeve_checkboxes = document.querySelectorAll(".sleeve:checked");
    for( let i = 0; i < sleeve_checkboxes.length; i++) {
      if(sleeve.indexOf(sleeve_checkboxes[i].value) === -1) {
        sleeve.push(sleeve_checkboxes[i].value)
      }
    }

    let body_checkboxes = document.querySelectorAll(".body-type:checked");
    for( let i = 0; i < body_checkboxes.length; i++) {
      if(bodyType.indexOf(body_checkboxes[i].value) === -1) {
        bodyType.push(body_checkboxes[i].value)
      }
    }

    navigate(`/browse?category=${category}&subcategory=${subCategory}&page=${page}&color=${color}&size=${size}&highlight=${highlight}&price=${price}&brand=${brand}&weather=${weather}&sleeve=${sleeve}&bodytype=${bodyType}`)

  }

  
  // axios.get('url', {
  //   params: {
  //     category: category,
  //     page: page
  //   }
  // }).then((res) => console.log(res))

  return (
    <>
    <div className="row main-browse-div justify-content-center">
      <div
        className="row sub-container align-items-center"
        style={{ width: "85vw", marginTop: "5rem", borderRadius: "30px" }}
        >
        <div className="col-12 text-center text-md-start col-md-5 offset-md-1">
          <p className="pb-2 summer pb-0 mb-0">SUMMER 2023</p>
          <p
            className="h1 pt-0 mt-0"
            style={{
              overflow: "hidden",
              lineHeight: "1",
              letterSpacing: "2px",
              fontSize: "3rem",
            }}
          >
            Men's Coat
          </p>
          <p
            className="h1"
            style={{
              overflow: "hidden",
              lineHeight: "1",
              letterSpacing: "2px",
              fontSize: "3rem",
            }}
          >
            Collection
          </p>
          <p className="resolution mt-4">
            A Resolution to get behind Effortlessly refined
            <br />
            styles for celebrating
          </p>
          <button
            type="button"
            className="btn btn-primary btn-lg mt-4"
            style={{ fontSize: "0.8rem" }}
          >
            DISCOVER NOW
          </button>
        </div>

        <div className="col-12 text-center text-md-start col-md-5 mt-0">
          <img src={businessman} alt="businessman" className="businessman" />
        </div>
      </div>

      <div className="row mt-5 pt-0">
        <div className="col-12 col-md-6 col-lg-5 offset-md-1">
          <ul className="nav justify-content-center justify-content-md-start">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to={`/browse?category=women&subcategory=${subCategory}&page=${page}&color=${color}&size=${size}&highlight=${highlight}&brand=${brand}&weather=${weather}&sleeve=${sleeve}&bodytype=${bodyType}`}
              >
                Women
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/browse?category=men&subcategory=${subCategory}&page=${page}&color=${color}&size=${size}&highlight=${highlight}&brand=${brand}&weather=${weather}&sleeve=${sleeve}`}>
                Men
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to={`/browse?category=bridalwear&subcategory=${subCategory}&page=${page}&color=${color}&size=${size}&highlight=${highlight}&brand=${brand}&weather=${weather}&sleeve=${sleeve}&bodytype=${bodyType}`}
              >
                Bridal Wear
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to={`/browse?category=groomwear&subcategory=${subCategory}&page=${page}&color=${color}&size=${size}&highlight=${highlight}&brand=${brand}&weather=${weather}&sleeve=${sleeve}&bodytype=${bodyType}`}
              >
                Groom Wear
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-12 col-md-4 col-lg-5 text-end text-md-start pt-2">
          <span className="text-end">Showing 1 to 15 of 243 products</span>
          <span>
            <button
              type="button"
              className="btn btn-primary ms-5 text-end filter-button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasScrolling"
              aria-controls="offcanvasScrolling"
              style={{ fontSize: "1rem" }}
            >
              <TuneIcon />
              &nbsp;Filters
            </button>
          </span>
          {/* <span><button className="filter-button">Default Sorting</button></span> */}
        </div>
      </div>

      <div
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabindex="-1"
        id="offcanvasScrolling"
        aria-labelledby="offcanvasScrollingLabel"
      >
        <div className="offcanvas-header col-2 offset-10">
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          {
            category === "null"? null :
            <>
          <div className="col-10 offset-1">
            <div className="card">
              <div className="card-body mt-2 ms-3">
                ALL CATEGORIES
                <ul className="mt-3 ms-0 ps-0">
                  {
                    category=='women' &&
                    <>
                  <Link
                    to={`/browse?category=${category}&subcategory=dresses&page=${page}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <li className="pt-2 sub-category">Dresses</li>
                  </Link>
                  <Link
                    to={`/browse?category=${category}&subcategory=tops&page=${page}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <li className="pt-2 sub-category">Tops</li>
                  </Link>
                  <Link
                    to={`/browse?category=${category}&subcategory=bottoms&page=${page}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <li className="pt-2 sub-category">Bottoms</li>
                  </Link>
                  <Link
                    to={`/browse?category=${category}&subcategory=knitwear&page=${page}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <li className="pt-2 sub-category">Knitwear</li>
                  </Link>
                  <Link
                    to={`/browse?category=${category}&subcategory=coats&page=${page}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <li className="pt-2 sub-category">Coats & Jackets</li>
                  </Link>
                  <Link
                    to={`/browse?category=${category}&subcategory=skirts&page=${page}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <li className="pt-2 sub-category">Skirts</li>
                  </Link>
                  <Link
                    to={`/browse?category=${category}&subcategory=trousers&page=${page}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <li className="pt-2 sub-category">Trousers</li>
                  </Link>
                  <Link
                    to={`/browse?category=${category}&subcategory=jumpsuit&page=${page}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <li className="pt-2 sub-category">Jumpsuit & playsuit</li>
                  </Link>
                  <Link
                    to={`/browse?category=${category}&subcategory=outerwear&page=${page}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <li className="pt-2 sub-category">Outerwear</li>
                  </Link>
                    </> 
                  }


                  {
                    category=='men' &&
                    <>
                  <Link
                    to={`/browse?category=${category}&subcategory=tops&page=${page}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <li className="pt-2 sub-category">Tops & T-shirts</li>
                  </Link>
                  <Link
                    to={`/browse?category=${category}&subcategory=coats&page=${page}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <li className="pt-2 sub-category">Coats & Jackets</li>
                  </Link>
                  <Link
                    to={`/browse?category=${category}&subcategory=trousers&page=${page}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <li className="pt-2 sub-category">Trousers & Shorts</li>
                  </Link>
                  <Link
                    to={`/browse?category=${category}&subcategory=shirts&page=${page}`}
                    style={{ textDecoration: "none", color: "black" }}
                    >
                    <li className="pt-2 sub-category">Shirts</li>
                  </Link>
                  <Link
                    to={`/browse?category=${category}&subcategory=knitwear&page=${page}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <li className="pt-2 sub-category">Knitwear</li>
                  </Link>
                  <Link
                    to={`/browse?category=${category}&subcategory=blazers&page=${page}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <li className="pt-2 sub-category">Blazers</li>
                  </Link>
                  <Link
                    to={`/browse?category=${category}&subcategory=outerwear&page=${page}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <li className="pt-2 sub-category">Outerwear</li>
                  </Link>
                  <Link
                    to={`/browse?category=${category}&subcategory=bottoms&page=${page}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <li className="pt-2 sub-category">Bottoms</li>
                  </Link>
                    </> 
                  }


{
                    category=='bridalwear' &&
                    <>
                  <Link
                    to={`/browse?category=${category}&subcategory=nikkah&page=${page}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <li className="pt-2 sub-category">Nikkah Dress</li>
                  </Link>
                  <Link
                    to={`/browse?category=${category}&subcategory=mayo&page=${page}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <li className="pt-2 sub-category">Mayo Dress</li>
                  </Link>
                  <Link
                    to={`/browse?category=${category}&subcategory=lehanga&page=${page}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <li className="pt-2 sub-category"> Mehndi Lehanga</li>
                  </Link>
                  <Link
                    to={`/browse?category=${category}&subcategory=garara&page=${page}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <li className="pt-2 sub-category">Mehndi Garara</li>
                  </Link>
                  <Link
                    to={`/browse?category=${category}&subcategory=shirts&page=${page}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <li className="pt-2 sub-category">Mehndi Shirts</li>
                  </Link>
                  <Link
                    to={`/browse?category=${category}&subcategory=maxi&page=${page}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <li className="pt-2 sub-category">Baraat Maxi</li>
                  </Link>
                  <Link
                    to={`/browse?category=${category}&subcategory=baratlehanga&page=${page}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <li className="pt-2 sub-category">Baraat Lehanga</li>
                  </Link>
                  <Link
                    to={`/browse?category=${category}&subcategory=walimamaxi&page=${page}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <li className="pt-2 sub-category">Walima Maxi</li>
                  </Link>
                    </> 
                  }


{
                    category=='groomwear' &&
                    <>
                  <Link
                    to={`/browse?category=${category}&subcategory=sherwani&page=${page}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <li className="pt-2 sub-category">Sherwani</li>
                  </Link>
                  <Link
                    to={`/browse?category=${category}&subcategory=pent-coat&page=${page}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <li className="pt-2 sub-category">Pent Coat</li>
                  </Link>
                    </> 
                  }
                </ul>
              </div>
            </div>
          </div>
            </>
          }

          <div className="col-10 offset-1">
            <div className="card mt-5">
              <div className="card-body mt-2 ms-3">
                COLOR
                <div className="mt-3">
                  <input
                    className="form-check-input me-3 color"
                    style={{ backgroundColor: "red", borderColor: "red" }}
                    type="radio"
                    name="radioNoLabel"
                    id="color1"
                    value="red"
                    aria-label="..."
                  />
                  <input
                    className="form-check-input ms-1 me-3 color"
                    style={{ backgroundColor: "black", borderColor: "black" }}
                    type="radio"
                    name="radioNoLabel"
                    id="color2"
                    value="black"
                    aria-label="..."
                  />
                  <input
                    className="form-check-input ms-1 me-3 color"
                    type="radio"
                    style={{ backgroundColor: "white", borderColor: "black" }}
                    name="radioNoLabel"
                    id="color3"
                    value="white"
                    aria-label="..."
                  />
                  <input
                    className="form-check-input ms-1 me-3 color"
                    type="radio"
                    style={{ backgroundColor: "green", borderColor: "green" }}
                    name="radioNoLabel"
                    id="color4"
                    value="green"
                    aria-label="..."
                  />
                  <input
                    className="form-check-input ms-1 me-3 color"
                    type="radio"
                    style={{ backgroundColor: "grey", borderColor: "grey" }}
                    name="radioNoLabel"
                    id="color5"
                    value="grey"
                    aria-label="..."
                  />
                  <input
                    className="form-check-input ms-1 me-3 color"
                    type="radio"
                    style={{ backgroundColor: "blue", borderColor: "blue" }}
                    name="radioNoLabel"
                    id="color6"
                    value="blue"
                    aria-label="..."
                    />
                </div>
                <div className="mt-2">
                  <input
                    className="form-check-input me-3 color"
                    style={{ backgroundColor: "purple", borderColor: "purple" }}
                    type="radio"
                    name="radioNoLabel"
                    id="color7"
                    value="purple"
                    aria-label="..."
                  />
                  <input
                    className="form-check-input ms-1 me-3 color"
                    style={{ backgroundColor: "brown", borderColor: "brown" }}
                    type="radio"
                    name="radioNoLabel"
                    id="color8"
                    value="brown"
                    aria-label="..."
                  />
                  <input
                    className="form-check-input ms-1 me-3 color"
                    style={{ backgroundColor: "orange", borderColor: "orange" }}
                    type="radio"
                    name="radioNoLabel"
                    id="color9"
                    value="orange"
                    aria-label="..."
                  />
                  <input
                    className="form-check-input ms-1 me-3 color"
                    style={{ backgroundColor: "navy", borderColor: "navy" }}
                    type="radio"
                    name="radioNoLabel"
                    id="color10"
                    value="navy"
                    aria-label="..."
                  />
                  <input
                    className="form-check-input ms-1 me-3 color"
                    style={{ backgroundColor: "aqua", borderColor: "aqua" }}
                    type="radio"
                    name="radioNoLabel"
                    id="color11"
                    value="aqua"
                    aria-label="..."
                  />
                  <input
                    className="form-check-input ms-1 me-3 color"
                    style={{ backgroundColor: "yellow", borderColor: "yellow" }}
                    type="radio"
                    name="radioNoLabel"
                    id="color12"
                    value="yellow"
                    aria-label="..."
                  />
                </div>
                <div className="mt-2">
                  <input
                    className="form-check-input me-3 color"
                    style={{ backgroundColor: "maroon", borderColor: "maroon" }}
                    type="radio"
                    name="radioNoLabel"
                    id="color13"
                    value="maroon"
                    aria-label="..."
                  />
                  <input
                    className="form-check-input ms-1 me-3 color"
                    style={{
                      backgroundColor: "lightgreen",
                      borderColor: "lightgreen",
                    }}
                    type="radio"
                    name="radioNoLabel"
                    id="color14"
                    value="lightgreen"
                    aria-label="..."
                  />
                  <input
                    className="form-check-input ms-1 me-3 color"
                    style={{
                      backgroundColor: "hotpink",
                      borderColor: "hotpink",
                    }}
                    type="radio"
                    name="radioNoLabel"
                    id="color15"
                    value="hotpink"
                    aria-label="..."
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-10 offset-1">
            <div className="card mt-5">
              <div className="card-body mt-2 ms-3">
                SIZES
                <div className="mt-3">
                  <input
                    type="radio"
                    className="btn-check size"
                    name="options-outlined"
                    id="size1"
                    autocomplete="off"
                    value="XS"
                  />
                  <label
                    className="btn btn-outline-secondary me-2"
                    style={{
                      border: "1px solid",
                      padding: "2px 10px 2px 10px",
                      height: "28px",
                      width: "50px",
                    }}
                    for="size1"
                  >
                    XS
                  </label>
                  <input
                    type="radio"
                    className="btn-check size"
                    name="options-outlined"
                    id="size2"
                    autocomplete="off"
                    value='S'
                  />
                  <label
                    className="btn btn-outline-secondary ms-1 me-2"
                    style={{
                      border: "1px solid",
                      padding: "2px 10px 2px 10px",
                      height: "28px",
                      width: "50px",
                    }}
                    for="size2"
                  >
                    S
                  </label>
                  <input
                    type="radio"
                    className="btn-check size"
                    name="options-outlined"
                    id="size3"
                    autocomplete="off"
                    value='M'
                  />
                  <label
                    className="btn btn-outline-secondary ms-1 me-2"
                    style={{
                      border: "1px solid",
                      padding: "2px 10px 2px 10px",
                      height: "28px",
                      width: "50px",
                    }}
                    for="size3"
                  >
                    M
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    type="radio"
                    className="btn-check size"
                    name="options-outlined"
                    id="size4"
                    autocomplete="off"
                    value='L'
                  />
                  <label
                    className="btn btn-outline-secondary me-2"
                    style={{
                      border: "1px solid",
                      padding: "2px 10px 2px 10px",
                      height: "28px",
                      width: "50px",
                    }}
                    for="size4"
                  >
                    L
                  </label>
                  <input
                    type="radio"
                    className="btn-check size"
                    name="options-outlined"
                    id="size5"
                    autocomplete="off"
                    value='XL'
                  />
                  <label
                    className="btn btn-outline-secondary ms-1 me-2"
                    style={{
                      border: "1px solid",
                      padding: "2px 10px 2px 10px",
                      height: "28px",
                      width: "50px",
                    }}
                    for="size5"
                  >
                    XL
                  </label>
                  <input
                    type="radio"
                    className="btn-check size"
                    name="options-outlined"
                    id="size6"
                    autocomplete="off"
                    value='XXL'
                  />
                  <label
                    className="btn btn-outline-secondary ms-1"
                    style={{
                      border: "1px solid",
                      padding: "2px 10px 2px 10px",
                      height: "28px",
                      width: "50px",
                    }}
                    for="size6"
                  >
                    XXL
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="col-10 offset-1">
            <div className="card mt-5">
              <div className="card-body mt-2 ms-3">
                HIGHLIGHT

                <div class="form-check mt-3">
                  <input
                    class="form-check-input highlight"
                    type="checkbox"
                    value="Promotions"
                    id="highlight1"
                  />
                  <label class="form-check-label" for="highlight1">
                    Promotions
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input highlight"
                    type="checkbox"
                    value="Deals-of-the-Month"
                    id="highlight2"
                  />
                  <label class="form-check-label" for="highlight2">
                    Deals of the Month
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input highlight"
                    type="checkbox"
                    value="New-Arrivals"
                    id="highlight3"
                  />
                  <label class="form-check-label" for="highlight3">
                    New Arrivals
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input highlight"
                    type="checkbox"
                    value="On-Discounts"
                    id="highlight4"
                  />
                  <label class="form-check-label" for="highlight4">
                    On Discounts
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input highlight"
                    type="checkbox"
                    value="Free-Shipping"
                    id="highlight5"
                  />
                  <label class="form-check-label" for="highlight5">
                    Free Shipping
                  </label>
                </div>
              </div>
            </div>
          </div>


          <div className="col-10 offset-1">
            <div className="card mt-5">
              <div className="card-body mt-2 ms-3">
                PRICE

                <Box sx={{ width: 220 }}>
      <Slider
        getAriaLabel={() => 'Price range'}
        value={price}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={1000}
        max={10000}
        step={10}
      />
    </Box>
              </div>
            </div>
          </div>


          <div className="col-10 offset-1">
            <div className="card mt-5">
              <div className="card-body mt-2 ms-3">
                BRANDS

                {
                  category==="null" && <>
                  <div class="form-check mt-3">
                  <input
                    class="form-check-input brand"
                    type="checkbox"
                    value="zellbury"
                    id="brand1"
                  />
                  <label class="form-check-label" for="brand1">
                    Zellbury
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input brand"
                    type="checkbox"
                    value="saya"
                    id="brand2"
                  />
                  <label class="form-check-label" for="brand2">
                    Saya
                  </label>
                </div>
                <div class="form-check ">
                  <input
                    class="form-check-input brand"
                    type="checkbox"
                    value="limelight"
                    id="brand3"
                  />
                  <label class="form-check-label" for="brand3">
                    Limelight
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input brand"
                    type="checkbox"
                    value="alkaram"
                    id="brand4"
                  />
                  <label class="form-check-label" for="brand4">
                    AlKaram
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input brand"
                    type="checkbox"
                    value="ideas-by-gul-ahmad"
                    id="brand5"
                  />
                  <label class="form-check-label" for="brand5">
                    Ideas by Gul Ahmad
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input brand"
                    type="checkbox"
                    value="nishat-linen"
                    id="brand6"
                  />
                  <label class="form-check-label" for="brand6">
                    Nishat Linen
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input brand"
                    type="checkbox"
                    value="bonanza-strangi"
                    id="brand7"
                  />
                  <label class="form-check-label" for="brand7">
                    Bonanza Strangi
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input brand"
                    type="checkbox"
                    value="junaid-jamshed"
                    id="brand8"
                  />
                  <label class="form-check-label" for="brand8">
                    Junaid Jamshed
                  </label>
                </div>                  
                <div class="form-check">
                  <input
                    class="form-check-input brand"
                    type="checkbox"
                    value="outfitters"
                    id="brand9"
                  />
                  <label class="form-check-label" for="brand9">
                    Outfitters
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input brand"
                    type="checkbox"
                    value="adidas"
                    id="brand10"
                  />
                  <label class="form-check-label" for="brand10">
                    Adidas
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input brand"
                    type="checkbox"
                    value="nike"
                    id="brand11"
                  />
                  <label class="form-check-label" for="brand11">
                    Nike
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input brand"
                    type="checkbox"
                    value="breakout"
                    id="brand12"
                  />
                  <label class="form-check-label" for="brand12">
                    Breakout
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input brand"
                    type="checkbox"
                    value="charcoal"
                    id="brand13"
                  />
                  <label class="form-check-label" for="brand13">
                    Charcoal
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input brand"
                    type="checkbox"
                    value="american-eagle"
                    id="brand14"
                  />
                  <label class="form-check-label" for="brand14">
                    American Eagle
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input brand"
                    type="checkbox"
                    value="leisure-club"
                    id="brand15"
                  />
                  <label class="form-check-label" for="brand15">
                    Leisure Club
                  </label>
                </div>
                  </>
                }

                {
                  category==='women' && <>
                <div class="form-check mt-3">
                  <input
                    class="form-check-input brand"
                    type="checkbox"
                    value="zellbury"
                    id="brand1"
                  />
                  <label class="form-check-label" for="brand1">
                    Zellbury
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input brand"
                    type="checkbox"
                    value="saya"
                    id="brand2"
                  />
                  <label class="form-check-label" for="brand2">
                    Saya
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input brand"
                    type="checkbox"
                    value="limelight"
                    id="brand3"
                  />
                  <label class="form-check-label" for="brand3">
                    Limelight
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input brand"
                    type="checkbox"
                    value="alkaram"
                    id="brand4"
                  />
                  <label class="form-check-label" for="brand4">
                    AlKaram
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input brand"
                    type="checkbox"
                    value="ideas-by-gul-ahmad"
                    id="brand5"
                  />
                  <label class="form-check-label" for="brand5">
                    Ideas by Gul Ahmad
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input brand"
                    type="checkbox"
                    value="nishat-linen"
                    id="brand6"
                  />
                  <label class="form-check-label" for="brand6">
                    Nishat Linen
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input brand"
                    type="checkbox"
                    value="bonanza-strangi"
                    id="brand7"
                  />
                  <label class="form-check-label" for="brand7">
                    Bonanza Strangi
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input brand"
                    type="checkbox"
                    value="junaid-jamshed"
                    id="brand8"
                  />
                  <label class="form-check-label" for="brand8">
                    Junaid Jamshed
                  </label>
                </div>                  
                  </>
                }

{
                  category==='bridalwear' && <>
                <div class="form-check mt-3">
                  <input
                    class="form-check-input brand"
                    type="checkbox"
                    value="zellbury"
                    id="brand1"
                  />
                  <label class="form-check-label" for="brand1">
                    Zellbury
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input brand"
                    type="checkbox"
                    value="saya"
                    id="brand2"
                  />
                  <label class="form-check-label" for="brand2">
                    Saya
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input brand"
                    type="checkbox"
                    value="limeligt"
                    id="brand3"
                  />
                  <label class="form-check-label" for="brand3">
                    Limelight
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input brand"
                    type="checkbox"
                    value="alkaram"
                    id="brand4"
                  />
                  <label class="form-check-label" for="brand4">
                    AlKaram
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input brand"
                    type="checkbox"
                    value="ideas-by-gul-ahmad"
                    id="brand5"
                  />
                  <label class="form-check-label" for="brand5">
                    Ideas by Gul Ahmad
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input brand"
                    type="checkbox"
                    value="nihsat-linen"
                    id="brand6"
                  />
                  <label class="form-check-label" for="brand6">
                    Nishat Linen
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input brand"
                    type="checkbox"
                    value="bonanza-strangi"
                    id="brand7"
                  />
                  <label class="form-check-label" for="brand7">
                    Bonanza Strangi
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input brand"
                    type="checkbox"
                    value="junaid-jamshed"
                    id="brand8"
                  />
                  <label class="form-check-label" for="brand8">
                    Junaid Jamshed
                  </label>
                </div>                  
                  </>
                }

                {
                  category==='men' && <>
                <div class="form-check mt-3">
                  <input
                    class="form-check-input brand"
                    type="checkbox"
                    value="outfitters"
                    id="brand9"
                  />
                  <label class="form-check-label" for="brand9">
                    Outfitters
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input brand"
                    type="checkbox"
                    value="adidas"
                    id="brand10"
                  />
                  <label class="form-check-label" for="brand10">
                    Adidas
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input brand"
                    type="checkbox"
                    value="nike"
                    id="brand11"
                  />
                  <label class="form-check-label" for="brand11">
                    Nike
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input brand"
                    type="checkbox"
                    value="breakout"
                    id="brand12"
                  />
                  <label class="form-check-label" for="brand12">
                    Breakout
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input brand"
                    type="checkbox"
                    value="charcoal"
                    id="brand13"
                  />
                  <label class="form-check-label" for="brand13">
                    Charcoal
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input brand"
                    type="checkbox"
                    value="american-eagle"
                    id="brand14"
                  />
                  <label class="form-check-label" for="brand14">
                    American Eagle
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input brand"
                    type="checkbox"
                    value="leisure-club"
                    id="brand15"
                  />
                  <label class="form-check-label" for="brand15">
                    Leisure Club
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input brand"
                    type="checkbox"
                    value="junaid-jamshed"
                    id="brand8"
                  />
                  <label class="form-check-label" for="brand8">
                    Junaid Jamshed
                  </label>
                </div>                  
                  </>
                }

{
                  category==='groomwear' && <>
                <div class="form-check mt-3">
                  <input
                    class="form-check-input brand"
                    type="checkbox"
                    value="outfitters"
                    id="brand9"
                  />
                  <label class="form-check-label" for="brand9">
                    Outfitters
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input brand"
                    type="checkbox"
                    value="adidas"
                    id="brand2"
                  />
                  <label class="form-check-label" for="brand10">
                    Adidas
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input brand"
                    type="checkbox"
                    value="nike"
                    id="brand11"
                  />
                  <label class="form-check-label" for="brand11">
                    Nike
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input brand"
                    type="checkbox"
                    value="breakout"
                    id="brand12"
                  />
                  <label class="form-check-label" for="brand12">
                    Breakout
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input brand"
                    type="checkbox"
                    value="charcoal"
                    id="brand13"
                  />
                  <label class="form-check-label" for="brand13">
                    Charcoal
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input brand"
                    type="checkbox"
                    value="american-eagle"
                    id="brand14"
                  />
                  <label class="form-check-label" for="brand14">
                    American Eagle
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input brand"
                    type="checkbox"
                    value="leisure-club"
                    id="brand15"
                  />
                  <label class="form-check-label" for="brand15">
                    Leisure Club
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input brand"
                    type="checkbox"
                    value="junaid-jamshed"
                    id="brand8"
                  />
                  <label class="form-check-label" for="brand8">
                    Junaid Jamshed
                  </label>
                </div>                  
                  </>
                }

              </div>
            </div>
          </div>

          <div className="col-10 offset-1">
            <div className="card mt-5">
              <div className="card-body mt-2 ms-3">
                WEATHER

                <div class="form-check mt-3">
                  <input
                    class="form-check-input weather"
                    type="checkbox"
                    value="winter"
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Winter
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input weather"
                    type="checkbox"
                    value="summer"
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Summer
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input weather"
                    type="checkbox"
                    value="all-weather"
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    All Weather
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="col-10 offset-1">
            <div className="card mt-5">
              <div className="card-body mt-2 ms-3">
                SLEEVE

                <div class="form-check mt-3">
                  <input
                    class="form-check-input sleeve"
                    type="checkbox"
                    value="cap-sleeve"
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Cap Sleeve
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input sleeve"
                    type="checkbox"
                    value="short-sleeve"
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Short Sleeve
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input sleeve"
                    type="checkbox"
                    value="3/4-sleeve"
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    3/4 Sleeve
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input sleeve"
                    type="checkbox"
                    value="long-sleeve"
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Long Sleeve
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input sleeve"
                    type="checkbox"
                    value="sleeveless"
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Sleeveless
                  </label>
                </div>
              </div>
            </div>
          </div>

  
          <div className="col-10 offset-1">
            <div className="card mt-5">
              <div className="card-body mt-2 ms-3">
                BODY TYPE

                <div class="form-check mt-3">
                  <input
                    class="form-check-input body-type"
                    type="checkbox"
                    value="apple"
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Apple
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input body-type"
                    type="checkbox"
                    value="athletic"
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                  Athletic
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input body-type"
                    type="checkbox"
                    value="bumpfriendly"
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                  Bump Friendly
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input body-type"
                    type="checkbox"
                    value="fullbust"
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                  Full Bust
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input body-type"
                    type="checkbox"
                    value="hourglass"
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Hourglass
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input body-type"
                    type="checkbox"
                    value="petite"
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Petite
                  </label>
                </div>
              </div>
            </div>
          </div>

  
        <div className="col-5 offset-6 text-end">
        <button
              type="button"
              className="btn btn-primary mt-4"
              style={{ fontSize: "1rem" }}
              onClick={handleClick}
              >
              Apply
            </button>
        </div>
        </div>
      </div>

      <div className="row" style={{ marginTop: "1rem", marginBottom: "5rem" }}>
        {data.map((item) => (
          <>
            <div className="col-6 col-md-3 mt-5">
              <Posts item={item} />
            </div>
          </>
        ))}
      </div>

      <div className="row mb-3">
        <Stack alignItems="center">
          <Pagination page={[page]} className="justify-content-center" />
        </Stack>
      </div>

    </div>
</>
  );
};

export default Browse;
