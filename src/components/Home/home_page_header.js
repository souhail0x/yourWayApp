import React from 'react'

function Home_page_header() {
    return (
        <>
            <div className="header">
                <div className="header-left">
                    <div onclick="toProfile()" className="profile-image">
                        <img src="../images/illustrations/peeps-avatar-alpha.png" alt="" />


                    </div>

                    <div>
                        <p className="welcome">Bienvenue de retour</p>
                        <p className="username">User Name</p>
                    </div>
                </div>
                <div className="header-right">
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>


                </div>

            </div>
        </>
    )
}

export default Home_page_header