import React from 'react';
import TransactionImg from '../../images/svg/transactionImg.svg'
import './index.css';

const TransactionAnalysis = (props) => {
    const {title, amount} = props;
    return (
        <div className='transaction'>
            <div className='text__content'>
                <div className='title'>{title}</div>
                <div className='amount'>{amount}</div>
            </div>
            <img src={TransactionImg} />
        </div>
    );
};

export default TransactionAnalysis;