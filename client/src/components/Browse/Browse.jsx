import React, {useState} from "react";
import "./style.css";
import businessman from "../../assets/businessman.jpg";
import Posts from "./Posts/Posts";
import { useLocation, Link} from "react-router-dom";
import Pagination from "./Pagination";
import { Stack } from "@mui/material";
import axios from "axios";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}


const Browse = () => {
    const query = useQuery();
  const page = query.get('page') || 1;
  const category = query.get('category');

  const [data, setData] = useState([
    {
      name: 'hoodie',
      sale_price: 80.00,
      actual_price: 89.00,
      sale: true
    },
    {
      name: 't-shirt',
      sale_price: 55.00,
      actual_price: 80.00,
      sale: false
    },
    {
      name: 'sweater',
      sale_price: 22.00,
      actual_price: 30.00,
      sale: true
    },
    {
      name: 't-shirt',
      sale_price: 55.00,
      actual_price: 80.00,
      sale: true
    },
    {
      name: 'sweater',
      sale_price: 22.00,
      actual_price: 30.00,
      sale: false
    }
  ]); 

  // axios.get('url', {
  //   params: {
  //     category: category,
  //     page: page
  //   }
  // }).then((res) => console.log(res))

  return (
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
          <ul class="nav justify-content-center justify-content-md-start">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to={`/browse?category=fashion&page=1`}>
                Fashion
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to={`/browse?category=accessories&page=1`}>
                Accessories
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to={`/browse?category=women&page=1`}>
                Women
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to={`/browse?category=men&page=1`}>
                Men
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-12 col-md-4 col-lg-5 text-center text-md-start pt-2">
          <span>Showing 1 to 15 of 243 products</span>
          {/* <span><button className="filter-button" style={{marginLeft: '2rem'}}>Filters</button></span>
          <span><button className="filter-button">Default Sorting</button></span> */}
        </div>
          </div>

        <div className="row" style={{marginTop: '1rem', marginBottom: '5rem' }}>
            {data.map((item) => (
              <>
              <div className="col-6 col-md-3 mt-5">
                <Posts item={item}/>
              </div>
              </>
            ))}
        </div>

        <div className="row mb-3">
            <Stack alignItems='center'>
          <Pagination page={[page]} className='justify-content-center'/>
            </Stack>
          </div>
    </div>
  );
};

export default Browse;
