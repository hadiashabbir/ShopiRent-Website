import React, { useState, useEffect } from "react";

import businessman from "../../assets/businessman.jpg";
import Pagination from "./Pagination";
import Posts from "./Posts/Posts";

import { useLocation, Link, useNavigate } from "react-router-dom";

import { Stack } from "@mui/material";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import TuneIcon from "@mui/icons-material/Tune";

import Header from "../Header/Header";

import axios from 'axios';

import "./style.css";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Browse = () => {
  const navigate = useNavigate();
  const query = useQuery();

  const page = query.get("page") || 1;
  var subCategory = query.get("subcategory");

  const [search, setSearch] = useState(null);

  const [category, setCategory] = useState(null);
  const [size, setSize] = useState(null);
  const [highlight, setHighlight] = useState(null);
  const [price, setPrice] = useState([0, 0]);

  const [filterData, setFilterData] = useState([]);
  const [CategoryData, setCategoryData] = useState([]);
  const [data, setData] = useState([
    {
      id: 1,
      title: "Skirt",
      description: "This is an example product",
      imageURL: "https://example.com/image.jpg",
      category: "women",
      subCategory: "skirts",
      securityDeposit: 100,
      rentingPrice: 9.99,
      sellingPrice: 19.99,
      saleRentingPrice: 7.99,
      saleSellingPrice: 15.99,
      size: "S",
      highlights: "Promotions"
    },
    {
      id: 2,
      title: "Skirt",
      description: "This is an example product",
      imageURL: "https://example.com/image.jpg",
      category: "women",
      subCategory: "skirts",
      securityDeposit: 100,
      rentingPrice: 9.99,
      sellingPrice: 19.99,
      saleRentingPrice: 7.99,
      saleSellingPrice: 15.99,
      size: "S",
      highlights: "Promotions"
    },
    {
      title: "Skirt",
      description: "This is an example product",
      imageURL: "https://example.com/image.jpg",
      category: "women",
      subCategory: "skirts",
      securityDeposit: 100,
      rentingPrice: 9.99,
      sellingPrice: 19.99,
      saleRentingPrice: 7.99,
      saleSellingPrice: 15.99,
      size: "S",
      highlights: "Promotions"
    },
    {
      title: "Skirt",
      description: "This is an example product",
      imageURL: "https://example.com/image.jpg",
      category: "women",
      subCategory: "skirts",
      securityDeposit: 100,
      rentingPrice: 9.99,
      sellingPrice: 19.99,
      saleRentingPrice: 7.99,
      saleSellingPrice: 15.99,
      size: "S",
      highlights: "Promotions"
    },
    {
      title: "Skirt",
      description: "This is an example product",
      imageURL: "https://example.com/image.jpg",
      category: "women",
      subCategory: "skirts",
      securityDeposit: 100,
      rentingPrice: 9.99,
      sellingPrice: 19.99,
      saleRentingPrice: 7.99,
      saleSellingPrice: 15.99,
      size: "S",
      highlights: "Promotions"
    },
    {
      title: "Tops",
      description: "This is an example product",
      imageURL: "https://example.com/image.jpg",
      category: "women",
      subCategory: "tops",
      securityDeposit: 100,
      rentingPrice: 9.99,
      sellingPrice: 19.99,
      saleRentingPrice: 7.99,
      saleSellingPrice: 15.99,
      sale: true,
      size: "L",
      highlights: "New Arrivals"
    },
    {
      title: "Tops",
      description: "This is an example product",
      imageURL: "https://example.com/image.jpg",
      category: "women",
      subCategory: "tops",
      securityDeposit: 100,
      rentingPrice: 9.99,
      sellingPrice: 19.99,
      saleRentingPrice: 7.99,
      saleSellingPrice: 15.99,
      sale: true,
      size: "L",
      highlights: "New Arrivals"
    },
    {
      title: "Tops",
      description: "This is an example product",
      imageURL: "https://example.com/image.jpg",
      category: "women",
      subCategory: "tops",
      securityDeposit: 100,
      rentingPrice: 9.99,
      sellingPrice: 19.99,
      saleRentingPrice: 7.99,
      saleSellingPrice: 15.99,
      sale: true,
      size: "L",
      highlights: "New Arrivals"
    },
    {
      title: "Dress",
      description: "This is an example product",
      imageURL: "https://example.com/image.jpg",
      category: "women",
      subCategory: "dresses",
      securityDeposit: 100,
      rentingPrice: 9.99,
      sellingPrice: 19.99,
      saleRentingPrice: 7.99,
      saleSellingPrice: 15.99,
      size: "XXL",
      highlights: "Free Shipping"
    },
    {
      title: "Dress",
      description: "This is an example product",
      imageURL: "https://example.com/image.jpg",
      category: "women",
      subCategory: "dresses",
      securityDeposit: 100,
      rentingPrice: 9.99,
      sellingPrice: 19.99,
      saleRentingPrice: 7.99,
      saleSellingPrice: 15.99,
      size: "XXL",
      highlights: "Free Shipping"
    },
    {
      title: "Dress",
      description: "This is an example product",
      imageURL: "https://example.com/image.jpg",
      category: "women",
      subCategory: "dresses",
      securityDeposit: 100,
      rentingPrice: 9.99,
      sellingPrice: 19.99,
      saleRentingPrice: 7.99,
      saleSellingPrice: 15.99,
      size: "XXL",
      highlights: "Free Shipping"
    },
    {
      title: "Dress",
      description: "This is an example product",
      imageURL: "https://example.com/image.jpg",
      category: "women",
      subCategory: "dresses",
      securityDeposit: 100,
      rentingPrice: 9.99,
      sellingPrice: 19.99,
      saleRentingPrice: 7.99,
      saleSellingPrice: 15.99,
      size: "XXL",
      highlights: "Free Shipping"
    },
    {
      title: "Dress",
      description: "This is an example product",
      imageURL: "https://example.com/image.jpg",
      category: "women",
      subCategory: "dresses",
      securityDeposit: 100,
      rentingPrice: 9.99,
      sellingPrice: 19.99,
      saleRentingPrice: 7.99,
      saleSellingPrice: 15.99,
      size: "XXL",
      highlights: "Free Shipping"
    },
    {
      title: "Dress",
      description: "This is an example product",
      imageURL: "https://example.com/image.jpg",
      category: "women",
      subCategory: "dresses",
      securityDeposit: 100,
      rentingPrice: 9.99,
      sellingPrice: 19.99,
      saleRentingPrice: 7.99,
      saleSellingPrice: 15.99,
      size: "XXL",
      highlights: "Free Shipping"
    },
    {
      title: "Dress",
      description: "This is an example product",
      imageURL: "https://example.com/image.jpg",
      category: "women",
      subCategory: "dresses",
      securityDeposit: 100,
      rentingPrice: 9.99,
      sellingPrice: 19.99,
      saleRentingPrice: 7.99,
      saleSellingPrice: 15.99,
      size: "XXL",
      highlights: "Free Shipping"
    },
    {
      title: "Dress",
      description: "This is an example product",
      imageURL: "https://example.com/image.jpg",
      category: "women",
      subCategory: "dresses",
      securityDeposit: 100,
      rentingPrice: 9.99,
      sellingPrice: 19.99,
      saleRentingPrice: 7.99,
      saleSellingPrice: 15.99,
      size: "XXL",
      highlights: "Free Shipping"
    },
    {
      title: "Shirt",
      description: "This is an example product",
      imageURL: "https://example.com/image.jpg",
      category: "men",
      subCategory: "shirts",
      securityDeposit: 100,
      rentingPrice: 9.99,
      sellingPrice: 19.99,
      saleRentingPrice: 7.99,
      saleSellingPrice: 15.99,
      size: "S",
      highlights: "On Discounts"
    },
    {
      title: "Knitwear",
      description: "This is an example product",
      imageURL: "https://example.com/image.jpg",
      category: "men",
      subCategory: "knitwear",
      securityDeposit: 100,
      rentingPrice: 9.99,
      sellingPrice: 19.99,
      saleRentingPrice: 7.99,
      saleSellingPrice: 15.99,
      size: "XXL",
      highlights: "Promotions"
    },
    {
      title: "Knitwear",
      description: "This is an example product",
      imageURL: "https://example.com/image.jpg",
      category: "men",
      subCategory: "knitwear",
      securityDeposit: 100,
      rentingPrice: 9.99,
      sellingPrice: 19.99,
      saleRentingPrice: 7.99,
      saleSellingPrice: 15.99,
      size: "XXL",
      highlights: "Promotions"
    },
    {
      title: "Knitwear",
      description: "This is an example product",
      imageURL: "https://example.com/image.jpg",
      category: "men",
      subCategory: "knitwear",
      securityDeposit: 100,
      rentingPrice: 9.99,
      sellingPrice: 19.99,
      saleRentingPrice: 7.99,
      saleSellingPrice: 15.99,
      size: "XXL",
      highlights: "Promotions"
    },
    {
      title: "Knitwear",
      description: "This is an example product",
      imageURL: "https://example.com/image.jpg",
      category: "men",
      subCategory: "knitwear",
      securityDeposit: 100,
      rentingPrice: 9.99,
      sellingPrice: 19.99,
      saleRentingPrice: 7.99,
      saleSellingPrice: 15.99,
      size: "XXL",
      highlights: "Promotions"
    },
    {
      title: "Knitwear",
      description: "This is an example product",
      imageURL: "https://example.com/image.jpg",
      category: "men",
      subCategory: "knitwear",
      securityDeposit: 100,
      rentingPrice: 9.99,
      sellingPrice: 19.99,
      saleRentingPrice: 7.99,
      saleSellingPrice: 15.99,
      size: "XXL",
      highlights: "Promotions"
    },
    {
      title: "Knitwear",
      description: "This is an example product",
      imageURL: "https://example.com/image.jpg",
      category: "men",
      subCategory: "knitwear",
      securityDeposit: 100,
      rentingPrice: 9.99,
      sellingPrice: 19.99,
      saleRentingPrice: 7.99,
      saleSellingPrice: 15.99,
      size: "XXL",
      highlights: "Promotions"
    },
    {
      title: "Knitwear",
      description: "This is an example product",
      imageURL: "https://example.com/image.jpg",
      category: "men",
      subCategory: "knitwear",
      securityDeposit: 100,
      rentingPrice: 9.99,
      sellingPrice: 19.99,
      saleRentingPrice: 7.99,
      saleSellingPrice: 15.99,
      size: "XXL",
      highlights: "Promotions"
    },
  ]);

  const itemsPerPage = 12;
  const indexOfLastItem = page * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filterData.slice(indexOfFirstItem, indexOfLastItem);


  useEffect(() => {
    if(category === null && search === null && size === null && highlight === null)
    setFilterData(data);
  })

  useEffect(() => {
    setFilterData([]);
    setCategoryData(data.filter((value) => category === value.category))
  }, [category])


  useEffect(() => {
    if(CategoryData)
    setFilterData(CategoryData);
  }, [CategoryData])

  useEffect(() => {
    if(subCategory != 'null'){
      setFilterData(CategoryData.filter(value => value.subCategory === subCategory))
    }
  }, [subCategory])

  useEffect(() => {
    if(category === null) {
      setFilterData(data.filter(value => 
        size === value.size ||
        price[0] <= value.sellingPrice && price[1] >= value.sellingPrice ||
        highlight === value.highlights
      ))  
    }
    else {
      setFilterData(CategoryData.filter(value => 
        size === value.size ||
        price[0] <= value.sellingPrice && price[1] >= value.sellingPrice ||
        highlight === value.highlights
      ))
    }
    navigate(`/browse?category=women&page=${page}&price=${price}&size=${size}&highlight=${highlight}`)
  }, [size, highlight, price])




  const handleChange = (event, newValue) => {
    setPrice(newValue);
  }

  function valuetext(price) {
    return `Rs. ${price}`;
  }

  const handleSearch = (e) => {
    if(e.key === 'Enter') {
      setFilterData(data.filter(value => value.title === search))

      var id = document.getElementById("searchbar");
      id.value = "";
    }
  }


  const handleClick = () => {


    let size_radio = document.querySelectorAll(".size:checked");
    setSize(size_radio[0]?.value);
    
    var radio_buttons = document.querySelectorAll(".size");

    radio_buttons.forEach(function(radioBtn) {
      if(radioBtn.checked) {
        radioBtn.checked = false;
      }
    })

    let checkboxes = document.querySelectorAll(".highlight:checked");
    setHighlight(checkboxes[0]?.value);

    var checkbox_highlights = document.querySelectorAll(".highlight");

    checkbox_highlights.forEach(function(checkbox) {
      if(checkbox.checked) {
        checkbox.checked = false;
      }
    })
  }

  // const token = localStorage.getItem("token");
  // console.log(token);

  // axios.get("https://dabf-39-42-121-170.ngrok-free.app/v1/product", 
  // {
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${token}`
  //   },
  // })
  // .then((response) => console.log(response))

  return (
    <>
    <Header/>
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
                to={`/browse`}
                onClick={() => {
                  setCategory(null);
                  setSearch(null);
                  setHighlight(null);
                  setSize(null);
                }}
              >
                All
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to={`/browse?category=women`}
                onClick={() => setCategory("women")}
              >
                Women
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/browse?category=men`} onClick={() => setCategory("men")}>
                Men
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to={`/browse?category=bridalwear`}
                onClick={() => setCategory('bridalwear')}
              >
                Bridal Wear
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to={`/browse?category=groomwear`}
                onClick={() => setCategory('groomwear')}
              >
                Groom Wear
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-12 col-md-4 col-lg-5 text-end text-md-start pt-2">
          <div className="row">
            <div className="col-8">
          <input class="form-control me-2" id="searchbar" type="search" placeholder="Search" aria-label="Search" onChange={e => setSearch(e.target.value)} onKeyPress={handleSearch}/>
            </div>
            <div className="col-4">
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
            </div>
          </div>
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
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"        
                  >
                    <li className="pt-2 sub-category">Dresses</li>
                  </Link>
                  <Link
                    to={`/browse?category=${category}&subcategory=tops&page=${page}`}
                    style={{ textDecoration: "none", color: "black" }}
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"  
      
                  >
                    <li className="pt-2 sub-category">Tops</li>
                  </Link>
                  <Link
                    to={`/browse?category=${category}&subcategory=bottoms&page=${page}`}
                    style={{ textDecoration: "none", color: "black" }}
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"  
      
                  >
                    <li className="pt-2 sub-category">Bottoms</li>
                  </Link>
                  <Link
                    to={`/browse?category=${category}&subcategory=knitwear&page=${page}`}
                    style={{ textDecoration: "none", color: "black" }}
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"  
      
                  >
                    <li className="pt-2 sub-category">Knitwear</li>
                  </Link>
                  <Link
                    to={`/browse?category=${category}&subcategory=coats&page=${page}`}
                    style={{ textDecoration: "none", color: "black" }}
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"  
      
                  >
                    <li className="pt-2 sub-category">Coats & Jackets</li>
                  </Link>
                  <Link
                    to={`/browse?category=${category}&subcategory=skirts&page=${page}`}
                    style={{ textDecoration: "none", color: "black" }}
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"  
      
                  >
                    <li className="pt-2 sub-category">Skirts</li>
                  </Link>
                  <Link
                    to={`/browse?category=${category}&subcategory=trousers&page=${page}`}
                    style={{ textDecoration: "none", color: "black" }}
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"  
      
                  >
                    <li className="pt-2 sub-category">Trousers</li>
                  </Link>
                  <Link
                    to={`/browse?category=${category}&subcategory=jumpsuit&page=${page}`}
                    style={{ textDecoration: "none", color: "black" }}
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"  
      
                  >
                    <li className="pt-2 sub-category">Jumpsuit & playsuit</li>
                  </Link>
                  <Link
                    to={`/browse?category=${category}&subcategory=outerwear&page=${page}`}
                    style={{ textDecoration: "none", color: "black" }}
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"  
      
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
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"  
      
                  >
                    <li className="pt-2 sub-category">Tops & T-shirts</li>
                  </Link>
                  <Link
                    to={`/browse?category=${category}&subcategory=coats&page=${page}`}
                    style={{ textDecoration: "none", color: "black" }}
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"  
      
                  >
                    <li className="pt-2 sub-category">Coats & Jackets</li>
                  </Link>
                  <Link
                    to={`/browse?category=${category}&subcategory=trousers&page=${page}`}
                    style={{ textDecoration: "none", color: "black" }}
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"  
      
                  >
                    <li className="pt-2 sub-category">Trousers & Shorts</li>
                  </Link>
                  <Link
                    to={`/browse?category=${category}&subcategory=shirts&page=${page}`}
                    style={{ textDecoration: "none", color: "black" }}
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"  
      
                    >
                    <li className="pt-2 sub-category">Shirts</li>
                  </Link>
                  <Link
                    to={`/browse?category=${category}&subcategory=knitwear&page=${page}`}
                    style={{ textDecoration: "none", color: "black" }}
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"  
      
                  >
                    <li className="pt-2 sub-category">Knitwear</li>
                  </Link>
                  <Link
                    to={`/browse?category=${category}&subcategory=blazers&page=${page}`}
                    style={{ textDecoration: "none", color: "black" }}
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"  
      
                  >
                    <li className="pt-2 sub-category">Blazers</li>
                  </Link>
                  <Link
                    to={`/browse?category=${category}&subcategory=outerwear&page=${page}`}
                    style={{ textDecoration: "none", color: "black" }}
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"  
      
                  >
                    <li className="pt-2 sub-category">Outerwear</li>
                  </Link>
                  <Link
                    to={`/browse?category=${category}&subcategory=bottoms&page=${page}`}
                    style={{ textDecoration: "none", color: "black" }}
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"  
      
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
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"  
      
                  >
                    <li className="pt-2 sub-category">Nikkah Dress</li>
                  </Link>
                  <Link
                    to={`/browse?category=${category}&subcategory=mayo&page=${page}`}
                    style={{ textDecoration: "none", color: "black" }}
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"  
      
                  >
                    <li className="pt-2 sub-category">Mayo Dress</li>
                  </Link>
                  <Link
                    to={`/browse?category=${category}&subcategory=lehanga&page=${page}`}
                    style={{ textDecoration: "none", color: "black" }}
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"  
      
                  >
                    <li className="pt-2 sub-category"> Mehndi Lehanga</li>
                  </Link>
                  <Link
                    to={`/browse?category=${category}&subcategory=garara&page=${page}`}
                    style={{ textDecoration: "none", color: "black" }}
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"  
      
                  >
                    <li className="pt-2 sub-category">Mehndi Garara</li>
                  </Link>
                  <Link
                    to={`/browse?category=${category}&subcategory=shirts&page=${page}`}
                    style={{ textDecoration: "none", color: "black" }}
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"  
      
                  >
                    <li className="pt-2 sub-category">Mehndi Shirts</li>
                  </Link>
                  <Link
                    to={`/browse?category=${category}&subcategory=maxi&page=${page}`}
                    style={{ textDecoration: "none", color: "black" }}
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"  
      
                  >
                    <li className="pt-2 sub-category">Baraat Maxi</li>
                  </Link>
                  <Link
                    to={`/browse?category=${category}&subcategory=baratlehanga&page=${page}`}
                    style={{ textDecoration: "none", color: "black" }}
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"  
      
                  >
                    <li className="pt-2 sub-category">Baraat Lehanga</li>
                  </Link>
                  <Link
                    to={`/browse?category=${category}&subcategory=walimamaxi&page=${page}`}
                    style={{ textDecoration: "none", color: "black" }}
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"  
      
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
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"  
      
                  >
                    <li className="pt-2 sub-category">Sherwani</li>
                  </Link>
                  <Link
                    to={`/browse?category=${category}&subcategory=pent-coat&page=${page}`}
                    style={{ textDecoration: "none", color: "black" }}
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"  
      
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
                    type="radio"
                    value="Promotions"
                    name="flexRadioDefault"
                    id="highlight1"
                  />
                  <label class="form-check-label" for="highlight1">
                    Promotions
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input highlight"
                    type="radio"
                    value="Deals Of The Month"
                    name="flexRadioDefault"
                    id="highlight2"
                  />
                  <label class="form-check-label" for="highlight2">
                    Deals of the Month
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input highlight"
                    type="radio"
                    value="New Arrivals"
                    name="flexRadioDefault"
                    id="highlight3"
                  />
                  <label class="form-check-label" for="highlight3">
                    New Arrivals
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input highlight"
                    type="radio"
                    value="On Discounts"
                    name="flexRadioDefault"
                    id="highlight4"
                  />
                  <label class="form-check-label" for="highlight4">
                    On Discounts
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input highlight"
                    type="radio"
                    value="Free Shipping"
                    name="flexRadioDefault"
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

  
        <div className="col-5 offset-6 text-end">
        <button
              type="button"
              className="btn btn-primary mt-4"
              style={{ fontSize: "1rem" }}
              data-bs-dismiss="offcanvas"
              aria-label="Close"  
              onClick={handleClick}
              >
              Apply
            </button>
        </div>
        </div>
      </div>

      <div className="row" style={{ marginTop: "1rem", marginBottom: "5rem" }}>
        {currentItems.map((item) => (
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
