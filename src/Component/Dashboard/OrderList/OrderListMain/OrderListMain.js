import { CircularProgress } from "@material-ui/core";
import React, { useState } from "react";
import "./OrderListMain.css";
import axios from "axios";
import OrderList from "./../OrderList";

const OrderListMain = ({ orderList ,setOrderList }) => {

  const handleDate = (date) => {
    console.log(date);
    const newDate = new Date(date).getDate();
    const newMonth = new Date(date).getMonth();
    const newYear = new Date(date).getFullYear();

    let dateLength = newDate;
    dateLength = dateLength > 9 ? dateLength : "0" + dateLength;

    const fullDate = `${dateLength}-${newMonth}-${newYear}`;
    return fullDate;
  };

  const handleChange = (id, e) => {
    fetch(
      `${process.env.REACT_APP_API_BASE_URL}/appointment/updateStatus`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bookingId: id, status: e.target.value }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data) {
        }
      });
  };
  const handleDeleteOrder = async (id) => {
    try {
      const res = await axios.delete(
        `${process.env.REACT_APP_API_BASE_URL}/appointment/${id}`
      );
      if (res.data) {
            const deletedEle = res.data;
        const newData = await orderList.filter((ele) => ele._id !== deletedEle._id);
        setOrderList(newData);
        
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="row">
      <div className="px-5">
        <table className="table table-borderless h7 rounded">
          <thead className=" p-1 ">
            <tr>
              <th className="text-secondary serial-number " scope="col">
                sr.no
              </th>
              <th className="text-secondary serial-number" scope="col">
                Date
              </th>
              <th className="text-secondary serviceName" scope="col">
                service
              </th>
              <th className="text-secondary" scope="col">
                Name
              </th>
              <th className="text-secondary contact" scope="col">
                contact
              </th>
              <th className="text-secondary" scope="col">
                Status
              </th>
              <th className="text-secondary" scope="col">
                Action
              </th>
            </tr>
          </thead><tbody>
          {orderList.length === 0 && <div className="text-center">loading...</div>}
          {orderList.map((apm, index) => {
            return (
              
                <tr key={apm._id}>
                  <td
                    style={{ fontWeight: "bold", color: "#0A0A0A" }}
                    className="text-weight-bold serial-number"
                  >
                    {index + 1}
                  </td>
                  <td
                    style={{ fontWeight: "bold", color: "#0A0A0A" }}
                    className="text-weight-bold serial-number "
                  >
                    {handleDate(apm.booking.date)}
                  </td>
                  <td
                    style={{ fontWeight: "bold", color: "#0A0A0A" }}
                    className="text-weight-bold serviceName"
                  >
                    {apm.booking.service}
                  </td>

                  <td
                    style={{ fontWeight: "bold", color: "#0A0A0A" }}
                    className="text-weight-bold"
                  >
                    {apm.booking.firstName}
                  </td>
                  <td
                    style={{ fontWeight: "bold", color: "#0A0A0A" }}
                    className="text-weight-bold contact"
                  >
                    {apm.booking.phoneNumber}
                  </td>
                  <td className="text-weight-bold">
                    <form
                      onChange={(e) => handleChange(apm._id, e)}
                      action=""
                      className="form-control border-0 p-0"
                    >
                      <div class="form-group">
                        <select
                          className=" mb-3 text-bold  text-light btn btn-color  boder-bottom"
                          id="status"
                        >
                          {apm.status && (
                            <option className=" text-bold">{apm.status}</option>
                          )}
                          {(apm.status === "Done" || !apm.status) && (
                            <option
                              style={{ padding: "5px", color: "black" }}
                              className=" text-bold"
                            >
                              pending
                            </option>
                          )}

                          {(apm.status === "pending" || !apm.status) && (
                            <option
                              style={{ padding: "5px", color: "black" }}
                              className=" text-bold"
                            >
                              Done
                            </option>
                          )}
                        </select>
                      </div>
                    </form>
                  </td>
                  <td
                    style={{ fontWeight: "bold", color: "#0A0A0A" }}
                    className="text-weight-bold"
                  >
                    <button
                      onClick={() => handleDeleteOrder(apm._id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              
            );
          })}</tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderListMain;
