import React from 'react';
import Order from '../Order';
import './index.css';
const orderAanalytics = () => {
    return (
        <div className='order__container' >
            <Order
            pending={20}
            reconcilled={80}
            type='Order'
            >
            </Order>
            <Order
            pending={20}
            reconcilled={70}
            type='Payments'
            >
            </Order>
        </div>
    );
};

export default orderAanalytics;