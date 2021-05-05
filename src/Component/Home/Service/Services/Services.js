import React, { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import cinematic from "../../../../photo/cinematic.png";
import dynamic from "../../../../photo/dynamic.png";
import photosession from "../../../../photo/photo.png";
import digital from "../../../../photo/camera-strap.png";
import classic from "../../../../photo/classic.png";
import expression from "../../../../photo/expression.png";

const Services = ({ showbtn }) => {
  const [serviceData, setServiceData] = useState([]);
  useEffect(() => {
    fetch("https://fierce-stream-67522.herokuapp.com/services")
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
            {serviceData.map((service) => (
              <ServiceCard showbtn={showbtn} service={service}></ServiceCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
