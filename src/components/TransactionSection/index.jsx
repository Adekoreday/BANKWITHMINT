import React from 'react';
import TransactionAnalysis from '../TransactionAnalysis'
import './index.css';

const TransactionSection = () => {
    return (
        <div className='transaction__section'>
                <div className='transaction__section--content'>
                <TransactionAnalysis 
                title='Daily Transaction Volume'
                amount= '2342'
                />
                <TransactionAnalysis 
                title='Daily Transaction Value'
                amount= '#4,0000,000'
                />        
                </div>
                <div className='transaction__section--content2'>
                <TransactionAnalysis 
                title='Total Transaction Volume'
                amount= '452,0000'
                />
                <TransactionAnalysis 
                title='Total Transaction Value'
                amount= '#4,000,000'
                />
                </div>
        </div>
    );
};

export default TransactionSection;