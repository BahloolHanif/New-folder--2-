import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  // state for handling the inputs
  const empty = {
    name: "",
    email: "",
    password: "",
  };
  const [handle, setHandle] = useState(empty);
  const accountHandler = (e) => {
    const { name, value } = e.target;
    setHandle({ ...handle, [name]: value });
    console.log(handle);
  };
  const createUser = async () => {
    console.log("click");
    try {
      if (handle.name === "" || handle.email === "" || handle.password === "") {
        alert("Please Enter the Input Fields First");
      } else {
        let record = await fetch("http://localhost:8000/signup", {
          method: "POST",
          headers: {
            "content-Type": "application/json",
          },
          body: JSON.stringify(handle),
        });
        record = await record.json();
        if (record === "Email Already Exist") {
          alert("Email Already Exist");
        } else {
          alert("User Created Successfully");
        }
      }
    } catch (error) {
      console.log("error message");
    }
  };
  return (
    <div>
      <div className="container">
        <div className="col-6 offset-3 mt-5">
          <h4 className="text-center mb-5 text-info">
            Welcome to Benative Marketing Admin Panel
          </h4>
          <form>
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form2Example1">
                Name
              </label>
              <input
                type="text"
                id="form2Example1"
                onChange={accountHandler}
                className="form-control"
                name="name"
              />
            </div>
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form2Example2">
                Email Address
              </label>
              <input
                type="email"
                id="form2Example2"
                onChange={accountHandler}
                className="form-control"
                name="email"
              />
            </div>
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form2Example3">
                Password
              </label>
              <input
                type="password"
                id="form2Example3"
                onChange={accountHandler}
                className="form-control"
                name="password"
              />
            </div>

            <div className="row mb-4">
              <div className="col d-flex justify-content-center"></div>
            </div>
            <button
              type="button"
              className="btn btn-info btn-block mb-4"
              onClick={createUser}
            >
              Sign Up
            </button>
            {/* Register buttons */}
            <div className="text-center mb-3">
              <p style={{ color: "black" }}>
                Already member? <Link to="/">Login</Link>
              </p>

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

export default Signup;
