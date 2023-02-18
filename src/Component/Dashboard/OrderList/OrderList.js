import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import OrderListMain from './OrderListMain/OrderListMain';

const OrderList = () => {
    const[orderList ,setOrderList] = useState([])
    useEffect(()=>{
        fetch('https://wedding-photographer-server-peach.vercel.app/appointment')
        .then(res=>res.json())
        .then(data=>setOrderList(data))
    },[])
   
    return (
        <div className="row">
            <div className="col-md-3 col-xl-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9">
            <h4  className=" ms-2 text-secondary mt-3  ">Orders</h4>
        <div className=" shadow mt-5" >
         
          <div className=" mx-3 mt-3">
            <h5 className="text-color">Check order</h5>
          </div>
          <OrderListMain orderList={orderList}></OrderListMain>
        </div>
              
            </div>
          
            
        </div>
    );
};

export default OrderList;