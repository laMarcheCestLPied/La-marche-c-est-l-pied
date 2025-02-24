import '../assets/css/Evenements.css';

import React, { useState } from 'react';

import Card from '../components/utils-components/Card';
import datas from './../data/events.json';
import CardProchainement from '../components/utils-components/CardProchainement';
import { NavLink } from 'react-router-dom';
import PaginationCard from '../components/utils-components/PaginationCard';

const Evenements = () => {
    const [itemsPerPage] = useState(5);
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    const sortItems = datas.sort((a, b) => new Date(b.date) - new Date(a.date));
    const currentItems = sortItems.slice(itemOffset, endOffset);
    const [activeTab, setActiveTab] = useState('tab1');

    const imageLoad = (data) => {
        let datasPhotoLength = 0;
        if (data.photos.length < 5) {
            datasPhotoLength = data.photos.length;
        } else {
            datasPhotoLength = 5;
        }
        let datasPhoto = [];
        for (let i = 0; i < datasPhotoLength; i++) {
            datasPhoto.push(data.photos[i]);
        }
        return datasPhoto

    };

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % datas.length;
        setItemOffset(newOffset);
    };
    

    const prochainements = [
        {
            type: "interclub personnel",
            date: "Prochainement en 2025",
            lieu: "Rouvroy"
        },
        {
            type: "marche aux puces",
            date: "Samedi 24 mai 2025",
            lieu: "Rouvroy"
        },
    ]

    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <section className="p-3">
            <article className="tab-slider-container">
                <figure className="tabs">
                    <div
                        className={`tab w-25 text-center ${activeTab === 'tab1' ? 'active' : ''
                            }`}
                        onClick={() => handleTabChange('tab1')}
                    >
                        Evènements réalisés
                    </div>
                    <div
                        className={`tab w-25 text-center ${activeTab === 'tab2' ? 'active' : ''
                            }`}
                        onClick={() => handleTabChange('tab2')}
                    >
                        Evènements à venir
                    </div>
                </figure>
                <div className="tab-content">
                    <div className={`tab-pane ${activeTab === 'tab1' ? 'active' : ''}`}>
                        {activeTab === 'tab1' &&
                            currentItems
                                .map((data, index) => (
                                    <div key={data.date}>
                                        
                                        {data.type === 'marche aux puces' && (
                                            <h3>Marché aux Puces</h3>
                                        )}
                                        {data.type === 'interclub personnel' && (
                                            <h3>Interclub personnel</h3>
                                        )}
                                        {data.type === 'ag' && (
                                            <h3>Assemblée Générale</h3>
                                        )}
                                        {data.type === 'pub' && (
                                            <h3>Publicité</h3>
                                        )}

                                        <article className="border m-2 p-2">
                                            <NavLink
                                                to={`/La-marche-c-est-l-pied/details?evenements#${data.date}${data.alternative ? '&' + data.lieu : ''}`}
                                                className="nav-link text-black"
                                            >
                                                <Card data={data} datasPhoto={imageLoad(data)} />
                                            </NavLink>
                                        </article>
                                    </div>
                                ))}
                        <PaginationCard datasPerPage={itemsPerPage} totalDatas={datas.length} handlePageClick={handlePageClick} />
                        <h5 className='text-center'>Nombres d'Evènements : <span className='fw-bold'>{datas.length}</span> !</h5>
                    </div>
                    <div className={`tab-pane ${activeTab === 'tab2' ? 'active' : ''}`}>
                        {
                            prochainements.map((prochainement, index) => (
                                <div key={index}>

                                    {prochainement.type === 'marche aux puces' && (
                                        <h3>Marché aux Puces</h3>
                                    )}
                                    {prochainement.type === 'interclub personnel' && (
                                        <h3>Interclub personnel</h3>
                                    )}

                                    <article className="border m-2 p-2">
                                    <CardProchainement data={prochainement} />
                                    </article>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </article>
        </section>
    );
};

export default Evenements;
