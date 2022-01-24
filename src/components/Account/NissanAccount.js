import React from 'react';
import './NissanAccount.css';
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../../features/userSlice';
import Car from '../Car/Car';
import { auth } from '../../firebase/firebase';
import { useHistory } from 'react-router-dom';

function NissanAccount({isMenuOpen,setIsMenuOpen}) {
const user =useSelector(selectUser)
const dispatch=useDispatch()
const history=useHistory()

const logoutOfApp =()=>{
auth.signOut().then(()=>{
  dispatch(logout())
  history.push('/')
}).carch((error)=>alert(error.message))
}

  return <div className="nissanAccount">
    <div className="nissanAccount__header">
      <div className="nissanAccount__logo">
          <Link to ='/'>
          <img src="https://www.carlogos.org/car-logos/nissan-logo-2020-black.png" alt="" />
          </Link>
      </div>
    <div className="nissanAccount__links">
      <Link to =''>Skyline GT-R - R32</Link>
      <Link to =''>Skyline GT-R - R33</Link>
      <Link to =''>Skyline GT-R M Spec - R34</Link>
      <Link to =''>Nissan GT-R - R35</Link>
      <Link to =''>Purchase</Link>
      <div className="nissanAccount__menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
      {isMenuOpen ? <CloseIcon className="nissanAccount__close"/> : <MenuIcon/>}
      </div>
    </div>
    </div>
    <div className="nissanAccount__info">
        <div className="nissanAccount__person">
            <h4>
              {user?.displayName +"'s" } Dashboard
            </h4>
        </div>
        <div className="nissanAccount__infoRight">
            <Link to='/'>Home</Link>
            <Link to='/nissanAccount'>Account</Link>
            <Link onClick={logoutOfApp}>Logout</Link>
        </div>
    </div>
    <div className="nissanAccount__car">
        <Car imgSrc='https://cdn.wallpapersafari.com/28/76/1jZY35.jpg' model='Skyline GT-R - R32' />
        <Car imgSrc='http://speedhunters-wp-production.s3.amazonaws.com/wp-content/uploads/2020/02/11074550/DSC01867-2.jpg' model='Skyline GT-R - R33'  testDrive/>
        <Car imgSrc='https://i.pinimg.com/originals/1c/65/d2/1c65d22329375e4b3f94e17561d86a88.jpg' model='Skyline GT-R M Spec - R34' title='model3' />
        <Car imgSrc='https://www.motortrend.com/uploads/sites/5/2020/08/2021-Nissan-GT-R-NISMO-front-three-quarter-motion.jpg?fit=around%7C875:492' model='Nissan GT-R - R35' testDrive/>
    </div>
  </div>
}

export default NissanAccount;
