import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import HomePage from '../Home/HomePage'
import Profile from '../Profile/profileContainer'
import CategoriePage from '../categories/categoriesPage'
import SearchPage from '../searchPage/searchPage'
import PostPage from '../Post/postPage'
function Navbar() {
    return (
        <>
            <BrowserRouter>
                <nav className="nav nav--icons">
                    <ul>
                        <li>
                            <Link to="/home">
                                <svg className="icon icon-home" viewBox="0 0 24 24" width="24" height="24">
                                    <path fill="currentColor"
                                        d="M21.6 8.2l-9-7c-0.4-0.3-0.9-0.3-1.2 0l-9 7c-0.3 0.2-0.4 0.5-0.4 0.8v11c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3v-11c0-0.3-0.1-0.6-0.4-0.8zM14 21h-4v-8h4v8zM20 20c0 0.6-0.4 1-1 1h-3v-9c0-0.6-0.4-1-1-1h-6c-0.6 0-1 0.4-1 1v9h-3c-0.6 0-1-0.4-1-1v-10.5l8-6.2 8 6.2v10.5z">
                                    </path>
                                </svg>
                                <span>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/categories">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <rect x="3" y="3" width="7" height="7"></rect>
                                    <rect x="14" y="3" width="7" height="7"></rect>
                                    <rect x="3" y="14" width="7" height="7"></rect>
                                    <rect x="14" y="14" width="7" height="7"></rect>
                                </svg>

                                <span>categories</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/search">
                                <svg className="icon icon-search" viewBox="0 0 24 24" width="24" height="24">
                                    <path fill="currentColor"
                                        d="M21.7 20.3l-3.7-3.7c1.2-1.5 2-3.5 2-5.6 0-5-4-9-9-9s-9 4-9 9c0 5 4 9 9 9 2.1 0 4.1-0.7 5.6-2l3.7 3.7c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.4 0.4-1 0-1.4zM4 11c0-3.9 3.1-7 7-7s7 3.1 7 7c0 1.9-0.8 3.7-2 4.9 0 0 0 0 0 0s0 0 0 0c-1.3 1.3-3 2-4.9 2-4 0.1-7.1-3-7.1-6.9z">
                                    </path>
                                </svg>
                                <span>Search</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/profile">
                                <svg className="icon icon-profile" viewBox="0 0 24 24" width="24" height="24">
                                    <g fill="currentColor">
                                        <path
                                            d="M16 14h-8c-2.8 0-5 2.2-5 5v2c0 0.6 0.4 1 1 1s1-0.4 1-1v-2c0-1.7 1.3-3 3-3h8c1.7 0 3 1.3 3 3v2c0 0.6 0.4 1 1 1s1-0.4 1-1v-2c0-2.8-2.2-5-5-5z">
                                        </path>
                                        <path
                                            d="M12 12c2.8 0 5-2.2 5-5s-2.2-5-5-5-5 2.2-5 5 2.2 5 5 5zM12 4c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3z">
                                        </path>
                                    </g>
                                </svg>
                                <span>Profile</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path='/home' element={<HomePage />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/search' element={<SearchPage />} />
                    <Route path='/categories' element={<CategoriePage />} />
                    <Route path='/posts' element={<PostPage />} />
                    <Route path='/' element={<HomePage />} />

                </Routes>

            </BrowserRouter>

        </>
    )
}

export default Navbar