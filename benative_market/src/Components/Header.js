import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";
function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <Link className="navbar-brand" to="#">
          <img src="logo.png" alt="logo" className="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span />
          {/* className="navbar-toggler-icon text-dark" */}
          <i class="fa-solid fa-bars" style={{ color: "#095669" }}></i>
        </button>
        <div
          className="collapse navbar-collapse  justify-content-center"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav ">
            <li className="nav-item ">
              <Link class="nav-link" to="./Home">
                HOME <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link class="nav-link" to="./About">
                ABOUT
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                SERVICES
              </Link>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <Link className="dropdown-item submenu" to="./services">
                  All Services
                </Link>
                <Link className="dropdown-item submenu" to="./webdev" >
                  Web Development
                </Link>
                <Link className="dropdown-item submenu" to="./Socialmm">
                  Social Media Marketing
                </Link>
                <Link className="dropdown-item submenu" to="./Seo">
                  Search Engine Optimization
                </Link>
                <Link className="dropdown-item submenu" to="./Whiteboard">
                  White Board Animation
                </Link>
                <Link className="dropdown-item submenu" to="./Design">
                  Graphic Design
                </Link>
                <Link className="dropdown-item submenu" to="./Digitalmm">
                  Digital Marketing
                </Link>
              </div>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                BLOG
              </Link>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <Link className="dropdown-item submenu" to="./blog">
                  All Blogs
                </Link>
                <Link className="dropdown-item submenu" to="#">
                  Web Development
                </Link>
                <Link className="dropdown-item submenu" to="#">
                  Social Media Marketing
                </Link>
                <Link className="dropdown-item submenu" to="#">
                  Search Engine Optimization
                </Link>
                <Link className="dropdown-item submenu" to="#">
                  White Board Animation
                </Link>
                <Link className="dropdown-item submenu" to="#">
                  Graphic Design
                </Link>
                <Link className="dropdown-item submenu" to="#">
                  Digital Marketing
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link class="nav-link" to="./RecentWork">
                RECENT WORK
              </Link>
            </li>
            <li className="nav-item">
              <Link class="nav-link" to="./HowItWorks">
                HOW IT WORKS
              </Link>
            </li>
            <li className="nav-item">
              <Link class="nav-link" to="./Contact">
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default Header;
