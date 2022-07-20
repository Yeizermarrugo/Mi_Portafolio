import React, { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import './style/header.css'



const Header = () => {

    const navbar = useRef()

    const clickMenuHam = () => {
        navbar.current.classList.toggle('navbar-open')
    }

    return (
        <header className="header">
            <h1 className="header__title">
                <NavLink to='/'>
                    𝖄𝖊𝖎𝖟𝖊𝖗 𝕸𝖆𝖗𝖗𝖚𝖌𝖔
                </NavLink>
            </h1>
            <div onClick={clickMenuHam} className="header__menuham">
                <i className="fa-solid fa-bars"></i>
            </div>
            <nav ref={navbar} className="navbar">
                <ul className="navbar__list">
                    <li className="navbar__items">
                        <NavLink
                            to='/about'
                            className={({ isActive }) => isActive ? 'navbar__link-active navbar__links' : 'navbar__links'}>
                            <i className="fa-solid fa-user"></i>
                            <p className="navbar__label">About me</p>
                        </NavLink>
                    </li>
                    <li className="navbar__items">
                        <NavLink
                            to='/proyectos'
                            className={({ isActive }) => isActive ? 'navbar__link-active navbar__links' : 'navbar__links'}>
                            <i className="fa-solid fa-store"></i>
                            <p className="navbar__label">Proyectos</p>
                        </NavLink>
                    </li>
                    <li className="navbar__items">
                        <NavLink
                            to='/contact'
                            className={({ isActive }) => isActive ? 'navbar__link-active navbar__links' : 'navbar__links'}>
                            <i className="fa-solid fa-address-book"></i>
                            <p className="navbar__label">Contact me</p>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}


export default Header