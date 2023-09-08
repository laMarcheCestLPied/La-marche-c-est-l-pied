import React, { useEffect, useState } from 'react';

const CardProchainement = ({ data }) => {

    return (
        <>
            <div className="d-flex justify-content-between mx-5">
                <h5>Lieu : {data.lieu}</h5>
                <h5>Le {data.date}</h5>
            </div>
        </>
    );
};

export default CardProchainement;
