import React from 'react';
import { NavLink } from 'react-router-dom';
import Bouton from './Bouton';

const CardProchainement = ({ data }) => {

    return (
        <>
            <div className="d-flex justify-content-between mx-5">
                <h5>Lieu : {data.lieu}</h5>
                <h5>Le {data.date}</h5>
                <NavLink to="/La-marche-c-est-l-pied/contact" className="ms-5">
                    <Bouton text="Nous contacter" className="bg-green text-white fs-4 " />
                </NavLink>
            </div>
        </>
    );
};

export default CardProchainement;
