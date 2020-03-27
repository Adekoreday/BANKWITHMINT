import React from 'react';
import LinearChart from '../linearChart';
import OrderAnalytics from '../OrdersAnalytics';
import './index.css';
const analytics = () => {
    return (
        <div className='analytics'>
            <LinearChart />
            <OrderAnalytics />
        </div>
    );
};

export default analytics;