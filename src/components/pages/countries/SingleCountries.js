import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import './Countries.css';

const SingleCountries = () => {

    const {code} = useParams();
    const [country, setCountry] = useState(null);
    useEffect(() => {
                fetch('https://restcountries.com/v3.1/alpha/'+ code)
                .then(response => response.json())
                .then(data => setCountry(data[0]))
        } , [code]
    );
    if(!country) return <p>Učitavanje.....</p>;

    return (
        <div className="container single-post">
            <div className="row">
                <div className="col-md-10 m-auto">
                    <h1>{country.name.common}</h1>
                    <p><strong>Region:</strong> {country.region}</p>
                    <p><strong>Population:</strong> {country.population}</p>
                    <p><strong>Capital:</strong> {country.capital}</p>
                    <p><strong>Languages:</strong> {Object.values(country.languages).join(', ')}</p>
                    <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
                    <iframe src={`https://maps.google.com/maps?q=${country.latlng[0]},${country.latlng[1]}&z=4&output=embed`} 
                    width="100%" height="300" title={`Map of ${country.name.common}`}></iframe>
                </div>
            </div>
        </div>
    );
};

export default SingleCountries;