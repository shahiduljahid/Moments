import React from "react";
import "./HeaderMain.css";


const HeaderMain = () => {
  return (
    <div className="mb-5 mt-5 d-flex justify-content-center  pb-5 text-center align-items-center  headerMain-container ">
      
      <div className=" rounded">
         
      </div>
      <div className="headerInfo">
        <h1 className="text-light">
          We Are Your
        </h1>
        <h4 className="text-light ">Wedding photographer</h4>

        <button style={{ fontWeight: "bold"}} className="btn mt-2 text-light btn-color">Get Appointment</button>
      </div>
    </div>
  );
};

export default HeaderMain;
