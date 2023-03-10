import React, { useState } from "react";
import "./AddReview.css";
import Sidebar from "../Sidebar/Sidebar";

import { useForm } from "react-hook-form";

const AddReview = () => {
  const [success ,setSuccess] =useState( false);


  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    const url = `${process.env.REACT_APP_API_BASE_URL}/review/addReview`;
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log(res);
      if (res) {
      }
      setSuccess(true);;
    });
  };
  const handleFocus = (e) => {
    e.target.value = "";
    setSuccess(false);

  };
  return (
    <div className="row">
      <div className="col-md-3 col-xl-2 sidebar">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-5">
        <div>
          <h4 className="text-color ms-3  mb-2 mt-3">Add Review</h4>
          <form
            className="form-control border-0 pt-4 pb-5 px-2 "
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              onFocus={handleFocus}
              type="text"
              placeholder="Your Name"
              className="form-control mb-3"
              {...register("name", { required: true })}
            />
            {errors.name && <span>This field is required</span>}
            <input
              onFocus={handleFocus}
              type="text"
              placeholder="Your company Name"
              className="form-control mb-3"
              {...register("companyName", { required: true })}
            />
            {errors.CompanyName && <span>This field is required</span>}
            <input
              onFocus={handleFocus}
              type="text"
              placeholder="Your designation"
              className="form-control mb-3"
              {...register("Designation", { required: true })}
            />

            {errors.Designation && <span>This field is required</span>}

            <textarea
              onFocus={handleFocus}
              className="form-control mb-3"
              rows="5"
              placeholder="description"
              {...register("description", { required: true })}
            ></textarea>
            {errors.description && <span>This field is required</span>}
            <div style={{margin:0,padding:0}} className="col-md-3">
              <input
                onFocus={handleFocus}
                type="number"
                placeholder="Give Rating"
                className="form-control mb-3"
                {...register("rating", { required: true })}
              />
            </div>
            {errors.rating && <span>This field is required</span>}

            <input
              value="ADD"
              className="mb-2 btn btn-color text-light text-bold"
              type="submit" 
            />

{
           success &&  <h4 className="text-center text-success">Thanks for the Review</h4>
         }
          </form>
       
        </div>
       
      </div>
      
    </div>
  );
};

export default AddReview;
