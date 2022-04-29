import React from 'react';
import { useState, useEffect } from 'react';

import RandomCountry from './RandomCountry'
import './Country.css'

 const Country =() =>{

 const [countryData, setCountryData] = useState([]);
   const [country, setCountry] = useState({});
   
   const selectCountry = () => {
     let i = Math.floor(Math.random() * countryData.length)
     setCountry(countryData[i])
     console.log(country)
   }

const getCountry = () => {
 fetch(`https://countries-mustafa-api.herokuapp.com/countries/all`)
 .then((response) => response.json())
.then(data => setCountryData(data))
  
  };
  useEffect(() => {
    getCountry();
  }, []);

  
  return (
    <div>
      
      <div className="countryName">
      
      </div>
      <button className='button' onClick={selectCountry} id="button">Random Country</button>
      <RandomCountry country={country}/>
    </div>
  );
}
export default Country