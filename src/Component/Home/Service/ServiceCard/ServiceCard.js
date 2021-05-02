import React from 'react';

const ServiceCard = ({service}) => {
    return (
        <div className="col-xl-3 mx-2 mb-5 rounded shadow p-3 text-center ">
            <img style={{height:'60px'}} className="img-fluid" src={service.img} alt="img"/>
        <h3 className="text-color">{service.title}</h3>
        <p style={{ color: "#3A4256", fontWeight: "bold" }}>
          {service.description}
        </p>
  
        <br />
        <button
        //   onClick={openModal}
          style={{ fontWeight: "bold" }}
          className="btn text-light btn-color mb-2 mt-2"
        >
          Check Availability
        </button>
        {/* <AppointmentForm modalIsOpen={modalIsOpen} visit={book.visitingHour} date={date} name={book.subject} closeModal={closeModal} ></AppointmentForm> */}
      </div>
    );
};

export default ServiceCard;