import React from 'react'
import Search_container from '../inputs/search_container'
import Horizonta_school_cards_container from '../Home/Horizonta_school_cards_container';
import Ctegories_container from '../Home/ctegories_container';

import { useEffect } from 'react';
import { useState } from 'react';

function CategoriePage() {
  const [cards, setCards] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((res) => res.json())
      .then((data) => setCards(data))
  })
  return (
    <>
      <div style={{width:'100%',position:'fixed',backgroundColor:'white',padding:'10px 5%',zIndex:'100',fontSize:'18px',fontWeight:'500'}} className="hook">
        Categories
      </div>
      <div className="home-page-container">
        <br/>
        <br/>

        <Ctegories_container loops={10} />
        <br/>
        <br/>


      </div>

      <div className='categories-container-component'>


        <br />
        <br />
        <br />







      </div>

    </>
  )
}

export default CategoriePage