import React, { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import cinematic from "../../../../photo/cinematic.png";
import dynamic from "../../../../photo/dynamic.png";
import photosession from "../../../../photo/photo.png";
import digital from "../../../../photo/camera-strap.png";
import classic from "../../../../photo/classic.png";
import expression from "../../../../photo/expression.png";

const Services = ({ showbtn }) => {



  const[serviceData ,setServiceData] = useState([])
  useEffect(()=>{
      fetch('http://localhost:4000/services')
      .then(res=>res.json())
      .then(data=>setServiceData(data))
  },[])

  console.log(serviceData)



  // const serviceData = [
  //   {
  //     _id: "5e8df50be6e8231764dc23de",
  //     id: 1,
  //     title: "Cinematic video",
  //     description:
  //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, excepturi",
  //     img: cinematic,
  //   },
  //   {
  //     _id: "5e8df578e6e8231764dc23df",
  //     id: 2,
  //     title: "Dynamic video",
  //     description:
  //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, excepturi",
  //     img: dynamic,
  //   },
  //   {
  //     _id: "5e8df5aee6e8231764dc23e0",
  //     id: 3,
  //     title: "Photo session",
  //     description:
  //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, excepturi",
  //     img: photosession,
  //   },
  //   {
  //     _id: "5e8df50be6e8231764dc23de",
  //     id: 1,
  //     title: "Digital express",
  //     description:
  //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, excepturi",
  //     img: digital,
  //   },
  //   {
  //     _id: "5e8df578e6e8231764dc23df",
  //     id: 2,
  //     title: "Classic photo&video",
  //     description:
  //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, excepturi",
  //     img: classic,
  //   },
  //   {
  //     _id: "5e8df5aee6e8231764dc23e0",
  //     id: 3,
  //     title: "Expressions photo&video",
  //     description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
  //     img: expression,
  //   },
  // ];

  return (
    <div className="container">
      <div className="row">
        <div className=" d-flex justify-content-center mt-5 col-md-12 mb-5">
          {!showbtn ? (
            <h3>
              Enjoy Our Awasome <span className="text-color">services</span>
            </h3>
          ) : (
            <h3>
              Our<span className="text-color h1 ms-3">services</span>
            </h3>
          )}
        </div>
        <div className="col-md-12">
          <div className="row justify-content-center">
            {serviceData.map((service) => (
              <ServiceCard showbtn={showbtn} service={service}></ServiceCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
