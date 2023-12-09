import React from 'react'
import { useState,useEffect } from 'react'
import schoolInfos from '../../data/schoolData'
import HorizontalSchoolCard from '../cards/HorizontalSchoolCard'

function Horizonta_school_cards_container_search_page(props) {
  const [loop,setLoop] = useState(3)
    var schoolInfo = schoolInfos.slice(0,loop)
    const dynamicRegex = new RegExp('^'+props.condition)

    const cards = schoolInfo.map((e,i)=>{
        if(dynamicRegex.test(e.abbreviation.toLowerCase())){
            return(
                <HorizontalSchoolCard title={e.title}  image={e.imageLink} abbs = {e.abbreviation} description= {e.description.slice(0,90)} />
    
            )
        }


    })
    useEffect(
        ()=>
        {
            setLoop(20)
        },[]
    )
    return (

        <>
            <div class="horizontal-school-card-container">
                {cards}
            </div>
        </>
    )
}

export default Horizonta_school_cards_container_search_page