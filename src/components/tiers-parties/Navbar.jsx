import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/img/logo use.jpg';

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <header className="p-2 d-flex justify-content-between align-items-center text-white" id='haut'>
            <div className="d-flex align-items-center">
                <a href="/La-marche-c-est-l-pied">
                    <img src={logo} alt="" height={150} className="rounded-circle" />
                </a>
                <h1
                    className={`text-white fw-bold ms-3 ${
                        isMenuOpen ? 'd-none' : 'd-sm-none d-md-block d-none d-sm-block'
                    }`}
                >
                    La marche c’est l’pied
                </h1>
            </div>
            <nav className="w-50 fs-5 navbar navbar-expand-lg">
                <button
                    className="navbar-toggler text-white"
                    type="button"
                    onClick={toggleMenu}
                >
                    <span className="navbar-toggler-icon text-white"></span>
                </button>
                <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
                    <ul className="navbar-nav d-flex flex-column flex-lg-row w-100 justify-content-evenly">
                        <li className="nav-item">
                            <NavLink end to="/La-marche-c-est-l-pied" className="nav-link text-white">
                                Accueil
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/parcours" className="nav-link text-white">
                                Parcours
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/evenements" className="nav-link text-white">
                                Evenements
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/a_propos" className="nav-link text-white">
                                A propos
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/modalites_inscription"
                                className="nav-link text-white"
                            >
                                S&apos;inscrire
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
