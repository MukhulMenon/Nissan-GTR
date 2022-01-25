import React ,{useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import Header from './components/Header/Header.js';
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom'
import './App.css';
import Menu from './components/Menu/Menu.js';
import Hero from './components/Hero/Hero.js';
import Login from './components/Login/Login.js';
import { login, logout, selectUser } from './features/userSlice.js';
import Signup from './components/Signup/Signup.js';
import NissanAccount from './components/Account/NissanAccount.js';
import { auth } from './firebase/firebase.js';
import Purchase from './components/Purchase/Purchase.js';

function App() {
  const user=useSelector(selectUser)
  const [isMenuOpen,setIsMenuOpen] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
        })
        )
      }
      else{
        dispatch(logout())
      }
    })
  },[dispatch])

  return (
    <Router>
     <div className="App">
       <Switch>
         <Route exact path="/">
         <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
            {isMenuOpen && <Menu />}
           <Hero />
         </Route>
         <Route exact path="/login">
            {user ? <Redirect to ='/nissanAccount'/> : <Login />}
         </Route>
         <Route exact path="/signup">
           <Signup />
         </Route>
         <Route exact path='/nissanAccount'>
         {!user ? (<Redirect to ='/login'/>) : (
         <><NissanAccount isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
         {isMenuOpen && <Menu />}
         </>)}
         </Route>
         <Route exact path="/purchase">
         {!user ? (<Redirect to ='/login'/>) : (
         <><Purchase isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
         {isMenuOpen && <Menu />}
         </>)}
         </Route>
       </Switch>
      </div>
      </Router>
  )
}

export default App;
