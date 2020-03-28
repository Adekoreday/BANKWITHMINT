import React from 'react';
import searchIcon from '../../images/svg/search.svg'
import './index.css';

const search = (props) => {
    const { type } = props;
    return (
        <div>
            {type === 'header' && (
                <div className='search'>
                    <img className='search__icon' src={searchIcon} alt='search' />
                    <input className='search__input' placeholder='Search..'></input>
                </div>
            )}
            {type === 'payment' && (
                <div className='search__payment'>
                    <img className='search__icon' src={searchIcon} alt='search' />
                    <input className='search__input--payment' placeholder='Search..'></input>
                </div>
            )}

        </div>

    );
};

export default search;