import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import ProductCard from "./ProductCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Shop.css';

const SliderProducts = ({ category, length, sectionName, onAddToCart }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/category/${category}?limit=${length}`)
            .then(response => response.json())
            .then(data => setProducts(data.products));
    }, [category, length]);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1024, // For screens smaller than 1024px
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768, // For screens smaller than 768px
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 480, // For screens smaller than 480px
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    };

    return (
        <div className="container">
            <div className="slider-products">
                <h2 className="section-title">{sectionName}</h2>
                <Slider {...settings}>
                    {products.map(product => (
                        <ProductCard onAddToCart={onAddToCart} key={product.id} product={product} />
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default SliderProducts;