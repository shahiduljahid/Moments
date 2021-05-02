import { faFacebookF, faGooglePlusG, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="container mt-5 pt-5 mb-5 pb-5">
        <div  className="row justify-content-center footer-container">
          <div className="col-md-3 mb-5">
            <ul className="navbar-nav">
              <li className="nav-item text-color">
                <h5 >Services</h5>
              </li>
              <li className="nav-item">Cinematic video</li>
              <li className="nav-item">Daynamic video</li>
              <li className="nav-item">Photo session</li>
              <li className="nav-item">Digital express</li>
              <li className="nav-item">Classic photo video</li>
            </ul>
          </div>
          <div className="col-md-3 mb-5">
            {" "}
            <ul className="navbar-nav">
              <li className="nav-item text-color">
                <h5>oral Products</h5>
              </li>
              <li className="nav-item">Cinematic video</li>
              <li className="nav-item">Daynamic video</li>
              <li className="nav-item">Photo session</li>
              <li className="nav-item">Digital express</li>
              <li className="nav-item">Classic photo video</li>
            </ul>
          </div>
          <div className="col-md-3 mb-5">
            {" "}
            <ul className="navbar-nav">
              <li className="nav-item text-color">
                <h5 >our fetures</h5>
              </li>
              <li className="nav-item">Cinematic video</li>
              <li className="nav-item">Daynamic video</li>
              <li className="nav-item">Photo session</li>
              <li className="nav-item">Digital express</li>
              <li className="nav-item">Classic photo video</li>
            </ul>
          </div>
          <div className="col-md-3 mb-5">
            <ul className="navbar-nav">
              <li className="nav-item text-color">
                <h5 >Our address</h5>
              </li>
              <li className="nav-item mb-3 ">NewYork-101010 huson yard</li>
              <li className="nav-item">
                <FontAwesomeIcon
                  style={{ fontSize: "20px" }}
                  className=" me-3  text-color  "
                  icon={faFacebookF}
                />
                <FontAwesomeIcon
                  style={{ fontSize: "20px" }}
                  className=" me-3  text-color   "
                  icon={faTwitter}
                />
                <FontAwesomeIcon
                  style={{ fontSize: "20px" }}
                  className=" me-3 text-color  "
                  icon={faGooglePlusG}
                />
              </li>
  
              <li className="nav-item mb-1 mt-5">call now</li>
              <li className="nav-item">
                <button
                  style={{
                    backgroundColor: "#15D2C7",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                  className="btn btn-color text-light"
                >
                  +861765808
                </button>
              </li>
            </ul>
          </div>
          <div className="col-md-6 d-flex justify-content-center">Copyright © {new Date().getFullYear()} jahid. All Rights Reserved.</div>
        </div>
      </div>
    );
};

export default Footer;
