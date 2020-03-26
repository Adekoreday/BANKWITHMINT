import React from 'react';
import searchIcon from '../../images/svg/search.svg'
import './index.css';

const search = () => {
    return (
        <div className='search'>
            <img className='search__icon' src={searchIcon} alt='search' />
            <input className='search__input' placeholder='Search..'></input>
        </div>
    );
};

export default search;