import './Menu.css';
import React from 'react';
import MenuItem from './MenuItem';

function Menu() {
  return(
<div className="menu__overlay">
      <div className="menu__hidden">
      <MenuItem title='History'/>
      <MenuItem title='Specifications'/>
      <MenuItem title='Features'/>
      <MenuItem title='Customize'/>
      <MenuItem title='Nissan Account'/>
      <MenuItem title='Purchase'/> </div>
      <MenuItem title='Test Drive'/>
      <MenuItem title='Find us'/>
      <MenuItem title='Support'/>
      <MenuItem title='India'/>
      </div>

  )
}

export default Menu;
