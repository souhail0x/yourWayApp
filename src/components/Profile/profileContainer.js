import React from 'react'
import { motion } from 'framer-motion'
import ProfileForm from './ProfileForm'

function Profile() {
    return (
        <>
            <motion.div  class="profile-page-container">
                <ProfileForm />
            </motion.div>
            <br />
            <br />
            <br />
            <br />
        </>
    )
}

export default Profile