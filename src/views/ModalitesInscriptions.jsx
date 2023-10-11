import React, { useState } from 'react';

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
                    pour une année complète à partir de la date d&apos;inscription. Les
                    frais d&apos;adhésion annuels sont de 32€. Cette cotisation permet de
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
                    Paiement : Le paiement des frais d&apos;adhésion peut être effectué
                    par chèque à remettre à notre secrétaire ou trésorier.
                </li>
                <li>
                    Confirmation d&apos;adhésion : Une fois votre formulaire
                    d&apos;inscription et votre paiement effectué, vous recevrez une
                    confirmation d&apos;adhésion par courrier électronique. Cela
                    confirmera que votre adhésion a été traitée avec succès.
                </li>
                {/* <li></li> */}
                <li>
                    Avantages réservés aux membres et assurances : En tant que membre de
                    l&apos;association &quot;La marche c&apos;est l&apos;pied&quot;, vous
                    bénéficierez d&apos;un accès exclusif à nos sorties de marche
                    régulières, ainsi qu&apos;à nos événements spéciaux et randonnées
                    thématiques. De plus, nous avons pris des mesures pour assurer votre
                    sécurité lors de nos activités. En tant que membre, vous serez couvert
                    par notre assurance responsabilité civile, qui vous protège en cas de
                    dommages matériels ou corporels causés à des tiers dans le cadre des
                    sorties de marche organisées par l&apos;association.
                </li>
            </ol>
            <p>
                Cette assurance responsabilité civile offre une tranquillité d&apos;esprit
                supplémentaire lors de vos participations aux activités de
                l&apos;association. Nous veillons à ce que toutes les précautions
                nécessaires soient prises pour assurer la sécurité et le bien-être de nos
                membres pendant les sorties de marche.
            </p>
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
                <a href="https://drive.google.com/file/d/100J5dL3dksc1QaanxOTqnUoRgV-2hHon/view?usp=sharing" target="_blank" rel="noreferrer">
                    <button
                        className={`btn-inscription text-white fs-4 ${
                            isChecked ? 'bg-green' : 'bg-secondary'
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
