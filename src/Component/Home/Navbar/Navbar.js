import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../../App";
import logo from "../../../photo/camera.png";
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "../../Login/firebaseConfig";

const Navbar = () => {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const [isAdmin, setIsAdmin] = useState(false);

  const user = sessionStorage.getItem("token");
  const admin = sessionStorage.getItem("admin") || isAdmin;
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
    setIsAdmin(false)
  };
  useEffect(() => {
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
  }, [loggedInUser]);
  return (
    <nav className="navbar navbar-expand-lg navbar-light pt-5">
      <div className="container-fluid">
        <div className="align-items-center d-flex">
          <img
            style={{ height: "30px" }}
            src={logo}
            alt="logo"
            className="img-fluid me-1"
          />
          <span style={{ fontWeight: "bold", fontSize: "20px" }} className="">
            Moments
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
          <ul className="navbar-nav ms-auto text-center d-flex align-items-center  mb-2 mb-lg-0">
            <li className="nav-item ">
              <Link
                to={"/home"}
                className="nav-link active"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            {admin ? (
              <li className="nav-item ">
                <Link to={"/orderList"} className="nav-link">
                  Admin
                </Link>
              </li>
            ) : (
              <>
                <li className="nav-item ">
                  <Link to={"/bookingList"} className="nav-link">
                    Order
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link to={"/services"} className="nav-link">
                    Services
                  </Link>
                </li>
              </>
            )}

            <li className="nav-item ">
              {loggedInUser.email || user ? (
                <button
                  onClick={hangleSignOut}
                  className="btn btn-color text-white text-bold"
                >
                  Log Out
                </button>
              ) : (
                <Link to={"/login"} className="nav-link navigation  ">
                  <button className="btn btn-color text-white text-bold">
                    Log In
                  </button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
