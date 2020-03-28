import React from 'react';
import dropdownImg from '../../images/svg/dropdown.svg'
import './index.css';

const showReconcilled = () => (
    <div class='status__container'>
    <div className="reconcilled">
         <span class="dot reconcilled__dot"></span> <span>Pending</span>
    </div>
    <img className='dropdownImg' src={dropdownImg} alt='dropdown'></img>
    </div>
  );
const showPending = () => (
    <div class='status__container'>
    <div className="pending">
         <span class="dot pending__dot"></span> <span>Pending</span>
    </div>
    <img className='dropdownImg' src={dropdownImg} alt='dropdown'></img>
    </div>

  );
const showUnReconcilled = () => (
        <div class='status__container'>
        <div className="unreconcilled">
             <span class="dot unreconcilled__dot"></span> <span>Pending</span>
        </div>
        <img className='dropdownImg' src={dropdownImg} alt='dropdown'></img>
        </div>
  );

const Status = (props) => {
    let template = null;
    const {status} = props;
    switch (status) {
        case 'reconcilled':
          template = showReconcilled();
          break;
        case 'pending':
          template = showPending();
          break;
        case 'unreconcilled': 
            template = showUnReconcilled()
          break;
        default:
          template = null;
      }
      return (
        <div>
          {template}
        </div>
      );
};

export default Status;