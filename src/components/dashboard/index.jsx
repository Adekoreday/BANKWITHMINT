import React, { Component } from 'react';
import NotFound from '../notfound';
import SideNav from '../sideNav';
import AllPayments from '../../images/svg/allOrder.svg';

import './index.css';

class UserDashBoard extends Component {
    state={
      settings: {
        accountsDisplay: true,
        ProfileDisplay: false,
        AboutDisplay: false,
        NewStaffDisplay: false,
        AllAccountDisplay: false,
        TransactionDisplay: false,
        AnalyticsDisplay: false,
        ActivateDisplay: false
      }
    };
  
    toggleState = (data) => {
      const newState = {
        accountsDisplay: false,
        ProfileDisplay: false,
        AboutDisplay: false,
        NewStaffDisplay: false,
        AllAccountDisplay: false,
        TransactionDisplay: false,
        AnalyticsDisplay: false,
        ActivateDisplay: false,
        ...data
      };
      this.setState({
        settings: newState
      });
    }
  
    showAccount = () => {
      this.toggleState({ accountsDisplay: true });
    }
  
    showProfile =() => {
      this.toggleState({ ProfileDisplay: true });
    }
  
    showTransaction =() => {
      this.toggleState({ TransactionDisplay: true });
    }
  
    showAbout = () => {
      this.toggleState({ AboutDisplay: true });
    }
  
    showNewStaff = () => {
      this.toggleState({ NewStaffDisplay: true });
    }
  
    showAllAccount = () => {
      this.toggleState({ AllAccountDisplay: true });
    }
  
    showAnalytics = () => {
      this.toggleState({ AnalyticsDisplay: true });
    }
  
    showActivates = () => {
      this.toggleState({ ActivateDisplay: true });
    }
  
    render() {
      const {
        accountsDisplay, ProfileDisplay, AboutDisplay, AllAccountDisplay,
        AnalyticsDisplay, ActivateDisplay, NewStaffDisplay, TransactionDisplay
      } = this.state.settings;
      return (
        <div className="dashboard">
          <div className="user-aside">
        <div>Logo</div> 
    <SideNav
    type="dashboard"
    items={[
      {
        text: 'Accounts',
        style: 'NavItem',
        active: accountsDisplay,
        onclick: this.showAccount,
        imgurl: AllPayments
      },      {
        text: 'Accounts',
        style: 'NavItem',
        active: ActivateDisplay,
        onclick: this.showActivates,
        imgurl: AllPayments
      }
    ]}
       />
          </div>
          <div className="user_dashboard">
            {accountsDisplay === true && <div></div>}
            {ProfileDisplay === true && (<NotFound/>)}
            {AboutDisplay === true && <NotFound/>}
            {AllAccountDisplay === true && <NotFound/>}
            {TransactionDisplay === true && <NotFound/>}
            {ActivateDisplay === true && <NotFound/>}
            {AnalyticsDisplay === true && <NotFound/>}
          </div>
        </div>
      );
    }
  }
  
  export default UserDashBoard;