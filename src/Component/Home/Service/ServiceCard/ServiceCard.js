import React from "react";
import { Link } from "react-router-dom";

import ServiceForm from "../ServiceForm/ServiceForm";

const ServiceCard = ({ service ,showbtn }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="col-xl-3 mx-2 mb-5 rounded shadow p-3 text-center ">
      <img
        style={{ height: "60px" }}
        className="img-fluid"
        src={service.img}
        alt="img"
      />
      <h3 className="text-color">{service.title}</h3>
      <p style={{ color: "#3A4256", fontWeight: "bold" }}>
        {service.description}
      </p>

      <br />
      {
        !showbtn ?  <Link to={"/services"}>
        <button
          // onClick={openModal}
          style={{ fontWeight: "bold" }}
          className="btn text-light btn-color mb-2 mt-2"
        >
          Check Services
        </button>
      </Link> :  
        <button
          onClick={openModal}
          style={{ fontWeight: "bold" }}
          className="btn text-light btn-color mb-2 mt-2"
        >
          Check Availability
        </button>
      
      }
     

      <ServiceForm
        modalIsOpen={modalIsOpen}
        name={service.title}
        description={service.description}
        img={service.img}
        closeModal={closeModal}
      ></ServiceForm>
    </div>
  );
};

export default ServiceCard;
