import React, { useEffect } from 'react';
import Swiper from 'swiper';
import School_card from '../cards/school_card';

import 'swiper/css';


const Scool_cards_slider = () => {
    useEffect(() => {
        // Initialize Swiper when the component mounts
        const mySwiper = new Swiper('.swiper', {
            // Optional: Add Swiper options here
            slidesPerView: 1.5,
            


            autoplay: {
                delay: 1000, // Autoplay delay in milliseconds
                disableOnInteraction: false,
            },
        });

        // Clean up Swiper instance when the component unmounts
        return () => {
            mySwiper.destroy();
        };
    }, []); // Empty dependency array ensures that this effect runs once on mount

    return (
        <>
            <div className="school-cards-slider">
                <div className="swiper">
                    <div className="swiper-wrapper">
                        {/* Slides */}
                        <School_card />
                        <School_card />
                        <School_card />
                        <School_card />
                        {/* Add more slides as needed */}
                    </div>

                    <div />


                </div>
            </div>
        </>

    );
};

export default Scool_cards_slider;
