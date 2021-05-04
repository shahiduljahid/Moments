import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const OrderList = () => {
    return (
        <div className="row">
            <div className="col-md-3 col-xl-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9">
                <h1>orderList</h1>
            </div>
          
            
        </div>
    );
};

export default OrderList;