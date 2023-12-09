import React from 'react'
import { useState, useEffect } from 'react'
import Categorie from '../cards/categorie'
function Ctegories_container(props) {
    const [cards, setCards] = useState([])
    const [loops,setLoops] = useState(props.loops)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then((res) => res.json())
            .then((data) => setCards(data.slice(0, loops)))
    })
    let card = cards.map((ele, index) => {
        ele.thumbnailUrl = "https://source.unsplash.com/random"

        return <Categorie key={index} image={ele.thumbnailUrl} />


    })

    return (
        <>
            <div className="categories-container">
                {
                    card
                }









            </div>
        </>
    )
}

export default Ctegories_container