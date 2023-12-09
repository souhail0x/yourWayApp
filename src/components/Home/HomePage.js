import React from 'react'
import Home_page_header from './home_page_header'
import Search_container from '../inputs/search_container'
import Scool_cards_sliders from '../sliders/scool_cards_sliders'
import Ctegories_container from './ctegories_container'
import Horizonta_school_cards_container from './Horizonta_school_cards_container'
import Navbar from '../NavBar/Navbar'
import { Link } from 'react-router-dom'
function HomePage() {
    const style1 = {
        paddingTop: "17px", marginBottom: "10px"
    }
    return (
        <>
            <div className="home-page-container">
                <Home_page_header />
                <p className="first-title">
                    Trouvez votre école de rêves
                </p>
                <Search_container />
                <div className="hook">
                    Populaires
                    <Link to="/news">Voir tout</Link>
                </div>
                <Scool_cards_sliders />
                <div className="hook">
                    Catégories
                    <a href="">Voir tout</a>

                </div>
                <Ctegories_container loops = {4} />
                <div className="hook" style={style1}>
                    Récemment ajoutés
                    <a href="">Voir tout</a>
                </div>
                <Horizonta_school_cards_container loop={4}/>
                

            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            


        </>

    )
}

export default HomePage