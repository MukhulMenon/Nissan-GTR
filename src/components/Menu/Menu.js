import './Menu.css';
import React from 'react';
import MenuItem from './MenuItem';
import {Link} from 'react-router-dom'

function Menu() {
  return(
<div className="menu__overlay">
      <div className="menu__hidden">
      <Link to='/login'>
      <MenuItem title='Nissan Account'/>
      </Link>
      <Link to='purchase'>
      <MenuItem title='Purchase'/></Link> </div>
      <MenuItem title='Test Drive'/>
      <MenuItem title='Find us'/>
      <a href="https://github.com/MukhulMenon/Nissan-GTR">
      <MenuItem title='Support'/>
      </a>
      <MenuItem title='India'/>
      </div>

  )
}

export default Menu;
