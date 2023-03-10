import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindows } from "@fortawesome/free-brands-svg-icons";
import {
  faCommentAlt,
  faEdit,
  faHome,
  faPlus,
  faShoppingCart,
  faSignOutAlt,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";
import { userContext } from "../../../App";
import { firebaseConfig } from "../../Login/firebaseConfig";
import firebase from "firebase/app";
import "firebase/auth";

const Sidebar = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  

  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  fetch(`${process.env.REACT_APP_API_BASE_URL}/admin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ admin: loggedInUser.email }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        setIsAdmin(data);

        sessionStorage.setItem("admin", loggedInUser.email);
      }
    });
  const getAdmin = sessionStorage.getItem("admin");
  const hangleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then((res) => {
        const userSignOut = {
          name: "",
          email: "",
        };
        setLoggedInUser(userSignOut);
      })
      .catch((error) => {
        // An error happened.
      });
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("admin");
  }

  return (
    <div className="d-flex justify-content-center">
      <ul className="navbar-nav mt-5  ">
        {isAdmin || getAdmin ? (
          <div>
            <li className="nav-item nav-link mb-3  ">
              <Link to={"/orderList"} style={{ textDecoration: "none" }}>
                <span className=" text-light  book-btn text-bold">
                  <FontAwesomeIcon
                    style={{ fontSize: "20px" }}
                    className="me-3"
                    icon={faShoppingCart}
                  />
                  OderList
                </span>
              </Link>
            </li>

            <li className="nav-item nav-link mb-3 ">
              <Link to={"/addService"} style={{ textDecoration: "none" }}>
                <span className=" text-light  book-btn text-bold">
                  <FontAwesomeIcon
                    style={{ fontSize: "20px" }}
                    className="me-3"
                    icon={faPlus}
                  />{" "}
                  Add Service
                </span>
              </Link>
            </li>
            <li className="nav-item nav-link mb-3 ">
              <Link to={"/manageService"} style={{ textDecoration: "none" }}>
                <span className=" text-light  book-btn text-bold">
                  <FontAwesomeIcon
                    style={{ fontSize: "20px" }}
                    className="me-3"
                    icon={faEdit}
                  />{" "}
                  Manage Services
                </span>
              </Link>
            </li>
            <li className="nav-item nav-link mb-3 ">
              <Link to={"/addAdmin"} style={{ textDecoration: "none" }}>
                <span className=" text-light  book-btn text-bold">
                  <FontAwesomeIcon
                    style={{ fontSize: "20px" }}
                    className="me-3"
                    icon={faUserPlus}
                  />{" "}
                  Add Admin
                </span>
              </Link>
            </li>
            {/* <li className="nav-item nav-link mb-3 ">
              <Link to={"/manageServices"} style={{ textDecoration: "none" }}>
                <span className="text-light book-btn text-bold">
                  <FontAwesomeIcon
                    style={{ fontSize: "20px" }}
                    className="me-3"
                    icon={faWindows}
                  />{" "}
                  Manage Services
                </span>
              </Link>
            </li> */}
          </div>
        ) : (
          <div>
            <li className="nav-item nav-link mb-3  ">
              <Link to={"/bookingList"} style={{ textDecoration: "none" }}>
                <span className=" text-light  book-btn text-bold">
                  <FontAwesomeIcon
                    style={{ fontSize: "20px" }}
                    className="me-3"
                    icon={faShoppingCart}
                  />
                  Booking list
                </span>
              </Link>
            </li>
            <li className="nav-item nav-link mb-3  ">
              <Link to={"/review"} style={{ textDecoration: "none" }}>
                <span className=" text-light  book-btn text-bold">
                  <FontAwesomeIcon
                    style={{ fontSize: "20px" }}
                    className="me-3"
                    icon={faCommentAlt}
                  />
                  Review
                </span>
              </Link>
            </li>
          </div>
        )}

        <li onClick={hangleSignOut} className="nav-item nav-link mb-3  ">
          <Link to={"/home"} style={{ textDecoration: "none" }}>
            <span className=" text-light  book-btn text-bold">
              <FontAwesomeIcon
                style={{ fontSize: "20px" }}
                className="me-3"
                icon={faSignOutAlt}
              />
              Log out
            </span>
          </Link>
        </li>
        <li className="nav-item nav-link mb-3  ">
          <Link to={"/home"} style={{ textDecoration: "none" }}>
            <span className=" text-light  book-btn text-bold">
              <FontAwesomeIcon
                style={{ fontSize: "20px" }}
                className="me-3"
                icon={faHome}
              />
              Home
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
