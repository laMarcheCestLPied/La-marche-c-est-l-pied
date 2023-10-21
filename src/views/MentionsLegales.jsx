import React from 'react';
import { NavLink } from 'react-router-dom';
import { currentDate } from '../components/services/currentDate';

import Bouton from '../components/utils-components/Bouton';

const MentionsLegales = () => {
    return (
        <>
            <section className="m-3">
                <h1 className="fw-bold mb-3">Mentions légales</h1>

                <h6 className="text-decoration-underline">
                    Responsable de publication :
                </h6>
                <p>Nom de l&apos;association : La marche c&apos;est l&apos;pied</p>
                <p>Adresse : <a href='https://www.google.com/maps/dir//50.393427,2.903673/' className='text-dark'>5 rue de la Mairie, 62320 Rouvroy</a></p>
                <p>Numéro de téléphone : <span className='fw-bold'>06.09.01.52.87 </span> - <span className='fw-bold'>06.61.04.70.56</span></p>
                <p>Adresse e-mail : <span className='text-primary'>lamarcheclepied@laposte.fr</span></p>

                {/* <h6 className="text-decoration-underline mt-4">Hébergement du site :</h6>
                <p>Nom de l&apos;hébergeur : [nom de l&apos;hébergeur]</p>
                <p>Adresse : [adresse de l&apos;hébergeur]</p>
                <p>Numéro de téléphone : [numéro de téléphone de l&apos;hébergeur]</p>
                <p>Site web : [site web de l&apos;hébergeur]</p> */}

                <h6 className="text-decoration-underline mt-4">
                    Propriété intellectuelle :
                </h6>
                <p>
                    Tous les contenus présents sur le site de &quot;La marche c&apos;est
                    l&apos;pied&quot; (textes, images, logos, vidéos, etc.) sont protégés
                    par les lois sur la propriété intellectuelle et sont la propriété
                    exclusive de l&apos;association ou de ses partenaires. Toute
                    reproduction, représentation, modification ou distribution de ces
                    contenus sans autorisation préalable écrite est strictement interdite.
                </p>

                <h6 className="text-decoration-underline mt-4">Liens externes :</h6>
                <p>
                    Le site de &quot;La marche c&apos;est l&apos;pied&quot; peut contenir
                    des liens vers des sites externes. L&apos;association décline toute
                    responsabilité quant au contenu, à l&apos;exactitude ou à la fiabilité
                    de ces sites tiers. L&apos;accès à ces liens se fait sous la
                    responsabilité de l&apos;utilisateur.
                </p>

                <h6 className="text-decoration-underline mt-4">
                    Modification des mentions légales :
                </h6>
                <p>
                    L&apos;association &quot;La marche c&apos;est l&apos;pied&quot; se
                    réserve le droit de modifier à tout moment les présentes mentions
                    légales. Nous vous encourageons à consulter régulièrement cette page
                    pour vous tenir informé(e) des éventuelles mises à jour.
                </p>

                <p>
                    Nous vous remercions de votre visite sur notre site. Si vous avez des
                    questions supplémentaires concernant les mentions légales, veuillez
                    nous contacter à l&apos;adresse <span className='text-primary'>lamarcheclepied@laposte.fr </span> 
                    ou par téléphone au <span className='fw-bold'>06.09.01.52.87 </span>ou au <span className='fw-bold'>06.61.04.70.56</span>.
                </p>
            </section>

            <figure className="text-center">
                <NavLink to="/La-marche-c-est-l-pied/modalites_inscription">
                    <Bouton text="S'inscrire" className={`${currentDate === "31-10" ? "bg-orange" : "bg-green"} text-white fs-4 me-5`} />
                </NavLink>
            </figure>
        </>
    );
};

export default MentionsLegales;
