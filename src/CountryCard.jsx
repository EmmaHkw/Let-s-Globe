import React from 'react';
import "./screens/comments.js";

const CountryCard = ({country:{COUNTRY, CAPITAL, LANGUAGE, CURRENCY, POPULATION, IMAGE}}) => {
    return(
        
        <div className='country' key={COUNTRY}>
            <div>
                <p>Capital: {CAPITAL}</p>
            </div>
            <div>
                <img src={IMAGE !== "N/A" ? IMAGE : "https://via.placeholder.com/400"} alt={COUNTRY} />
            </div>
        
            <div>
                <h3>Language: {LANGUAGE}</h3>
                <h3>Currency: {CURRENCY}</h3>
                <h3>Population: {POPULATION}</h3>
                <a class="btn btn-primary" href="\comments">Learn More!</a> 
            </div>
        </div>
    
    );
}

export default CountryCard;