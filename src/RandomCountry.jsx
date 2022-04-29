import React from "react";
import './RandomCountry.css'

function RandomCountry({country}) {
  
  return (
  
    <div className="random-country">
      <h1 className="country-name">
        {country.name}
      </h1>
      <a className="image-block" href={`${country.maps?.googleMaps}`} target="_blank" >
        See the map on Google Maps
      </a>
      <div className="info">
        <div>Population: {country.population}</div>
        <div>Capital: {country.capital}</div>
        <div></div> 
        
        
      </div>
      <img className="bing-image" src={country.BingImages[0]} />
      
</div>

)


  
}

export default RandomCountry