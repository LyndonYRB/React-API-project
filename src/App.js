// import React from 'react';
// import { useState } from 'react';
import "./App.css";
// import Background from './Background';
import Country from "./Country";
// import Info from './Info';
// import Gps from './Gps';


const App = () => {
  return (
    <div className='body'>
      <h1 className='title'>Random Country Generator</h1>
       <Country />
     {/* <Background />
      <Gps />
      <Info /> */}


    </div>
  );
}

export default App;
