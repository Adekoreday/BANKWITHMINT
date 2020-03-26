import React from 'react';
import Search from '../search';
import Avatar from '../avatars';
import Badge from '../badges'
import './index.css';
const header = () => {

    return (
        <div className='header'>
            <div className='header__left'>
            <div className='header__logo'>
                TransMonitor
            </div>
            <Search/>
            </div>
            <div className='header__right'>
               <div className='header__items'>Support</div> 
               <div className='header__items'>FAQ</div>
               <div className='header__items notification__badge'><Badge/></div> 
               <div className='user__name'>
                   <div className='user__welcome'>Hello</div>
                   <div className='user__fullname'>Adeyemi Adekorede</div>
                   </div> 
               <div className='header__items'><Avatar/></div> 
            </div>

        </div>
    );
};

export default header;