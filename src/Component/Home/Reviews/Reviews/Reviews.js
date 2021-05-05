import React, { useEffect, useState } from 'react';
import ReviewCrad from '../ReviewCard/ReviewCrad';

const Reviews = () => {

    const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://fierce-stream-67522.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
   

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12 mt-5 mb-5 text-center">

                    <h4>Our Customer's <span className="text-color">Reviews</span></h4>


                </div>
                <div className="col-md-12">
                    <div className="row justify-content-center">
                        {
                            reviews.map(review=><ReviewCrad review={review}></ReviewCrad>)


                        }


                    </div>
                
                </div>
            </div>
            
        </div>
    );
};

export default Reviews;