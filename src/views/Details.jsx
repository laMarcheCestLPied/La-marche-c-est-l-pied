import React, { useEffect, useState } from 'react';

import SatelliteMap from './../components/utils-components/SatelliteMap';
import datasParcours from './../data/parcours.json';
import datasEvents from './../data/events.json';

const Details = () => {
    const url = document.location.href;
    const [dataFind, setDataFind] = useState();

    useEffect(() => {
        let datas;
        if (url.includes("evenements")) {
            datas = datasEvents;
        } else if (url.includes("parcours")) {
            datas = datasParcours;
        }
        for (const data of datas) {
            if (data.alternative) {
                if (url.includes(data.date) && url.includes(data.lieu)) {

                    setDataFind(data);
                    break;
                }
            } else if (url.includes(data.date)) {
                setDataFind(data);
                break;
            }
        }
    }, [url]);

    function changeFormateDate(oldDate) {
        return oldDate.toString().split('-').reverse().join('/');
    }

    if (dataFind) {
        return (
            <section className="p-3">
                <h1>Détails {dataFind.type ? `: ${dataFind.type === "marche aux puces" ? "Marché aux puces" : "Interclub Personnel"} ` : ""}</h1>
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
                                    className={`carousel-item ${index === 0 ? 'active' : ''
                                        }`}
                                    key={index}
                                >
                                    <img
                                        src={image}
                                        className="d-block mx-auto"
                                        alt={`Slide ${index}`}
                                        style={{ maxWidth: '100%', maxHeight: '700px' }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExample"
                        data-bs-slide="prev"
                    >
                        <span
                            className="carousel-control-prev-icon text-bg-dark"
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
                            className="carousel-control-next-icon text-bg-dark"
                            aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <div className="d-flex justify-content-center mt-5">
                    <SatelliteMap positions={dataFind.positions} />
                </div>
            </section>
        );
    }
};

export default Details;
