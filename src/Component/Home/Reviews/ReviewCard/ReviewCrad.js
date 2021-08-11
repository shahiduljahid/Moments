
import { Box} from '@material-ui/core';
import { Rating } from '@material-ui/lab';

import React from 'react';




const ReviewCrad = ({review}) => {
    return (
       
        
        <div className="col-md-12 text-center mx-2 mb-3 rounded shadow p-3">
           

            <h3 style={{textTransform:'capitalize'}}>{review.name}</h3>
            <h6 style={{textTransform:'capitalize'}} className="text-color">{review.companyName},<span style={{textTransform:'uppercase'}}>{review.Designation}</span></h6>
            <p >{review.description}</p>
            <Box component="fieldset" mb={3} borderColor="transparent">
       
        <Rating name="read-only" value={review.rating} readOnly />
      </Box>
    
    </div>
    );
};

export default ReviewCrad;