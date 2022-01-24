import './Menu.css';
import React from 'react';
import MenuItem from './MenuItem';
import {Link} from 'react-router-dom'

function Menu() {
  return(
<div className="menu__overlay">
      <div className="menu__hidden">
      <MenuItem title='Skyline GT-R-R32'/>
      <MenuItem title='Skyline GT-R-R33'/>
      <MenuItem title='Skyline GT-RM Spec-R34'/>
      <MenuItem title='C>Nissan GT-R R35'/>
      <Link to='/login'>
      <MenuItem title='Nissan Account'/>
      </Link>
      <MenuItem title='Purchase'/> </div>
      <MenuItem title='Test Drive'/>
      <MenuItem title='Find us'/>
      <MenuItem title='Support'/>
      <MenuItem title='India'/>
      </div>

  )
}

export default Menu;
