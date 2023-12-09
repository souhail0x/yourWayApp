import React from 'react'
import { motion } from 'framer-motion'
import Search_container from '../inputs/search_container'
import Horizonta_school_cards_container_search_page from './Horizonta_school_cards_container_search_page'
import { useState } from 'react'
function SearchPage() {
    const [searchValue, setSearchValue] = useState('');
    const handleSearchInputChange = (value) => {
        setSearchValue(value);
    };

    return (
        <>


            <div style={{ position: 'fixed', zIndex: '100', top: '0', margin: '0', backgroundColor: 'white', left: '3.5%', paddingBottom: '10px' }} className='home-page-container'>
                <Search_container onInputChange={handleSearchInputChange} />

                <div className="hook">
                    Populaires
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#EF9C14">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 3h18v2H3V3zm0 4h18v2H3V7zm0 4h18v2H3v-2zm0 4h18v2H3v-2z" />
                    </svg>




                </div>

            </div>



            <div style={{ marginTop: '90px' }} className='home-page-container'>
                <Horizonta_school_cards_container_search_page loops={10} condition={searchValue} />

            </div>
            <br />
            <br />
            <br />






        </>

    )
}

export default SearchPage