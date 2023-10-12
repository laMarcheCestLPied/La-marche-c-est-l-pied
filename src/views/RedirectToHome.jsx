import React, { useEffect } from 'react';

const RedirectToHome = () => {
    useEffect(() => {
        if (window.location.pathname !== '/La-marche-c-est-l-pied' ) {
            // Si l'URL n'est pas la page d'accueil et ne correspond pas à une autre route définie
            window.location.href = '/La-marche-c-est-l-pied'; // Rediriger vers la page d'accueil
        }
    }, []);

    return null;
};

export default RedirectToHome;
