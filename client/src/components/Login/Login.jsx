import React, { useState } from "react";

import Asset_3 from "../../assets/Asset_3.png";

import IconButton from '@mui/material/IconButton';
import { Tabs, Tab, Box } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import  axios  from "axios";

import {useNavigate } from "react-router-dom";

import "./style.css";

const initialState = {
  fullName: "",
  email: "",
  password: "",
  phone: "",
  address: ""
};

const loginState = {
  email: "",
  password: "",
};

const Login = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("one");
  const [data, setData] = useState(initialState);
  const [loginData, setLoginData] = useState(loginState);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const LoginPostData = async () => {
    axios
      .post(
        'https://4980-119-160-98-57.ngrok-free.app',
        {
          username: loginData.email,
          password: loginData.password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((response) => {
        navigate("/");
        localStorage.setItem("data", response.data)
      })
      .catch((error) => {
        console.error(error)
})
}

const SignupPostData = async () => {
  axios
    .post(
      'https://4980-119-160-98-57.ngrok-free.app',
      {
        username: data.email,
        password: data.password,
        name: data.fullName,
        phone: data.phone, 
        address: data.address
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    .then((response) => {
      setValue("one");
      navigate("/login");
    })
    .catch((error) => {
      console.error(error)
})
}

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    LoginPostData();
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    SignupPostData();
  }

  const handleShowPassword = () => {
    var id = document.getElementById("Password");
    if (id.type === "password") {
      setShowPassword(true);
      id.type = "text";
    } 
    else {
      setShowPassword(false);
      id.type = "password";
    }
  }

  return (
    <div className="back">
      <div className="row d-flex pt-4 align-items-center">
        <div className="col-4 offset-1">
          <img
            src={Asset_3}
            alt="ShopiRent"
            className="navbar-brand"
            height="40px"
            width="150px"
          />
        </div>
        {/* <div className="col-sm-2 offset-sm-4 col-3 offset-3 text-end">
          {value == "one" ? (
            <>
            <Link to='\'>
              <button
                class="btn btn-outline-success py-0 py-sm-1 py-md-1 px-1 px-sm-2 px-md-3 px-lg-4"
                type="button"
                >
                Sign Up
              </button>
            </Link>
            </>
          ) : (
            <>
            <Link to='\'>
              <button
                class="btn btn-outline-success py-0 py-sm-1 py-md-2 px-1 px-sm-2 px-md-3 px-lg-4"
                type="button"
              >
                Login
              </button>
              </Link>
            </>
          )}
        </div> */}
      </div>

      <div className="container mt-3">
        <div className="row mt-3">
          <div className="col-10 offset-1 offset-lg-2 col-lg-8">
            <p className="main-text">Get more things done with us</p>
          </div>
          <br />
          <div className="col-10 offset-1 offset-lg-2 col-lg-8">
            <p className="sub-text">
              Search sourcing the world's brightest professionals for your
              business.
            </p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-10 col-sm-8 col-md-6 col-lg-5 col-xl-4 text-center">
            <Box sx={{ width: "100%" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
              >
                <Tab value="one" label="Login" />
                <Tab value="two" label="Sign up" />
              </Tabs>
            </Box>
          </div>
        </div>

        <div className="row justify-content-center">
          <span className="col-10 col-md-8 col-lg-6 text-center">
            <form
              className="mt-5"
            >
              {value == "one" ? (
                <>
                  <div class="mb-4">
                    <input
                      type="text"
                      class="form-control"
                      id="loginEmail"
                      placeholder="Email Address"
                      required
                      value={loginData.email}
                      onChange={(e) =>
                        setLoginData({ ...loginData, email: e.target.value })
                      }
                    />
                  </div>
                  <div class="input-group">
                    <input
                      type="password"
                      class="form-control"
                      id="Password"
                      placeholder="Password"
                      required
                      value={loginData.password}
                      onChange={(e) =>
                        setLoginData({ ...loginData, password: e.target.value })
                      }
                    />
                    <span class="input-group-text" id="basic-addon2">
                      {showPassword? <IconButton onClick={handleShowPassword} size="small"><VisibilityOffIcon/></IconButton> : <IconButton onClick={handleShowPassword} size="small"><VisibilityIcon/></IconButton>}
                    
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <div class="mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="signupName"
                      placeholder="Full Name"
                      required
                      value={data.fullName}
                      onChange={(e) =>
                        setData({ ...data, fullName: e.target.value })
                      }
                    />
                  </div>
                  <div class="mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="signupEmail"
                      placeholder="Email Address"
                      required
                      value={data.email}
                      onChange={(e) =>
                        setData({ ...data, email: e.target.value })
                      }
                    />
                  </div>
                  <div class="input-group mb-3">
                    <input
                      type="password"
                      class="form-control"
                      id="Password"
                      placeholder="Password"
                      required
                      value={data.password}
                      onChange={(e) =>
                        setData({ ...data, password: e.target.value })
                      }
                    />
                    <span class="input-group-text" id="basic-addon2">
                      <IconButton onClick={handleShowPassword} size="small"><VisibilityIcon/></IconButton>
                    </span>
                  </div>
                  <div class="mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="phone"
                      placeholder="Phone Number"
                      required
                      value={data.phone}
                      onChange={(e) =>
                        setData({ ...data, phone: e.target.value })
                      }
                    />
                  </div>
                  <div class="mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="address"
                      placeholder="Address"
                      required
                      value={data.address}
                      onChange={(e) =>
                        setData({ ...data, address: e.target.value })
                      }
                    />
                  </div>
                </>
              )}

              <div className="row justify-content-center mt-4">
                <span className="col-9 col-sm-8 col-md-8 col-xl-6 text-center">
                  {value == "one" ? (
                    <>
                      <button type="submit" class="btn btn-primary btn-lg" onClick={handleLoginSubmit}>
                        Login
                      </button>
                    </>
                  ) : (
                    <>
                      <button type="submit" class="btn btn-primary btn-lg" onClick={handleSignupSubmit}>
                        Sign Up
                      </button>
                    </>
                  )}
                </span>
              </div>
            </form>
          </span>
        </div>

      </div>
    </div>
  );
};

export default Login;
