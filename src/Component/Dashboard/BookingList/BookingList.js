import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import BookingListMain from './BookingListMain/BookingListMain';

const BookingList = () => {
    // const [loggedInUser, setLoggedInUser] = useState([])
    const[bookingList ,setBookingList] = useState([])
    const getUser = sessionStorage.getItem('token')

    console.log(getUser)

    useEffect(()=>{
        fetch(`${process.env.REACT_APP_API_BASE_URL}/appointment/userService`,
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ user: getUser })
        })
        .then(res=>res.json())
        .then(data=>setBookingList(data))
    },[getUser])
    console.log(bookingList)
    return (
        <div className="row">
            <div className="col-md-3 col-xl-2 sidebar">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9">
            <h4  className=" ms-2 text-secondary mt-3  ">Bookings</h4>
        <div className="mx-2 mt-5" >
         
         
          <BookingListMain bookingList={bookingList}></BookingListMain>
        </div>
              
            </div>
          
            
        </div>
    );
};

export default BookingList;