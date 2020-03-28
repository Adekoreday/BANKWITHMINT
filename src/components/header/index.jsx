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
            <Search type='header'/>
            </div>
            <div className='header__right'>
               <div className='header__items'>Support</div> 
               <div className='header__items'>FAQ</div>
               <div className='header__items notification__badge'><Badge/></div> 
               <div className='user__name'>
                   <div className='user__welcome'>Hello</div>
                   <div className='user__fullname'>Adeyemi Adekorede</div>
                   </div> 
               <div className='header__items'><Avatar 
               type='profile'
               img='https://res.cloudinary.com/kaytronics/image/upload/ar_1:1,b_rgb:315387,bo_5px_solid_rgb:ffffff,c_fill,g_auto,q_21,r_max,w_1000/v1585249324/IMG_20191227_110232_357-removebg-preview_copy_oede60.png'/></div> 
            </div>

        </div>
    );
};

export default header;