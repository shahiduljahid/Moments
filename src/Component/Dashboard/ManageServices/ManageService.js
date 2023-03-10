import { CircularProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import ManageServiceCard from "./ManageServiceCard";

const ManageService = ({}) => {
  const [serviceData, setServiceData] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/service/`)
      .then((res) => res.json())
      .then((data) => setServiceData(data));
  }, []);

  return (
    <div className="row">
      <div style={{ height: `${serviceData.length < 6 ? "100vh" : "auto"}` }} className="col-md-3 col-xl-2 sidebar">
        <Sidebar></Sidebar>
      </div>

      <div className="col-md-9 p-5 ">
        <div className="row justify-content-center">
          {serviceData.length === 0 && (
            <div className="text-center">
              <CircularProgress disableShrink />
              <CircularProgress disableShrink />

              <CircularProgress disableShrink />
            </div>
          )}

          {serviceData.map((service) => (
            <ManageServiceCard
            serviceData={serviceData}
            setServiceData={setServiceData}
              key={service._id}
              service={service}
            ></ManageServiceCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageService;
