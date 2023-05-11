import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  const sidecss = {
    color: "#095669",
    marginLeft: "10px",
    fontSize: "20px",
  };
  // clearsession fun
  const clearsession = () => {
    sessionStorage.clear();
    navigate("/");
  };

  // const isLoggedIn = sessionStorage.getItem("userEmail");

  return (
    <div
      className="sidebar"
      style={{
        backgroundColor: "#f4f4f4",
        position: "fixed",
        top: 0,
        left: 0,
        height: "100vh",
        width: "240px",
      }}
    >
      <img
        src="logo-r.jpg"
        alt="logo"
        style={{ height: "50px", marginLeft: "50px", marginTop: "20px" }}
      />
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="nav-link mt-5" to="/Dashboard">
            <i className="fas fa-chart-bar" style={sidecss} />
            <span style={sidecss}>Dashboard</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link mt-4" to="/Reports">
            <i className="fas fa-file" style={sidecss} />{" "}
            <span style={sidecss}>Reports</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link mt-4" to="/ManageUser">
            <i className="fas fa-user" style={sidecss} />{" "}
            <span style={sidecss}>Manage Members</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link mt-4" to="/ManageCategory">
            <i className="fas fa-bookmark" style={sidecss} />{" "}
            <span style={sidecss}>Manage Blogs</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link mt-4" to="/ManageBlog">
            <i className="fas fa-blog" style={sidecss} />{" "}
            <span style={sidecss}>Manage Blogs</span>
          </Link>
        </li>
        <li className="nav-item" onClick={clearsession}>
          <Link className="nav-link mt-4">
            <i className="fas fa-sign-out-alt" style={sidecss} />{" "}
            <span style={sidecss}>Log Out</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
