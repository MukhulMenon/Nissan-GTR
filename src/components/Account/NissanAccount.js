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

      <Link to ='purchase'>Purchase</Link>
      <div className="nissanAccount__menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
      {isMenuOpen ? <CloseIcon className="nissanAccount__close"/> : <MenuIcon/>}
      </div>
    </div>
    </div>
    <div className="nissanAccount__info">
        <div className="nissanAccount__person">
            <h4>
              User Details
            </h4>
        </div>
        <div className="nissanAccount__infoRight">
            <Link to='/'>Home</Link>

            
        </div>
    </div>
    <div className="nissanAccount__form">
    <div className="nissanAccount__user">
    <label>User Name: </label> <h1>{user?.displayName} </h1>
    <label>User ID: </label> <h1>{user?.uid } </h1>
    <label>Email ID: </label> <h1>{user?.email } </h1>
    <div className="nissanAccount__actions">
    <Link to='/login'><button className="nissanAccount__login">Reset Password</button></Link>
    <Link onClick={logoutOfApp}><button className="nissanAccount__logout">Logout</button></Link>
    </div>
    </div>
    </div>
  </div>
}

export default NissanAccount;
