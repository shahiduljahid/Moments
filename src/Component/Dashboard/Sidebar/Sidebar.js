import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindows } from "@fortawesome/free-brands-svg-icons";
import { faCommentAlt,  faPlus, faShoppingCart,  faUserPlus } from "@fortawesome/free-solid-svg-icons";
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div  className="d-flex justify-content-center sidebar ">
      <ul className="navbar-nav mt-5  ">
      <li className="nav-item nav-link mb-3  ">
          <Link  to={'/order'} style={{ textDecoration: "none" }}>
            <span className=" text-light  book-btn text-bold">
              <FontAwesomeIcon style={{fontSize:'20px'}} className="me-3" icon={faShoppingCart} />Order
            </span>
          </Link>
        </li>
        <li className="nav-item nav-link mb-3  ">
          <Link  to={'/review'} style={{ textDecoration: "none" }}>
            <span className=" text-light  book-btn text-bold">
              <FontAwesomeIcon style={{fontSize:'20px'}} className="me-3" icon={faCommentAlt} />Review
            </span>
          </Link>
        </li>
       
        <li className="nav-item nav-link mb-3  ">
          <Link  to={'/orderList'} style={{ textDecoration: "none" }}>
            <span className=" text-light  book-btn text-bold">
              <FontAwesomeIcon style={{fontSize:'20px'}} className="me-3" icon={faShoppingCart} />OderList
            </span>
          </Link>
        </li>
        
        
        <li className="nav-item nav-link mb-3 ">
          <Link  to={'/addService'} style={{ textDecoration: "none" }}>
            <span className=" text-light  book-btn text-bold">
              <FontAwesomeIcon  style={{fontSize:'20px'}}  className="me-3" icon={faPlus} /> Add Service
            </span>
          </Link>
        </li>
        <li className="nav-item nav-link mb-3 ">
          <Link  to={'/addAdmin'} style={{ textDecoration: "none" }}>
            <span className=" text-light  book-btn text-bold">
              <FontAwesomeIcon  style={{fontSize:'20px'}}  className="me-3" icon={faUserPlus} /> Add Admin
            </span>
          </Link>
        </li>
        <li className="nav-item nav-link mb-3 ">
          <Link to={'/manageServices'} style={{ textDecoration: "none" }}>
            <span className="text-light book-btn text-bold">
              <FontAwesomeIcon  style={{fontSize:'20px'}}  className="me-3" icon={faWindows} /> Manage Services
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;