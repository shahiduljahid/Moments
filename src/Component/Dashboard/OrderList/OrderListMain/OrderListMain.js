import React from "react";
import "./OrderListMain.css";

const OrderListMain = ({ orderList }) => {
    
  const handleDate = (date) => {
    const newDate = new Date(date).getDate();
    const newMonth = new Date(date).getMonth();
    const newYear = new Date(date).getFullYear();

    let dateLength = newDate;
    dateLength = dateLength > 9 ? dateLength : "0" + dateLength;

    const fullDate = `${dateLength}-${newMonth}-${newYear}`;
    return fullDate;
  };
 
  const handleChange =(id,e)=>{
   

     fetch('https://fierce-stream-67522.herokuapp.com/updateStatus',{
         method:'PATCH',
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({bookingId : id , status : e.target.value})
     })
     .then(res => res.json())
     .then(data=>{
         if(data){}
       
     })

    
     
    

  }
  return (
    <div className="row">
      <div className="px-5">
        <table className="table table-borderless h7 rounded">
          <thead className=" p-1 ">
            <tr>
              <th className="text-secondary serial-number " scope="col">
                sr.no
              </th>
              <th className="text-secondary" scope="col">
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
                Action
              </th>
            </tr>
          </thead>
          {orderList.map((apm, index) => {
            return (
              <tbody>
                <tr>
                  <td
                    style={{ fontWeight: "bold", color: "#0A0A0A" }}
                    className="text-weight-bold serial-number"
                  >
                    {index + 1}
                  </td>
                  <td
                    style={{ fontWeight: "bold", color: "#0A0A0A" }}
                    className="text-weight-bold "
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
                    <form  onChange={(e)=>handleChange(apm._id,e)} action="" className="form-control border-0 p-0">
                      <div class="form-group">
                        <select
                          className=" mb-3 text-bold  text-light btn btn-color  boder-bottom"
                          id="status"
                        >
                          {apm.status && (
                            <option className=" text-bold bg-success ">
                              Done
                            </option>
                          )}
                          <option className=" text-bold bg-danger  ">
                            pending
                          </option>
                          {!apm.status && (
                            <option className=" text-bold bg-success ">
                              Done
                            </option>
                          )}
                          
                        </select>
                      </div>
                    </form>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default OrderListMain;
