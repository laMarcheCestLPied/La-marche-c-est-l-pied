import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import Bouton from '../components/utils-components/Bouton';
import datas from '../data/parcours.json';
import { currentDate } from '../components/services/currentDate';

const Accueil = () => {
    const [distanceTotal, setDistanceTotal] = useState(0);
    useEffect(() => {
        document.body.setAttribute('class', 'overflow-hidden');
        return () => {
            document.body.removeAttribute('class');
        };
    }, []);

    useEffect(() => {
        const calculatedDistance = datas.reduce(
            (total, data) => total + data.distance,
            0,
        );
        setDistanceTotal(calculatedDistance);
    }, []);

    return (
        <div id="accueil">
            <h3 className="bg-success-subtle text-center">
                {distanceTotal}km ont déjà été parcourus depuis janvier 2023 !
            </h3>

            <figure className="position-absolute top-50 start-50 translate-middle d-flex">
                <NavLink to="/La-marche-c-est-l-pied/modalites_inscription" className="me-5">
                    <Bouton text="S'inscrire" className={`text-white fs-4 ${currentDate === "31-10" ? "bg-orange" : "bg-green"}`} />
                </NavLink>
                <NavLink to="/La-marche-c-est-l-pied/parcours" className="nav-link mx-5">
                    <Bouton
                        text="Voir les parcours"
                        className="btn-primary text-white fs-4 "
                    />
                </NavLink>
                <NavLink to="/La-marche-c-est-l-pied/contact" className="ms-5">
                    <Bouton text="Nous contacter" className={`text-white fs-4 ${currentDate === "31-10" ? "bg-orange" : "bg-green"}`} />
                </NavLink>
            </figure>
        </div>
    );
};

export default Accueil;
