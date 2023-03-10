import React, { useContext, useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useForm } from "react-hook-form";
import lock from "../../../../photo/closed.svg";
import { userContext } from "../../../../App";
import Payment from "../Payment/Payment";

const ServiceForm = ({ modalIsOpen, closeModal, name, description, img }) => {
  const [loggedInUser] = useContext(userContext);

  const [infoSubmit, setInfoSubmit] = useState(false);

  const [bookingInfo, setBookingInfo] = useState({});
  const closeIcon = <img style={{ height: "40px" }} src={lock} alt="" />;
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.service = name;
    data.serviceImg = img;
    data.serviceDes = description;

    data.date = new Date();
    setBookingInfo(data);
    setInfoSubmit(true);
  };

  const handlePayment = (paymentId) => {
    const data = {
      user: sessionStorage.getItem("token") || loggedInUser.email,
      booking: bookingInfo,
      paymentId,
    };
    console.log(data);

    const url = `${process.env.REACT_APP_API_BASE_URL}/appointment/addappointment`;
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((result) => {
      if (result) {
        closeModal();
        alert("successfull");
      }
    });
  };

  return (
    <div>
      <Modal
        closeIcon={closeIcon}
        open={modalIsOpen}
        onClose={closeModal}
        center
        classNames={{
          modal: "customModal",
        }}
      >
        {!infoSubmit ? (
          <div className="shadow p-3">
            <h4 className="text-color text-center">{name}</h4>

            <form
              className=" mt-5 border-0 form-control"
              onSubmit={handleSubmit(onSubmit)}
            >
              <label className="text-color mb-2 text-bold" htmlFor="">
                Your information:
              </label>
              <input
                className="form-control mb-3 form-group"
                placeholder="First name"
                required
                {...register("firstName", { required: true })}
              />

              <input
                className="form-control mb-3 form-group"
                placeholder="Last name"
                required
                {...register("lastName", { required: true })}
              />

              <input
                className="form-control  mb-3 form-group"
                placeholder="phone number"
                {...register("phoneNumber", { required: true })}
              />

              <input
                type="email"
                className="form-control  mb-3 form-group"
                name="email"
                {...register("email", { required: true })}
                placeholder="email"
                id=""
              />

              <label className="text-color mb-2 text-bold" htmlFor="">
                Wedding Details:
              </label>
              <input
                type="text"
                placeholder="Address"
                {...register("address", { required: true })}
                className="form-control  mb-3 form-group"
                name="address"
                id=""
              />

              <input
                type="Date"
                placeholder="Wedding Date"
                {...register("weddingDate", { required: true })}
                className="form-control  mb-3 form-group"
                name="weddingDate"
                id=""
              />

              <input
                className="d-flex justify-content-center ms-auto mb-3 btn text-light text-bold font-weight-bold btn-color form-group"
                type="submit"
              />
            </form>
          </div>
        ) : (
          <Payment handlePayment={handlePayment}></Payment>
        )}
      </Modal>
    </div>
  );
};

export default ServiceForm;
