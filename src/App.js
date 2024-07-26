import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Footer from './components/tiers-parties/Footer';
import Navbar from './components/tiers-parties/Navbar';
import Accueil from './views/Accueil';
import APropos from './views/APropos';
import Contact from './views/Contact';
import Details from './views/Details';
import Evenements from './views/Evenements';
import MentionsLegales from './views/MentionsLegales';
import ModalitesInscriptions from './views/ModalitesInscriptions';
import Parcours from './views/Parcours';
import RedirectToHome from './views/RedirectToHome';

const App = () => {
    return (
        <>
            {/* <RedirectToHome /> */}
            <BrowserRouter>
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/La-marche-c-est-l-pied/parcours" element={<Parcours />} />
                        <Route path="/La-marche-c-est-l-pied/evenements" element={<Evenements />} />
                        <Route path="/La-marche-c-est-l-pied/a_propos" element={<APropos />} />
                        <Route path="/La-marche-c-est-l-pied/mentions_legales" element={<MentionsLegales />} />
                        <Route
                            path="/La-marche-c-est-l-pied/modalites_inscription"
                            element={<ModalitesInscriptions />}
                        />
                        <Route path="/La-marche-c-est-l-pied/contact" element={<Contact />} />
                        <Route path="/La-marche-c-est-l-pied/details" element={<Details />} />
                        <Route path="/La-marche-c-est-l-pied" exact element={<Accueil />} />
                        {/* <Route path="*" element={<Error />} /> */}
                    </Routes>
                    <div className='d-block d-sm-none'>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                    </div>
                </main>
                <Footer />
            </BrowserRouter>
        </>
    );
};

export default App;
