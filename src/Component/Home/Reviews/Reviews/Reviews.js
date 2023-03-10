import { CircularProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";


import ReviewCrad from "../ReviewCard/ReviewCrad";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/review/`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-12 mt-5 mb-5 text-center">
          <h4>
            Our Customer's <span className="text-color">Reviews</span>
          </h4>
        </div>
        <div className="col-md-10 mt-5">
          <div className="row justify-content-center">
            {reviews.length === 0 && (
              <div className="text-center">
                <CircularProgress disableShrink />
                <CircularProgress disableShrink />
              
                <CircularProgress disableShrink />
              </div>
            )}
            <Carousel>
              {reviews.map((review) => (
                <Carousel.Item>
                  <ReviewCrad key={review._id} review={review}></ReviewCrad>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
