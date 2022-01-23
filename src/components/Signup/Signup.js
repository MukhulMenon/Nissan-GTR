import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import './Signup.css';
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined'
import ButtonPrimary from '../Button/ButtonPrimary';
import ButtonSecondary from '../Button/ButtonSecondary';
import { auth } from '../../firebase/firebase';
import { login } from '../../features/userSlice';

function Signup() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [FName,setFName]=useState('')
    const [LName,setLName]=useState('')
    const dispatch = useDispatch()
    const history = useHistory()

    const signUp =(e) =>{
        if(!FName) {
            return alert('Please enter a First Name')
        }
        if(!LName) {
            return alert('Please enter a Last Name')
        }
        auth.createUserWithEmailAndPassword(email,password).then((userAuth)=>{
            userAuth.user.updateProfile({
                displayName: FName,
            }).then(()=>{
                dispatch(
                    login({
                    email:userAuth.user.email,
                    uid:userAuth.user.uid,
                    displayName: FName,
                })
                )
                history.push('/nissanAccount')
            })
        })
        .catch((error)=>alert(error.message))
    }

  return <div className="signup">
        <div className="signup__header">
          <div className="signup__logo">
              <Link to ='/'>
              <img src="https://www.carlogos.org/car-logos/nissan-logo-2020-black.png" alt="" />
              </Link>
          </div>
          <div className="signup__language">
              <LanguageOutlinedIcon /><span>en-US</span>
         </div>
      </div>
      <div className="signup__info">
          <h1>Create Account</h1>
          <form className="signup__form">
            <label htmlFor="FName">First Name</label>
            <input type="text" id ='fName' value ={FName} onChange={(e)=> setFName(e.target.value)} />
            <label htmlFor="LName">Last Name</label>
            <input type="text" id ='lName' value ={LName} onChange={(e)=> setLName(e.target.value)} />
            <label htmlFor="email">Email Address</label>
            <input type="email" id ='email' value ={email} onChange={(e)=> setEmail(e.target.value)} />
            <label htmlFor="password">Password</label>
            <input type="password" id ='password' value ={password} onChange={(e)=> setPassword(e.target.value)} />
            <ButtonPrimary name='Create Account' type="submit" onClick={signUp} />
          </form>
          <div className="login__divider">
              <hr /> <span> OR </span><hr />
          </div>
          <Link to="/login">
              <ButtonSecondary name='Sign In'/>
          </Link>
      </div>
  </div>;
}

export default Signup;
