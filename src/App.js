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

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/parcours" element={<Parcours />} />
                        <Route path="/evenements" element={<Evenements />} />
                        <Route path="/a_propos" element={<APropos />} />
                        <Route path="/mentions_legales" element={<MentionsLegales />} />
                        <Route
                            path="/modalites_inscription"
                            element={<ModalitesInscriptions />}
                        />
                        <Route path="/contact" element={<Contact />} />
                        {/* <Route
                            path="/details"
                            render={(routeProps) => (
                                <Details data={routeProps.location.data} />
                            )}
                        /> */}
                        <Route path="/details" element={<Details />} />
                        <Route path="/" exact element={<Accueil />} />
                        {/* <Route path="*" element={<Error />} /> */}
                    </Routes>
                </main>
                <Footer />
            </BrowserRouter>
        </>
    );
};

export default App;
