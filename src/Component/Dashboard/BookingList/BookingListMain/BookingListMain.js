import React from 'react';

const BookingLIstMain = ({bookingList}) => {
    return (
        <div className="row ">

            { bookingList.map(service=>{

                return <div className="col-md-3 text-center shadow p-3 mb-3 me-2">
                    <img   style={{ height: "60px" }}
        className="img-fluid" src={service.booking.serviceImg} alt=""/>

                    <h4  className="text-color text-bold mb-2 ">{service.booking.service}</h4>

                    <p>{service.booking.serviceDes}</p>
                    
                    
                    <p style={{backgroundColor:' #ff6961d1'}} className="btn text-light" >{service.status || 'pending'}</p>
                    



                </div>
            })


            }
            
        </div>
    );
};

export default BookingLIstMain;