import React, { useState } from 'react';
import { currentDate } from '../components/services/currentDate';

const ModalitesInscriptions = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };
    return (
        <section className="m-3">
            <h1 className="fw-bold">Modalités d&apos;inscription</h1>
            <ol>
                <li>
                    Adhésion annuelle : L&apos;adhésion à l&apos;association est valable
                    pour une année (du 1er septembre au 31 juillet) à partir de la date d&apos;inscription. Les
                    frais d&apos;adhésion annuels sont de 28€ en individuel et de 53€ en familial. Cette cotisation permet de
                    soutenir les activités de l&apos;association et de participer aux
                    sorties de marche régulières.
                </li>
                <li>
                    Procédure d&apos;inscription : Pour devenir membre de
                    l&apos;association, veuillez remplir le formulaire d&apos;inscription
                    disponible ci-dessous. Assurez-vous de fournir toutes les informations
                    demandées de manière précise et complète.
                </li>
                <li>
                    Paiement : Le paiement des frais d'adhésion peut être effectué par chèque ou en espèces à remettre à l' un des membres du bureau ( trésorier, secrétaire, président).
                </li>
                <li>
                    Confirmation d&apos;adhésion : Une fois votre formulaire
                    d&apos;inscription et votre paiement effectué, vous recevrez une
                    confirmation d&apos;adhésion par courrier électronique. Cela
                    confirmera que votre adhésion a été traitée avec succès.
                </li>
                {/* <li></li> */}
                <li>
                    Avantages réservés aux membres : En tant que membre de
                    l&apos;association &quot;La marche c&apos;est l&apos;pied&quot;, vous
                    bénéficierez d&apos;un accès exclusif à nos sorties de marche
                    régulières, ainsi qu&apos;à nos événements spéciaux et randonnées
                    thématiques.
                </li>
            </ol>
            <p>
                Nous vous remercions de votre intérêt pour &quot;La marche c&apos;est
                l&apos;pied&quot;. Si vous avez des questions supplémentaires concernant
                les modalités d&apos;inscription, n&apos;hésitez pas à nous contacter ici.
                Nous sommes impatients de vous accueillir parmi notre communauté de
                marcheurs et de partager ensemble de belles aventures pédestres !
            </p>
            <div className="text-center">
                <label className="d-block my-4" htmlFor="accepted">
                    <input
                        type="checkbox"
                        name="accepted"
                        id="accepted"
                        className="me-3"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                    />
                    En cochant cette case vous acceptez les modalités d’inscription
                </label>
                <a href="https://drive.google.com/file/d/1AZMslfSaAEItV-9w1lmwBz_kjKv-eH0R/view?usp=sharing" target="_blank" rel="noreferrer">
                    <button
                        className={`btn-inscription text-white fs-4 ${isChecked ? currentDate === "31-10" ? "bg-orange" : "bg-green" : 'bg-secondary'
                            }`}
                        disabled={!isChecked}
                    >
                        Télécharger le document d'inscription
                    </button>
                </a>
            </div>
        </section>
    );
};

export default ModalitesInscriptions;
