import React ,{useState} from 'react';
import {useSelector} from 'react-redux'
import Header from './components/Header/Header.js';
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom'
import './App.css';
import Menu from './components/Menu/Menu.js';
import Hero from './components/Hero/Hero.js';
import Login from './components/Login/Login.js';
import { selectUser } from './features/userSlice.js';
import Signup from './components/Signup/Signup.js';

function App() {
  const user=useSelector(selectUser)
  const [isMenuOpen,setIsMenuOpen] = useState(false)

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
         <Route>
           
         </Route>
       </Switch>
      </div>
      </Router>
  )
}

export default App;
