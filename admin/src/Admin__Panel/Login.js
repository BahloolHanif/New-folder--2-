import React, { useEffect, useState } from "react";
//import { useNavigate } from "react-router-dom";

import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
function Login() {
  const empty = {
    email: "",
    password: "",
  };

  // state for handle the login inputs

  const [handle, setHandle] = useState(empty);

  const Navigate = useNavigate();
  const login_handler = (e) => {
    const { name, value } = e.target;
    setHandle({ ...handle, [name]: value });

    console.log(handle);
  };

  // const Signup= ()=>{
  //   useEffect(()=>{
  //     Navigate("/UpdateCat")
  //   },[])

  // }
  //function for loginddd
  const user_login = async () => {
    console.log("Clicked");
    if (handle.email === "" || handle.password === "") {
      alert("Please Enter the Fields First");
    } else {
      let record = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(handle),
      });
      record = await record.json();
      if (record.message === "Login Successfully") {
        // store id in SessionStorage
        sessionStorage.setItem("userId", record.LoginUser._id);
        sessionStorage.setItem("userEmail", record.LoginUser.email);
        alert("Login Successfully");
        Navigate("/sidebar");
      } else {
        alert("UserName And password is invalid");
      }
    }
  };
  // const isLoggedIn = sessionStorage.getItem("userEmail");
  return (
    <div>
      <div className="container">
        <div className="col-6 offset-3 mt-5">
          <h4 className="text-center mb-5 text-info">
            Welcome to Benative Marketing Admin Panel
          </h4>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              user_login();
            }}
          >
            {/* Email input */}
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form2Example1">
                wasim@gmail.com
              </label>
              <input
                type="email"
                id="form2Example1"
                className="form-control"
                onChange={login_handler}
                name="email"
              />
            </div>
            {/* Password input */}
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form2Example2">
                Password
              </label>
              <input
                type="password"
                id="form2Example2"
                className="form-control"
                name="password"
                onChange={login_handler}
              />
            </div>
            {/* 2 column grid layout for inline styling */}
            <div className="row mb-4">
              <div className="col d-flex justify-content-center"></div>
            </div>
            {/* Submit button */}
            

            <button type="submit" className="btn btn-info btn-block mb-4">
            Sign In
            </button>

            <div className="text-center mb-3">
              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-facebook-f" />
              </button>
              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-linkedin" />
              </button>
              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-twitter" />
              </button>
              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-pinterest" />
              </button>
              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-instagram" />
              </button>
              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-youtube" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
