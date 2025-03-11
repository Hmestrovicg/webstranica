import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Countries.css';

const Countries = () => { 
    const [countries, setCountries] = useState([]);
    useEffect(
        () => {
            fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then((data) => setCountries(data))
            }, [] 
        )
    if (!countries) return <p>Loading...</p>

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
    };
    return (
        <>
            <div className="container countries">
                <h1>Countries</h1>

                <Slider {...settings}>
                    {countries.map((country) => (
                        <div className="crt" key={country.cca3}>
                            <Link to={"/countries/" + country.cca3}>
                                {country.name.common}
                            </Link>
                    </div>
                    ))}
             </Slider>
                
            </div>
        </>
    );
};

export default Countries;