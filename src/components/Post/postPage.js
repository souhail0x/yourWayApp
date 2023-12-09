import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import Horizonta_school_cards_container from '../Home/Horizonta_school_cards_container'

function PostPage() {
    const [desc, setDesc] = useState('')
    const [pros, setPros] = useState('')
    const [last, setLast] = useState('')
    const handlExtend = () => {
        desc === '' ? setDesc('extend') : setDesc('')

    }
    const handlExtend2 = () => {
        pros === '' ? setPros('extend') : setPros('')

    }
    const handlExtend3 = () => {
        last === '' ? setLast('extend') : setLast('')

    }

    const variants = {
        hidden: { x: '-100%' },
        visible: { x: 0 },
    }
    const goBack = () => {
        window.history.back();
    };



    return (
        <>
            <motion.div initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ duration: 0.3 }} className="post-container">
                <div className="post-top-header">
                    <div className="svg">
                        <svg onClick={goBack} xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 40 21" fill="none">
                            <path
                                d="M13.8672 20.6836C13.1797 20.9285 12.3828 20.8125 11.8359 20.3871L0.585938 11.6215C0.210937 11.3315 0 10.9254 0 10.5C0 10.0746 0.210937 9.66858 0.585938 9.37855L11.8359 0.61292C12.3828 0.18753 13.1797 0.071514 13.8672 0.316436C14.5547 0.561358 15 1.1221 15 1.7344V6.37503H37.5C38.8828 6.37503 40 7.29671 40 8.43753V12.5625C40 13.7034 38.8828 14.625 37.5 14.625H15V19.2657C15 19.8844 14.5547 20.4387 13.8672 20.6836Z"
                                fill="#EF9C14" />
                        </svg>

                    </div>
                    <div className="svg">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="#EF9C14" height="16" width="16"
                            viewBox="0 0 512 512">
                            <path
                                d="M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z" />
                        </svg>

                    </div>
                </div>
                <div className="top-part">


                    <img src="https://cdn.snrtnews.com/sites/default/files/2022/06/11/dsc_3730-1654975420.jpg" alt=""
                        className="school-image" />

                    <div id="main-content">
                        <div>
                            <input type="checkbox" id="checkbox" />
                            <label for="checkbox">
                                <svg id="heart-svg" viewBox="467 392 58 57" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Group" fill="none" fill-rule="evenodd" transform="translate(467 392)">
                                        <path
                                            d="M29.144 20.773c-.063-.13-4.227-8.67-11.44-2.59C7.63 28.795 28.94 43.256 29.143 43.394c.204-.138 21.513-14.6 11.44-25.213-7.214-6.08-11.377 2.46-11.44 2.59z"
                                            id="heart" fill="#AAB8C2" />
                                        <circle id="main-circ" fill="#E2264D" opacity="0" cx="29.5" cy="29.5" r="1.5" />

                                        <g id="grp7" opacity="0" transform="translate(7 6)">
                                            <circle id="oval1" fill="#9CD8C3" cx="2" cy="6" r="2" />
                                            <circle id="oval2" fill="#8CE8C3" cx="5" cy="2" r="2" />
                                        </g>

                                        <g id="grp6" opacity="0" transform="translate(0 28)">
                                            <circle id="oval1" fill="#CC8EF5" cx="2" cy="7" r="2" />
                                            <circle id="oval2" fill="#91D2FA" cx="3" cy="2" r="2" />
                                        </g>

                                        <g id="grp3" opacity="0" transform="translate(52 28)">
                                            <circle id="oval2" fill="#9CD8C3" cx="2" cy="7" r="2" />
                                            <circle id="oval1" fill="#8CE8C3" cx="4" cy="2" r="2" />
                                        </g>

                                        <g id="grp2" opacity="0" transform="translate(44 6)">
                                            <circle id="oval2" fill="#CC8EF5" cx="5" cy="6" r="2" />
                                            <circle id="oval1" fill="#CC8EF5" cx="2" cy="2" r="2" />
                                        </g>

                                        <g id="grp5" opacity="0" transform="translate(14 50)">
                                            <circle id="oval1" fill="#91D2FA" cx="6" cy="5" r="2" />
                                            <circle id="oval2" fill="#91D2FA" cx="2" cy="2" r="2" />
                                        </g>

                                        <g id="grp4" opacity="0" transform="translate(35 50)">
                                            <circle id="oval1" fill="#F48EA7" cx="6" cy="5" r="2" />
                                            <circle id="oval2" fill="#F48EA7" cx="2" cy="2" r="2" />
                                        </g>

                                        <g id="grp1" opacity="0" transform="translate(24)">
                                            <circle id="oval1" fill="#9FC7FA" cx="2.5" cy="3" r="2" />
                                            <circle id="oval2" fill="#9FC7FA" cx="7.5" cy="2" r="2" />
                                        </g>
                                    </g>
                                </svg>
                            </label>


                        </div>
                    </div>


                </div>
                <div className="middle-part">
                    <div className="shool-info school-name">

                        <div className="svg-container">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="22" viewBox="0 0 20 24" fill="none">
                                <g clip-path="url(#clip0_58_288)">
                                    <path
                                        d="M9.79035 0.0234131C9.92874 -0.00471191 10.0716 -0.00471191 10.21 0.0234131L19.1386 1.89841C19.6386 2.00154 20.0002 2.4656 20.0002 2.99998C20.0002 3.53435 19.6386 3.99841 19.1386 4.10154L15.7145 4.82341V7.49998C15.7145 10.814 13.1564 13.5 10.0002 13.5C6.84392 13.5 4.28589 10.814 4.28589 7.49998V4.82341L2.14303 4.37341V7.42498L2.84392 11.1C2.8841 11.3203 2.83053 11.55 2.6966 11.7234C2.56267 11.8969 2.35731 12 2.14303 12H0.714457C0.500171 12 0.299279 11.9015 0.160886 11.7234C0.0224929 11.5453 -0.0310785 11.3203 0.0135644 11.1L0.714457 7.42498V4.05935C0.29035 3.90466 0.000171497 3.48279 0.000171497 2.99998C0.000171497 2.4656 0.361779 2.00154 0.861779 1.89841L9.79035 0.0234131ZM4.99571 15.3609C5.46446 15.2015 5.96892 15.3797 6.30821 15.7594L9.47785 19.2984C9.7591 19.6125 10.2368 19.6125 10.518 19.2984L13.6877 15.7594C14.027 15.3797 14.5314 15.2015 15.0002 15.3609C17.902 16.3406 20.0002 19.1906 20.0002 22.5609C20.0002 23.3578 19.3841 24 18.6296 24H1.37071C0.616243 24 0.000171497 23.3531 0.000171497 22.5609C0.000171497 19.1906 2.09839 16.3406 4.99571 15.3609Z"
                                        fill="#EF9C14" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_58_288">
                                        <rect width="20" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <h1>Universite Al Akhawayn</h1>




                    </div>
                    <div className="shool-info school-location">
                        <div className="svg-container">

                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="22" viewBox="0 0 18 24" fill="none">
                                <g clip-path="url(#clip0_58_298)">
                                    <path
                                        d="M10.1109 23.4C12.5156 20.3906 18 13.0969 18 9C18 4.03125 13.9688 0 9 0C4.03125 0 0 4.03125 0 9C0 13.0969 5.48438 20.3906 7.88906 23.4C8.46562 24.1172 9.53438 24.1172 10.1109 23.4ZM9 6C9.79565 6 10.5587 6.31607 11.1213 6.87868C11.6839 7.44129 12 8.20435 12 9C12 9.79565 11.6839 10.5587 11.1213 11.1213C10.5587 11.6839 9.79565 12 9 12C8.20435 12 7.44129 11.6839 6.87868 11.1213C6.31607 10.5587 6 9.79565 6 9C6 8.20435 6.31607 7.44129 6.87868 6.87868C7.44129 6.31607 8.20435 6 9 6Z"
                                        fill="#EF9C14" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_58_298">
                                        <rect width="18" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </div>
                        <span>Ifran , Maroc</span>



                    </div>
                    <div className="shool-info school-link">
                        <div className="svg-container">
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="19" viewBox="0 0 25 21" fill="none">
                                <g clip-path="url(#clip0_58_302)">
                                    <path
                                        d="M22.6484 10.9799C24.8555 8.66252 24.8555 4.90959 22.6484 2.5922C20.6953 0.541423 17.6172 0.274822 15.3711 1.96056L15.3086 2.00568C14.7461 2.42814 14.6172 3.24845 15.0195 3.83498C15.4219 4.4215 16.2031 4.56095 16.7617 4.13849L16.8242 4.09338C18.0781 3.15412 19.793 3.30177 20.8789 4.44611C22.1094 5.7381 22.1094 7.8299 20.8789 9.12189L16.4961 13.732C15.2656 15.024 13.2734 15.024 12.043 13.732C10.9531 12.5877 10.8125 10.7871 11.707 9.47463L11.75 9.409C12.1523 8.81838 12.0195 7.99806 11.4609 7.5797C10.9023 7.16135 10.1172 7.2967 9.71875 7.88322L9.67578 7.94885C8.06641 10.3031 8.32031 13.5352 10.2734 15.586C12.4805 17.9033 16.0547 17.9033 18.2617 15.586L22.6484 10.9799ZM2.35156 10.0201C0.144531 12.3375 0.144531 16.0904 2.35156 18.4078C4.30469 20.4586 7.38281 20.7252 9.62891 19.0395L9.69141 18.9944C10.2539 18.5719 10.3828 17.7516 9.98047 17.1651C9.57812 16.5785 8.79688 16.4391 8.23828 16.8615L8.17578 16.9067C6.92188 17.8459 5.20703 17.6983 4.12109 16.5539C2.89062 15.2578 2.89062 13.166 4.12109 11.874L8.50391 7.26799C9.73438 5.97599 11.7266 5.97599 12.957 7.26799C14.0469 8.41232 14.1875 10.2129 13.293 11.5295L13.25 11.5951C12.8477 12.1858 12.9805 13.0061 13.5391 13.4244C14.0977 13.8428 14.8828 13.7074 15.2812 13.1209L15.3242 13.0553C16.9336 10.6969 16.6797 7.46486 14.7266 5.41408C12.5195 3.0967 8.94531 3.0967 6.73828 5.41408L2.35156 10.0201Z"
                                        fill="#EF9C14" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_58_302">
                                        <rect width="25" height="21" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <a href="http://www.aui.ma/en/">http://www.aui.ma/en/</a>


                    </div>
                </div>
                <div className="about-school">
                    <div onClick={handlExtend} className="about-school-top">
                        <h3>Description</h3>
                        {
                            desc === '' ? <>
                                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="10"
                                    viewBox="0 0 320 512">
                                    <path
                                        d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                                </svg>

                            </> :
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" /></svg>

                                </>
                        }


                    </div>
                    {
                        desc == "" ? <></> :
                            <>
                                <hr />
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus deserunt quia vero exercitationem,
                                    nobis aliquid soluta consequatur quidem sed eos libero minus a sequi voluptate rem officiis perspiciatis
                                    accusantium at.
                                </p>
                            </>

                    }

                </div>
                <div className="about-school">
                    <div onClick={handlExtend2} className="about-school-top">
                        <h3>Description</h3>
                        {
                            pros === '' ? <>
                                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="10"
                                    viewBox="0 0 320 512">
                                    <path
                                        d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                                </svg>

                            </> :
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" /></svg>

                                </>
                        }


                    </div>
                    {
                        pros == "" ? <></> :
                            <>
                                <hr />
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus deserunt quia vero exercitationem,
                                    nobis aliquid soluta consequatur quidem sed eos libero minus a sequi voluptate rem officiis perspiciatis
                                    accusantium at.
                                </p>
                            </>

                    }

                </div>
                <div className="about-school">
                    <div onClick={handlExtend3} className="about-school-top">
                        <h3>Description</h3>
                        {
                            last === '' ? <>
                                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="10"
                                    viewBox="0 0 320 512">
                                    <path
                                        d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                                </svg>

                            </> :
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" /></svg>

                                </>
                        }


                    </div>
                    {
                        last == "" ? <></> :
                            <>
                                <hr />
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus deserunt quia vero exercitationem,
                                    nobis aliquid soluta consequatur quidem sed eos libero minus a sequi voluptate rem officiis perspiciatis
                                    accusantium at.
                                </p>
                            </>

                    }

                </div>




                <div className="more-schools">
                    Similaires
                </div>
                <div className='home-page-container'>
                    <Horizonta_school_cards_container loop={4}/>


                </div>


            </motion.div>
            <br />
            <br />
            <br />

        </>

    )
}

export default PostPage