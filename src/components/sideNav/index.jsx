import React from 'react';
import './index.css';

const SideNav = (props) => {
  let template = null;
  const { items } = props;
  const showItem = (items) => items.map((item, i) => (
    <div  key={i} className={item.active ? 'option__item options--focus' : 'option__item'} onClick={item.onclick}>
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
    <div className='side__nav'>
      {template}
    </div>
  );
};

export default SideNav;