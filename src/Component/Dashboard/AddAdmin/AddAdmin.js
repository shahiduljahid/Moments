import React from "react";
import Sidebar from "../Sidebar/Sidebar";

import { useForm } from "react-hook-form";

const AddAdmin = () => {
  const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {

    const url = `${process.env.REACT_APP_API_BASE_URL}/admin/addAdmin`;
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((result) => {
      if (result) {
     
        alert("successfull");
      }
    });
 
  };
  return (
    <div className="row">
      <div className="col-md-3 col-xl-2 sidebar">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-8">
        <div>
          <h4 className="text-color ms-3  mb-2 mt-3">Add Admin</h4>
          <form
            className="shadow form-control border-0 pt-4 pb-5 px-2 "
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type="email"
              placeholder="Make admin with email"
              className="form-control mb-3"
              {...register("admin", { required: true })}
            />

            {errors.exampleRequired && <span>This field is required</span>}

            <input
              value="ADD"
              className=" btn btn-color text-light text-bold"
              type="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAdmin;
