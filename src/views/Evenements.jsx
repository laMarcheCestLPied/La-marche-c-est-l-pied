import '../assets/css/Evenements.css';

import React, { useState } from 'react';

import Card from '../components/utils-components/Card';
import datas from './../data/events.json';
import CardProchainement from '../components/utils-components/CardProchainement';

const Evenements = () => {
    const [activeTab, setActiveTab] = useState('tab1');

    const prochainements = [
        {
            type: "marche aux puces",
            date: "Pas encore défini",
            lieu: "Pas encore défini"
        },
        {
            type: "interclub personnel",
            date: "Pas encore défini",
            lieu: "Pas encore défini"
        },
        {
            type: "autre interclub",
            date: "Pas encore défini",
            lieu: "Pas encore défini"
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
                        Evenements réalisés
                    </div>
                    <div
                        className={`tab w-25 text-center ${activeTab === 'tab2' ? 'active' : ''
                            }`}
                        onClick={() => handleTabChange('tab2')}
                    >
                        Evenements à venir
                    </div>
                </figure>
                <div className="tab-content">
                    <div className={`tab-pane ${activeTab === 'tab1' ? 'active' : ''}`}>
                        {activeTab === 'tab1' &&
                            datas
                                .sort((a, b) => new Date(b.date) - new Date(a.date))
                                .map((data, index) => (
                                    <div key={data.date}>

                                        {data.type === 'marche aux puces' && (
                                            <h3>Marché aux Puces</h3>
                                        )}
                                        {data.type === 'interclub personnel' && (
                                            <h3>Interclub personnel</h3>
                                        )}
                                        {data.type === 'autres interclub' && (
                                            <h3>Autre interclub</h3>
                                        )}

                                        <article className="border m-2 p-2">
                                            <Card data={data} />
                                        </article>
                                    </div>
                                ))}
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
                                    {prochainement.type === 'autre interclub' && (
                                        <h3>Autre interclub</h3>
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
