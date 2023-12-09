import React from 'react'
import {motion} from 'framer-motion'
function ProfileForm() {
    return (
        <>
            <div  className="top-page-profile-image-container">
                <div className="nav-bar">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="33" viewBox="0 0 40 33" fill="none">
                        <path
                            d="M13.8672 26.6836C13.1797 26.9285 12.3828 26.8125 11.8359 26.3871L0.585938 17.6215C0.210937 17.3315 0 16.9254 0 16.5C0 16.0746 0.210937 15.6686 0.585938 15.3785L11.8359 6.61292C12.3828 6.18753 13.1797 6.07151 13.8672 6.31644C14.5547 6.56136 15 7.1221 15 7.7344V12.375H37.5C38.8828 12.375 40 13.2967 40 14.4375V18.5625C40 19.7034 38.8828 20.625 37.5 20.625H15V25.2657C15 25.8844 14.5547 26.4387 13.8672 26.6836Z"
                            fill="white" />
                    </svg>
                    <span>
                        Profile
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="25" viewBox="0 0 35 35" fill="none">
                        <path
                            d="M17.5008 0C16.118 0 15.0009 0.977539 15.0009 2.1875V3.5C9.29782 4.51172 5.001 8.92773 5.001 14.2188V15.5039C5.001 18.7168 3.64946 21.8203 1.21199 24.2266L0.633872 24.7939C-0.0223691 25.4365 -0.178617 26.3594 0.219815 27.1455C0.618247 27.9316 1.51667 28.4375 2.50104 28.4375H32.5006C33.485 28.4375 34.3756 27.9316 34.7819 27.1455C35.1881 26.3594 35.024 25.4365 34.3678 24.7939L33.7897 24.2266C31.3522 21.8203 30.0007 18.7236 30.0007 15.5039V14.2188C30.0007 8.92773 25.7039 4.51172 20.0008 3.5V2.1875C20.0008 0.977539 18.8836 0 17.5008 0ZM21.0399 33.7217C21.9773 32.9014 22.5008 31.7871 22.5008 30.625H17.5008H12.5009C12.5009 31.7871 13.0243 32.9014 13.9618 33.7217C14.8993 34.542 16.1727 35 17.5008 35C18.8289 35 20.1024 34.542 21.0399 33.7217Z"
                            fill="#FDFAF5" />
                    </svg>

                </div>
                <div className="full-name">
                    Nom Prenom

                </div>
                <span className="name">
                    Utilisateur
                </span>
                <svg className="bottom-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#FDFAF5" fill-opacity="0.2"
                        d="M0,64L60,90.7C120,117,240,171,360,170.7C480,171,600,117,720,85.3C840,53,960,43,1080,69.3C1200,96,1320,160,1380,192L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z">
                    </path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#FDFAF5" fill-opacity="0.2"
                        d="M0,64L60,90.7C120,117,240,171,360,170.7C480,171,600,117,720,85.3C840,53,960,43,1080,69.3C1200,96,1320,160,1380,192L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z">
                    </path>
                </svg>

                <motion.div  className="profile-img">
                    <img src="../images/illustrations/peeps-avatar-alpha.png" alt=""/>

                </motion.div>




            </div>
            <div className="profile-input-container">
                <form action="">
                    <div>
                        <label for="">Nom complet</label>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                            <path
                                d="M15 15C17.2733 15 19.4535 14.2098 21.0609 12.8033C22.6684 11.3968 23.5714 9.48912 23.5714 7.5C23.5714 5.51088 22.6684 3.60322 21.0609 2.1967C19.4535 0.790176 17.2733 0 15 0C12.7267 0 10.5465 0.790176 8.93908 2.1967C7.33163 3.60322 6.42857 5.51088 6.42857 7.5C6.42857 9.48912 7.33163 11.3968 8.93908 12.8033C10.5465 14.2098 12.7267 15 15 15ZM11.9397 17.8125C5.34375 17.8125 0 22.4883 0 28.2598C0 29.2207 0.890625 30 1.98884 30H28.0112C29.1094 30 30 29.2207 30 28.2598C30 22.4883 24.6562 17.8125 18.0603 17.8125H11.9397Z"
                                fill="#EF9C14" />
                        </svg>

                        <input type="text"/>
                    </div>
                    <div>
                        <label for="">Nom Utilisateur</label>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                            <path
                                d="M15 15C17.2733 15 19.4535 14.2098 21.0609 12.8033C22.6684 11.3968 23.5714 9.48912 23.5714 7.5C23.5714 5.51088 22.6684 3.60322 21.0609 2.1967C19.4535 0.790176 17.2733 0 15 0C12.7267 0 10.5465 0.790176 8.93908 2.1967C7.33163 3.60322 6.42857 5.51088 6.42857 7.5C6.42857 9.48912 7.33163 11.3968 8.93908 12.8033C10.5465 14.2098 12.7267 15 15 15ZM11.9397 17.8125C5.34375 17.8125 0 22.4883 0 28.2598C0 29.2207 0.890625 30 1.98884 30H28.0112C29.1094 30 30 29.2207 30 28.2598C30 22.4883 24.6562 17.8125 18.0603 17.8125H11.9397Z"
                                fill="#EF9C14" />
                        </svg>
                        <input type="text"/>
                    </div>
                    <div>
                        <label for="">Numero de telephone</label>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                            <g clip-path="url(#clip0_88_373)">
                                <path
                                    d="M9.01797 1.34545C8.59687 0.328259 7.48672 -0.213147 6.42578 0.0766969L1.61328 1.3892C0.661719 1.6517 0 2.51576 0 3.50013C0 17.0298 10.9703 28.0001 24.5 28.0001C25.4844 28.0001 26.3484 27.3384 26.6109 26.3869L27.9234 21.5744C28.2133 20.5134 27.6719 19.4033 26.6547 18.9822L21.4047 16.7947C20.5133 16.4228 19.4797 16.6798 18.8727 17.429L16.6633 20.1251C12.8133 18.304 9.69609 15.1869 7.875 11.3369L10.5711 9.13295C11.3203 8.52045 11.5773 7.49232 11.2055 6.60092L9.01797 1.35092V1.34545Z"
                                    fill="#EF9C14" />
                            </g>
                            <defs>
                                <clipPath id="clip0_88_373">
                                    <rect width="28" height="28" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <input type="tel"/>
                    </div>
                    <div>
                        <label for="">Mot de passe</label>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                            <g clip-path="url(#clip0_88_365)">
                                <rect width="30" height="30" fill="white" />
                                <path
                                    d="M9.64286 8.4375V11.25H20.3571V8.4375C20.3571 5.84766 17.9598 3.75 15 3.75C12.0402 3.75 9.64286 5.84766 9.64286 8.4375ZM5.35714 11.25V8.4375C5.35714 3.7793 9.67634 0 15 0C20.3237 0 24.6429 3.7793 24.6429 8.4375V11.25H25.7143C28.0781 11.25 30 12.9316 30 15V26.25C30 28.3184 28.0781 30 25.7143 30H4.28571C1.92188 30 0 28.3184 0 26.25V15C0 12.9316 1.92188 11.25 4.28571 11.25H5.35714Z"
                                    fill="#EF9C14" />
                            </g>
                            <defs>
                                <clipPath id="clip0_88_365">
                                    <rect width="30" height="30" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <svg className="eye" xmlns="http://www.w3.org/2000/svg" width="30" height="28" viewBox="0 0 30 28"
                            fill="none">
                            <path
                                d="M15.0001 0.875C10.7918 0.875 7.42198 3.03125 4.96885 5.59766C2.53135 8.14062 0.901143 11.1875 0.13031 13.2793C-0.0415649 13.7422 -0.0415649 14.2578 0.13031 14.7207C0.901143 16.8125 2.53135 19.8594 4.96885 22.4023C7.42198 24.9688 10.7918 27.125 15.0001 27.125C19.2084 27.125 22.5782 24.9688 25.0314 22.4023C27.4689 19.8535 29.0991 16.8125 29.8751 14.7207C30.047 14.2578 30.047 13.7422 29.8751 13.2793C29.0991 11.1875 27.4689 8.14062 25.0314 5.59766C22.5782 3.03125 19.2084 0.875 15.0001 0.875ZM7.5001 14C7.5001 11.7622 8.29028 9.61612 9.6968 8.03379C11.1033 6.45145 13.011 5.5625 15.0001 5.5625C16.9892 5.5625 18.8969 6.45145 20.3034 8.03379C21.7099 9.61612 22.5001 11.7622 22.5001 14C22.5001 16.2378 21.7099 18.3839 20.3034 19.9662C18.8969 21.5486 16.9892 22.4375 15.0001 22.4375C13.011 22.4375 11.1033 21.5486 9.6968 19.9662C8.29028 18.3839 7.5001 16.2378 7.5001 14ZM15.0001 10.25C15.0001 12.3184 13.5053 14 11.6668 14C11.297 14 10.9428 13.9297 10.6095 13.8066C10.323 13.7012 9.98969 13.9004 10.0001 14.2402C10.0157 14.6445 10.0678 15.0488 10.1668 15.4531C10.8803 18.4531 13.6251 20.2344 16.2918 19.4316C18.9584 18.6289 20.5418 15.541 19.8282 12.541C19.2501 10.1094 17.3386 8.47461 15.2136 8.375C14.9116 8.36328 14.7345 8.73242 14.8282 9.06055C14.9376 9.43555 15.0001 9.83398 15.0001 10.25Z"
                                fill="#EF9C14" />
                        </svg>
                        <input type="password" value="salamoalaykom"/>
                    </div>
                    <div>
                        <input type="submit" value="MODIFIER"/>
                    </div>

                </form>

            </div>
        </>
    )
}

export default ProfileForm