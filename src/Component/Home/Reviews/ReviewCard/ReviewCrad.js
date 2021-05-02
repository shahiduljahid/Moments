
import { Box, Typography } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import React from 'react';


// import Rating from '@material-ui/lab/Rating';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';


const ReviewCrad = ({review}) => {
    return (
        <div className="col-md-3 text-center mx-2 mb-3 rounded shadow p-3">

            <h3 >{review.name}</h3>
            <h6 className="text-color">{review.companyName},{review.Designation}</h6>
            <p>{review.description}</p>
            <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Read only</Typography>
        <Rating name="read-only" value={review.rating} readOnly />
      </Box>
    
    </div>
    );
};

export default ReviewCrad;