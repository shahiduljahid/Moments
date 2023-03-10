import { CircularProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";


const Services = ({ showbtn }) => {
  const [serviceData, setServiceData] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/service/`)
      .then((res) => res.json())
      .then((data) => setServiceData(data));
  }, []);



  return (
    <div className="container">
      <div className="row">
        <div className=" d-flex justify-content-center mt-5 col-md-12 mb-5">
          {!showbtn ? (
            <h3>
              Enjoy Our Awasome <span className="text-color">services</span>
            </h3>
          ) : (
            <h3>
              Our<span className="text-color h1 ms-3">services</span>
            </h3>
          )}
        </div>
        <div className="col-md-12">
          <div className="row justify-content-center">
          {serviceData.length === 0 && (
              <div className="text-center">
                <CircularProgress disableShrink />
                <CircularProgress disableShrink />
              
                <CircularProgress disableShrink />
              </div>
            )}


            {serviceData.map((service) => (
              <ServiceCard key={service._id} showbtn={showbtn} service={service}></ServiceCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
