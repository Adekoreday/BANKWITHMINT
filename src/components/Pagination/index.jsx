import React from 'react';
import './index.css';

const Pagination = () => {
    return (
        <div className='container__pagination'>
        <div className='pagination__text'>Showing 1 to 10 of 500 enteries</div>
        <div className='pagination__group'>
            <div className='items'>Previous</div>
            <div className='current__item number'>1</div>
            <div className='items number'>2</div>
            <div className='items'>Next</div>
        </div>
        </div>
    );
};

export default Pagination;