import React from 'react';
import ReviewCrad from '../ReviewCard/ReviewCrad';

const Reviews = () => {
    const reviews = [
        {
         
           companyName:'R&D Gallary',
           name:'Winson harry',
           Designation:'CEO',
           description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, excepturi',
           rating:4
    
        },
        {
            companyName:'Beauty Fixer',
           name:'Alexia',
           Designation:'CEO',
           description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, excepturi'
          , rating:4.2
          },
          {
            companyName:'Times of india',
           name:'Walter White',
           Designation:'Senior Photographer',
           description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, excepturi',
           rating:5
          }
      ];


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