import React ,{useState} from 'react';
import Header from './components/Header/Header.js';
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom'
import './App.css';
import Menu from './components/Menu/Menu.js';
import Hero from './components/Hero/Hero.js';

function App() {
  const [isMenuOpen,setIsMenuOpen] = useState(false)

  return (
    <Router>
     <div className="App">
       <Switch></Switch>
     <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
      {isMenuOpen && <Menu />}
      <Hero />
      </div>
      </Router>
      
  )
}

export default App;
