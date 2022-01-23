import React,{useState} from 'react';
import { Link ,useHistory } from 'react-router-dom';
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined'
import "./Login.css"
import ButtonPrimary from '../Button/ButtonPrimary';
import ButtonSecondary from '../Button/ButtonSecondary';
import {auth} from '../../firebase/firebase'
import { useDispatch } from 'react-redux';
import {login} from '../../features/userSlice'

function Login() {
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const dispatch = useDispatch()
const history = useHistory()

const signIn=(e) =>{
    e.preventDefault()
    auth.signInWithEmailAndPassword(email,password).then((userAuth) => {
        dispatch(login({
            email: userAuth.user.email,
            uid:userAuth.user.uid,
            displayName: userAuth.user.displayName,
        }))
        history.push('/nissanAccount')
    }).catch((error) => alert(error.message))
}

  return <div className="login">
      <div className="login__header">
          <div className="login__logo">
              <Link to='/'>
              <img src="https://www.carlogos.org/car-logos/nissan-logo-2020-black.png" alt="" />
              </Link>
          </div>
          <div className="login__language">
              <LanguageOutlinedIcon /><span>en-US</span>
         </div>
      </div>
      <div className="login__info">
          <h1>Sign In</h1>
          <form className="login__form">
            <label htmlFor="email">Email Address</label>
            <input type="email" id ='email' value ={email} onChange={(e)=> setEmail(e.target.value)} />
            <label htmlFor="password">Password</label>
            <input type="password" id ='password' value ={password} onChange={(e)=> setPassword(e.target.value)} />
            <ButtonPrimary name='Sign In' type="submit" onClick={signIn} />
          </form>
          <div className="login__divider">
              <hr /> <span> OR </span><hr />
          </div>
          <Link to="/signup">
              <ButtonSecondary name='Create Account'/>
          </Link>
      </div>
  </div>;
}

export default Login;
