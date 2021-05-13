import { CircularProgress, Link } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

const BookingLIstMain = ({ bookingList }) => {
  const message = `No booking found ,please book our service`;

  const history = useHistory();
  const handleRoute = () => {
    history.push("/services");
  };

  const [noData, setNoData] = useState("");
  useEffect(() => {
    const timer = setTimeout(() => {
      setNoData(message);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="row ">
      {!noData && bookingList.length === 0 && (
        <div className="text-center">
          <CircularProgress disableShrink />
          <CircularProgress disableShrink />

          <CircularProgress disableShrink />
        </div>
      )}

      {bookingList.map((service) => {
        return (
          <div className="col-md-3 text-center shadow p-3 mb-3 me-2">
            <img
              style={{ height: "60px" }}
              className="img-fluid"
              src={service.booking.serviceImg}
              alt=""
            />

            <h4 className="text-color text-bold mb-2 ">
              {service.booking.service}
            </h4>

            <p>{service.booking.serviceDes}</p>

            <p
              style={{ backgroundColor: " #ff6961d1" }}
              className="btn text-light"
            >
              {service.status || "pending"}
            </p>
          </div>
        );
      })}

      {noData && bookingList.length === 0 && (
        <div className="text-center">
          {
            <h4>
              {noData}
              <span onClick={handleRoute}>
               
                <a className="ms-1" style={{textDecoration:'underline',
            color:'blue',}}>  Here</a>
              </span>
            </h4>
          }
        </div>
      )}
    </div>
  );
};

export default BookingLIstMain;
