import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { useForm } from "react-hook-form";
import axios from "axios";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./AddService.css";
import { CircularProgress } from "@material-ui/core";

const AddService = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [upload, setUpload] = useState(false);
  // const[data,setData] = useContext(BookContext)

  const [service, setService] = useState({
    noImage: "",
    upload: false,
    success: false,
    failed: "",
  });

  const handleFile = (event) => {
    setUpload(true);
    const imageData = new FormData();
    imageData.set("key", "f16e0919dbce32c8326397f504a1e7b1");

    imageData.append("image", event.target.files[0]);
    axios
      .post(
        "https://api.imgbb.com/1/upload",

        imageData
      )
      .then(function (response) {
        setImageUrl(response.data.data.display_url);
        setUpload(false);
        const newServiceInfo = { ...service };
        newServiceInfo.noImage = "";
        setService(newServiceInfo);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (data.title && data.description && imageUrl) {
      const serviceData = { ...data, img: imageUrl };
      console.log(serviceData);

      const url = `${process.env.REACT_APP_API_BASE_URL}/service/addService`;
      fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(serviceData),
      }).then((res) => {
        console.log(res);
        if (res) {
        }
        alert("success");
      });

      setImageUrl(null);
      const updatedBookInfo = {
        ...service,

        noImage: "",
        failed: "",
        success: true,
      };
      setService(updatedBookInfo);
    } else if (!imageUrl) {
      const newBookInfo = { ...service, success: false };
      newBookInfo.noImage = "please upload a image";
      setService(newBookInfo);
    } else {
      const newBookInfo = { ...service, success: false };
      newBookInfo.failed = "please give all information";
      setService(newBookInfo);
    }
  };
  const handleFocus = (e) => {
    e.target.value = "";
    const newServiceInfo = { ...service, success: false };

    setService(newServiceInfo);
  };
  return (
    <div className="row">
      <div className="col-md-3 col-xl-2 sidebar">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-8">
        <h4 className=" ms-2 text-secondary mt-3  ">Add Service</h4>
        <div className=" shadow mt-5">
          <form
            className="border-0 pt-4 mb-3 pb-5 px-2 "
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="row">
              <div className="col-md-6">
                <input
                  onFocus={handleFocus}
                  type="text"
                  placeholder="title"
                  className="form-control mb-3"
                  {...register("title", { required: true })}
                />
                <textarea
                  onFocus={handleFocus}
                  className="form-control mb-3"
                  rows="5"
                  placeholder="description"
                  {...register("description", { required: true })}
                ></textarea>
              </div>
              <div className="col-md-6">
                <form action="">
                  <label className="mb-2 text-bold text-color">Add photo</label>
                  <br />
                  <label htmlFor="fileBtn" className="uploadBtn">
                    {imageUrl ? (
                      <p className="text-success">
                        {" "}
                        <FontAwesomeIcon
                          className="mr-2"
                          icon={faCloudUploadAlt}
                        />
                        uploaded
                      </p>
                    ) : (
                      <p className="text-light">
                        {" "}
                        <FontAwesomeIcon
                          className="mr-2"
                          icon={faCloudUploadAlt}
                        />
                        Upload Photo
                      </p>
                    )}
                  </label>
                  <input
                    onChange={handleFile}
                    className="from-group mb-2 "
                    type="file"
                    name="imageFile"
                    id="fileBtn"
                    required
                    hidden
                  />
                </form>

                {upload && (
                  <p className="h4">
                    <CircularProgress />
                    <CircularProgress color="secondary" />
                    <span className="text-danger"> uploading... </span>
                  </p>
                )}
                <p style={{ color: "red", fontWeight: 500 }}>
                  {service.noImage}
                </p>
              </div>
            </div>

            {errors.exampleRequired && <span>This field is required</span>}

            <input
              value="ADD"
              className=" btn btn-color text-light text-bold"
              type="submit"
            />
          </form>
          {service.failed && (
            <div className="col-xl-12 text-center pb-5 alert">{service.failed}</div>
          )}
          {service.success && (
            <div
              style={{ color: "green",textTransform:'capitalize' }}
              className="col-xl-12 text-center"
            >
              <p className="col-xl-12 text-center pb-5  h5">service added successfully</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddService;
