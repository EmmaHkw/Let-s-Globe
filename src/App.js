import React, { useState } from 'react';
import data from "./data";
import SearchIcon from "./search.png";
import CountryCard from "./CountryCard";
import Login from "./screens/login";
import Comments from "./screens/comments";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navigate, useNavigate } from "react-router-dom";


function App() {
    
    
    const [searchTerm, setSearchTerm] = useState("");
    const [countries, setCountries] = useState([]);

    const Countries = () => {
        var countries = [];
        for (var d = 0; d < data.length; d++) {
            countries.push(data[d]);
        }
        return (countries);
    };
    console.log(Countries()[0].COUNTRY);

    const searchCountries = async (name) => {
        var searchResult = [];
        for (var c = 0; c < Countries().length; c++) {
            if (Countries()[c].COUNTRY.includes(name)) {
                searchResult.push(Countries()[c]);
            }

        }
        setCountries(searchResult);
    };


    //Get Code and information
    // const options2 = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': '7b88a195d9mshf4a256c9a1ff719p18887fjsn965da0011436',
    //         'X-RapidAPI-Host': 'countries-cities.p.rapidapi.com'
    //     }
    // };
    // fetch('https://countries-cities.p.rapidapi.com/location/country/GB?format=json', options2)
    //     .then(response => response.json())
    //     .then(response => console.log(response))
    //     .catch(err => console.error(err));
    // const searchCountries = async(searchTerm) => {
    // }
    // const searchCountries = (country) => {
    //     setCountries(data.Search);
    // }
    return (
        <div className="App">
            <h1>Let's Globe</h1>
            <div className="search">
                <input value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search for countries" />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchCountries(searchTerm)} />

            </div>
            {countries?.length > 0 ? (
                <div className="container">
                    {countries.map((countryz) => (
                        <CountryCard country={countryz} />
                    ))}
                    
                </div>
            ) : (
                <div className="empty">
                    <h2>No countries found</h2>
                </div>
            )}

    <Router>
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/comments" element={<Comments />} />
      </Routes>
    </div>
  </Router>

  </div>

    );

    // <div classname="app">
    //     <h1>Let's Globe</h1>
    //     <div className="search">
    //         <input value={searchTerm}
    //         onChange={(e) => setSearchTerm(e.target.value)}
    //         placeholder="Search for countries"
    //     />
    //     </div>
    // {countries?.length > 0 ?(
    //     <div className="container">
    //         {countries.map((country) => (
    //             <CountryCard country ={country} />
    //         ))}
    //     </div>
    // ) : (
    //     <div className="empty">
    //         <h2>No counties found</h2>
    //     </div>
    // )}
    // </div>
}



export default App;