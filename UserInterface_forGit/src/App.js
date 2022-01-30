import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Navbar from './Components/Navbar'
import Home from './Components/Pages/Home'
import Termine from './Components/Pages/Termine'
import Faecher from './Components/Pages/Faecher'
import Naturwissenschaften from './Components/Pages/Naturwissenschaften'
import Sprachen from './Components/Pages/Sprachen'
import Kreatives from './Components/Pages/Kreatives'
import Bibliothek from './Components/Pages/Bibliothek'


function App() {
  return (
   <Router>
    <Navbar />
      <Routes>
          <Route path = "/" element = {<Home/>} />
          <Route path = "/termine" exact element = {<Termine/>} />
          <Route path = "/faecher" exact element = {<Faecher/>} />
          <Route path = "/naturwissenschaften" exact element = {<Naturwissenschaften/>} />
          <Route path = "/sprachen" exact element = {<Sprachen/>} />
          <Route path = "/kreativesundsport" exact element = {<Kreatives/>} />
          <Route path = "/bibliothek" exact element = {<Bibliothek/>} />
      </Routes>
   </Router>
   

   
   
  );
}

export default App;
