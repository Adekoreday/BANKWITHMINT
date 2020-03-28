import React, { Component } from 'react';
import NotFound from '../notfound';
import SideNav from '../sideNav';
import Analytics from '../analytics';
import Payment from '../Payment';
import Pagination from '../Pagination';
import TransactionSection from '../TransactionSection';
import AllPaymentsImg from '../../images/svg/allPayments.svg';
import Table from '../Table';
import OverviewImg from '../../images/svg/speedometer.svg';
import ReconciledPayImg from '../../images/svg/reconcilePay.svg';
import UnReconciledPayImg from '../../images/svg/unreconcilePay.svg';
import ManualpayImg from '../../images/svg/manualPay.svg';
import AllOrdersImg from '../../images/svg/allOrder.svg';
import PendingOrdersImg from '../../images/svg/pendingOrder.svg';
import ReconciledOrdersImg from '../../images/svg/reconcileOrder.svg';
import MerchantProfileImg from '../../images/svg/merchantProfile.svg';

import './index.css';

class UserDashBoard extends Component {
  
    render() {
      return (
        <div className="dashboard">
          <div className="user-aside">
        <div className='invoice__generate'>GENERATE INVOICE</div>
        <div className='main'>
            Main
        </div>
    <SideNav
    type="dashboard"
    items={[
      {
        text: 'Overview',
        style: 'NavItem',
        active: true,
        onclick: () => {},
        imgurl: OverviewImg
      }
    ]}
       />        
    <div className='main'>
       Payments
   </div>
    <SideNav
    type="dashboard"
    items={[
      {
        text: 'All Payments',
        style: 'NavItem',
        active: false,
        onclick: () => {},
        imgurl: AllPaymentsImg
      },
      {
        text: 'Reconcilled Payments',
        style: 'NavItem',
        active: false,
        onclick: () => {},
        imgurl: ReconciledPayImg
      },
      {
        text: 'Un - Reconciled Payments',
        style: 'NavItem',
        active: false,
        onclick: () => {},
        imgurl: UnReconciledPayImg
      },
      {
        text: 'Manual Settlement',
        style: 'NavItem',
        active: false,
        onclick: () => {},
        imgurl: ManualpayImg
      }
    ]}
       />
     <div className='main'>
       Orders
   </div>    
    <SideNav
    type="dashboard"
    items={[
      {
        text: 'All Orders',
        style: 'NavItem',
        active: false,
        onclick: () => {},
        imgurl: AllOrdersImg
      },
      {
        text: 'Pending Orders',
        style: 'NavItem',
        active: false,
        onclick: () => {},
        imgurl: PendingOrdersImg
      },
      {
        text: 'Reconciled Orders',
        style: 'NavItem',
        active: false,
        onclick: () => {},
        imgurl: ReconciledOrdersImg
      }
    ]}
       />
    
    <SideNav
    type="dashboard"
    items={[
      {
        text: 'Merchant Profile',
        style: 'NavItem',
        active: false,
        onclick: () => {},
        imgurl: MerchantProfileImg
      }
    ]}
       />  

          </div>
          <div className="user_dashboard">
           <TransactionSection />
            <Analytics />
            <div><Payment /></div>
            <div className='table'><Table /></div>
            <Pagination/>
          </div>
        </div>
      );
    }
  }
  
  export default UserDashBoard;