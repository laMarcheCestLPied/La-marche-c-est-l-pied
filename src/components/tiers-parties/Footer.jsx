import React from 'react';
import { NavLink } from 'react-router-dom';
import fleche from '../../assets/img/Fleche haut vert.png';
import { currentDate } from '../services/currentDate';

const Footer = () => {
    const annee = new Date().getFullYear();
    return (
        <footer
            className={`p-2 d-flex flex-wrap justify-content-evenly align-items-center position-fixed bottom-0 w-100 ${currentDate === "31-10" ? "bg-orange" : "bg-green"}`}
        >
            <a
                href="https://www.facebook.com/Lamarchecestlepied/?locale=fr_FR"
                target="_blank"
                className="mt-3 mt-sm-0"
                rel="noreferrer"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="currentColor"
                    className="bi bi-facebook text-white"
                    viewBox="0 0 16 16"
                >
                    <path
                        d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                        fill="white"
                    ></path>
                </svg>
            </a>
            <NavLink
                to="/La-marche-c-est-l-pied/contact"
                className="text-white link-light link-underline-opacity-0 link-underline-opacity-100-hover mt-3 mt-sm-0"
            >
                Nous contacter
            </NavLink>

            <div className="text-white text-decoration-none pe-none order-sm-0 order-last mt-3 mt-sm-0">
                Copyright © {annee} La Marche c’est l’pied
            </div>

            <NavLink
                to="/La-marche-c-est-l-pied/mentions_legales"
                className="text-white link-light link-underline-opacity-0 link-underline-opacity-100-hover mt-3 mt-sm-0"
            >
                Mentions légales
            </NavLink>
            <NavLink
                to="/La-marche-c-est-l-pied/modalites_inscription"
                className="text-white link-light link-underline-opacity-0 link-underline-opacity-100-hover mt-3 mt-sm-0"
            >
                S&apos;inscrire
            </NavLink>
            <a href="#haut">
                <img src={fleche} alt="fleche pour remonter vers le haut" height={50} />
            </a>
        </footer>
    );
};

export default Footer;
