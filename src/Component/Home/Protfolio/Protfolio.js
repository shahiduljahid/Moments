import React from "react";
import "./Protfolio.css";
import sign from "../../../photo/signature.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraRetro, faPaintBrush } from "@fortawesome/free-solid-svg-icons";

const Protfolio = () => {
  return (
    <div className="container mt-5 pt-5  mb-5">
      <div className="row">
        <div className="col-md-6 mb-5">
          <h1>WE CARE FOR YOUR</h1>
          <h1 className="mb-3">MEMORIES</h1>
          <img
            height={{ height: "30px" }}
            src={sign}
            className="img-fluid"
            alt="signature"
          />
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-6 mb-5">
              <h3><FontAwesomeIcon className="me-2"  icon={faCameraRetro}></FontAwesomeIcon>PHOTOGRAPHY</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis magni aliquam maiores modi, debitis fugit a quod ipsam
                vel id!
              </p>
            </div>
            <div className="col-md-6 mb-5">
              <h3> <FontAwesomeIcon  className="me-2"   icon={faPaintBrush}></FontAwesomeIcon>RETOUCH</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis magni aliquam maiores modi, debitis fugit a quod ipsam
                vel id!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Protfolio;
