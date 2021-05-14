import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../photo/camera.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light pt-5">
      <div class="container-fluid">
        <div className="align-items-center d-flex">
          <img
            style={{ height: "30px" }}
            src={logo}
            alt="logo"
            className="img-fluid me-1"
          />
          <span style={{ fontWeight: "bold", fontSize: "20px" }} className="">
            MOMENTS
          </span>
        </div>

        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto text-center  mb-2 mb-lg-0">
            <li className="nav-item ">
              <Link
                to={"/home"}
                className="nav-link active"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li className="nav-item ">
              <Link to={"/admin"} className="nav-link">
                Order
              </Link>
            </li>
            <li className="nav-item ">
              <Link to={"/admin"} className="nav-link">Admin</Link>
            </li>
            <li className="nav-item ">
              <Link to={"/services"} className="nav-link">
                Services
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link navigation  ">Blogs</Link>
            </li>
          
            <li className="nav-item ">
              <Link className="nav-link navigation ">Contact us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
