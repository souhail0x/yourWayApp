import React, { useEffect, useState } from 'react'
import HorizontalSchoolCard from '../cards/HorizontalSchoolCard'
import schoolInfos from '../../data/schoolData'
function Horizonta_school_cards_container(props) {
    const [loop,setLoop] = useState(3)
    var schoolInfo = schoolInfos.slice(0,loop)

    const cards = schoolInfo.map((e,i)=>{
        return(
            <HorizontalSchoolCard title={e.title}  image={e.imageLink} abbs = {e.abbreviation} description= {e.description.slice(0,90)} />

        )


    })
    useEffect(
        ()=>
        {
            setLoop(props.loop)
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

export default Horizonta_school_cards_container