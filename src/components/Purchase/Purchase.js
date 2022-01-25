import React from 'react';
import './Purchase.css';
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../../features/userSlice';
import Car from '../Car/Car';
import { auth } from '../../firebase/firebase';
import { useHistory } from 'react-router-dom';
import {Link as LinkS} from 'react-scroll'


function Purchase({isMenuOpen,setIsMenuOpen}) {
const user =useSelector(selectUser)
const dispatch=useDispatch()
const history=useHistory()

const logoutOfApp =()=>{
auth.signOut().then(()=>{
  dispatch(logout())
  history.push('/')
}).carch((error)=>alert(error.message))
}

  return <div className="Purchase">
    <div className="Purchase__header" id="top">
      <div className="Purchase__logo">
          <Link to ='/'>
          <img src="https://www.carlogos.org/car-logos/nissan-logo-2020-black.png" alt="" />
          </Link>
      </div>
    <div className="Purchase__links">
      <LinkS to ='car1' smooth ={true} duration={1000}>Skyline GT-R - R32</LinkS>
      <LinkS to ='car2' smooth ={true} duration={1000}>Skyline GT-R - R33</LinkS>
      <LinkS to ='car3' smooth ={true} duration={1000}>Skyline GT-R M Spec - R34</LinkS>
      <LinkS to ='car4' smooth ={true} duration={1000}>Nissan GT-R - R35</LinkS>
      <Link to ='/nissanAccount'>Account</Link>
      <div className="Purchase__menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
      {isMenuOpen ? <CloseIcon className="Purchase__close"/> : <MenuIcon/>}
      </div>
    </div>
    </div>
    <div className="Purchase__info">
    <div className="Purchase__person">
            <h4>
            Vehicles
            </h4>
        </div>
    </div>
    <div className="Purchase__car">
        <section id='car1'><Car imgSrc='https://cdn.wallpapersafari.com/28/76/1jZY35.jpg' model='Skyline GT-R - R32'  testDrive /></section>
        <section id='car2'><Car imgSrc='http://speedhunters-wp-production.s3.amazonaws.com/wp-content/uploads/2020/02/11074550/DSC01867-2.jpg' model='Skyline GT-R - R33'  testDrive/></section>
        <section id='car3'><Car imgSrc='https://i.pinimg.com/originals/1c/65/d2/1c65d22329375e4b3f94e17561d86a88.jpg' model='Skyline GT-R M Spec - R34' testDrive /></section>
        <section id='car4'><Car imgSrc='https://www.motortrend.com/uploads/sites/5/2020/08/2021-Nissan-GT-R-NISMO-front-three-quarter-motion.jpg?fit=around%7C875:492' model='Nissan GT-R - R35' testDrive/></section>
    </div>
   <div className="Purchase__top">
       <LinkS to='top' smooth ={true} duration={1000}>
       <button> Back to top</button></LinkS>
       </div> 
  </div>
}

export default Purchase;
