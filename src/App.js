// ./src/App.js

import React from 'react';
import Navbar from './components/Navbar'; // Importing the default export
import './App.css';
import { Banner } from './components/Banner';

import 'bootstrap/dist/css/bootstrap.min.css';
// import { Plans } from './components/Plans';
import {Projects} from './components/Projects';

import { Contact } from './components/Contact';
// import { Fotter } from './components/Fotterr';


function App() {
  return (
    <div className="App">
      <Navbar /> {/* Using the Navbar component */}
      <Banner /> 
      {/* <Plans /> */}
      <Projects />
      <Contact />
       {/* <Fotter/> */}


    </div>
  );
}

export default App;
