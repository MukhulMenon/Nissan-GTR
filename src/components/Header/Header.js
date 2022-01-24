import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'

function Header({isMenuOpen,setIsMenuOpen}) {
  return <div className="header">
    <div className="header__logo">
      <Link to='/'>
        <img className='header__logoImg' src="https://www.carlogos.org/car-logos/nissan-logo-2020-black.png"
        alt="logo" />
      </Link>
    </div>
    <div className="header__links">
      <Link to ='/'>Skyline GT-R-R32</Link>
      <Link to ='/'>Skyline GT-R-R33</Link>
      <Link to ='/'>Skyline GT-RM Spec-R34</Link>
      <Link to ='/'>Nissan GT-R R35</Link>
    </div>
    <div className="header__right">
      <Link to ='/' className={isMenuOpen && 'header__link-hidden'}>Purchase</Link>
      <Link to ='/login' className={isMenuOpen && 'header__link-hidden'}>Nissan Account</Link>
      <div className='header__menu' 
      onClick={()=> setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <CloseIcon/> : <MenuIcon/>}
      </div>
    </div>
  </div>;
}

export default Header;
