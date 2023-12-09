import React from 'react'
import { motion } from 'framer-motion'

function Categorie(props) {
    return (
        <>
            <motion.div initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                
                transition={{ duration: 0.3 }} key={props.key} class="categorie">
                <img src={props.image} alt="" />

                <div class="layer">
                    <span>Université Publiques</span>
                </div>

            </motion.div>
        </>
    )
}

export default Categorie