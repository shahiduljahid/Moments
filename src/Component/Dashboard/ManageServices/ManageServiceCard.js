import React from "react";
import axios from "axios";

const ManageServiceCard = ({ service, setServiceData ,serviceData}) => {
  const handleDeleteService = async (id) => {
    try {
      const res = await axios.delete(
        `${process.env.REACT_APP_API_BASE_URL}/service/${id}`
      );
      if (res.data) {
        const deletedEle = res.data;
        const newData = await serviceData.filter((ele) => ele._id !== deletedEle._id);
        setServiceData(newData);
      
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="col-xl-4 mx-2 mb-5 rounded shadow p-3 text-center ">
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
      <button
        onClick={() => {
          handleDeleteService(service._id);
        }}
        style={{ fontWeight: "bold" }}
        className="btn text-light btn-color mb-2 mt-2"
      >
        Delete Service
      </button>
    </div>
  );
};

export default ManageServiceCard;
