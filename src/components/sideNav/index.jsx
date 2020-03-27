import React from 'react';
import './index.css';

const SideNav = (props) => {
  let template = null;
  const { items } = props;
  const showItem = (items) => items.map((item, i) => (
    <div key={i} className={item.active ? 'options options--focus' : 'options'} onClick={item.onclick}>
      <img className="option__icon" src={item.imgurl} alt="card img" />
      <span className="item__name">{item.text}</span>
    </div>
  ));


  switch (props.type) {
    case 'dashboard':
      template = showItem(items);
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

export default SideNav;