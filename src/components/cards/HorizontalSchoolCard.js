import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PostPage from '../Post/postPage'

function HorizontalSchoolCard(props) {
    let style1 = {
        width: "100%", border: "solid 0.5px #EF9C14"
    }
    let style2 = {
        color: " #EF9C14"
    }
    let style3 = {
        transform: "scale(0.9)"
    }
    return (
        <>
            <motion.div initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}

                transition={{ duration: 0.3 }}
                className="horizontal-school-card">
                <div className="image">
                    <img src={props.image} alt="" />

                </div>
                <div className="body-card">
                    <div className="text">
                        <span>{

                            props.abbs


                        }</span>
                        <p>{props.description} . . .</p>
                    </div>
                    <div className="" style={style1}></div>
                    <div className="card-foter">
                        <label for="" style={style3}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#EF9C14"
                                className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path
                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                            4.5
                        </label>
                        <label for="" style={style2}>
                        <Link to="/posts">Suivire</Link >

                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                <path
                                    d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                            </svg>
                        </label>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default HorizontalSchoolCard