import { useEffect } from 'react';

const RedirectToHome = () => {
    console.log(window.location.pathname);
    useEffect(() => {
        if (window.location.pathname !== '/La-marche-c-est-l-pied' && window.location.pathname !== '/La-marche-c-est-l-pied/' ) {
            // Si l'URL n'est pas la page d'accueil et ne correspond pas à une autre route définie
            window.location.href = 'https://lamarchecestlpied.github.io/La-marche-c-est-l-pied'; // Rediriger vers la page d'accueil
            // window.location.href = 'http://localhost:3000/La-marche-c-est-l-pied'; // Rediriger vers la page d'accueil
        }
    }, []);

    return null;
};

export default RedirectToHome;
