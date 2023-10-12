import React, { useEffect } from 'react';

const RedirectToHome = () => {
    useEffect(() => {
        if (window.location.pathname !== '/' && !window.location.pathname.startsWith('/votre-autre-route')) {
            // Si l'URL n'est pas la page d'accueil et ne correspond pas à une autre route définie
            window.location.href = '/'; // Rediriger vers la page d'accueil
        }
    }, []);

    return null;
};

export default RedirectToHome;
