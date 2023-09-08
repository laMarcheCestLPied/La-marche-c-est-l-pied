import React, { useEffect, useState } from 'react';

import SatelliteMap from './../components/utils-components/SatelliteMap';
import datas from './../data/parcours.json';

const Details = () => {
    const url = document.location.href;
    const [dataFind, setDataFind] = useState();

    useEffect(() => {
        for (const data of datas) {
            if (url.includes(data.date)) {
                setDataFind(data);
                break;
            }
        }
    }, []);

    function changeFormateDate(oldDate) {
        return oldDate.toString().split('-').reverse().join('/');
    }

    if (dataFind) {
        return (
            <section className="p-3">
                <h1>Détails</h1>
                <figure className="d-flex justify-content-around">
                    <h5>Lieu : {dataFind.lieu}</h5>
                    <h5>Date : {changeFormateDate(dataFind.date)}</h5>
                    <h5>Nombre de randonneurs : {dataFind.nbPersonnes}</h5>
                </figure>

                <div className="d-flex justify-content-center">
                    <div
                        id="carouselExample"
                        className="carousel slide"
                        data-bs-ride="carousel"
                    >
                        <div className="carousel-inner">
                            {dataFind.photos.map((image, index) => (
                                <div
                                    className={`carousel-item ${
                                        index === 0 ? 'active' : ''
                                    }`}
                                    key={index}
                                >
                                    <img
                                        src={`../src/assets/img/${image}`}
                                        className="d-block mx-auto"
                                        alt={`Slide ${index}`}
                                        style={{ maxWidth: '100%', maxHeight: '700px' }}
                                    />
                                </div>
                            ))}
                        </div>
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExample"
                            data-bs-slide="prev"
                        >
                            <span
                                className="carousel-control-prev-icon"
                                aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExample"
                            data-bs-slide="next"
                        >
                            <span
                                className="carousel-control-next-icon"
                                aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className="d-flex justify-content-center mt-5">
                    <SatelliteMap positions={dataFind.positions} />
                </div>
            </section>
        );
    }
};

export default Details;
