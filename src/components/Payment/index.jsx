import React from 'react';
import Select from '../select';
import Search from '../search';
import './index.css';


const Payment = () => {
    return (
    <div>
    <div className='payment__title'>Payments</div>
    <div className='payments '>
      <div className='showing payments__item'>
          <div>Showing</div>
      <div className='show'><Select type='pages'/></div>
      <div>out of 500 payments</div>
      </div>
      <div className='payments__item'><Search type='payment'/></div>
      <div className='showing'>
          <div>Show</div>
          <div><Select type='status'/></div>
     </div>
      </div>
      </div>
    );
};

export default Payment;