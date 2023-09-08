import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';


const Contact = () => {
    const [state, handleSubmit] = useForm("mwkjdbrp");
    const [erreur, setErreur] = useState(false);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        handleSubmit(event)
            .then((result) => {
                if (result.success) {
                    // Le formulaire a été soumis avec succès
                    setErreur(false); // Réinitialise l'état d'erreur à false
                } else {
                    // Une erreur s'est produite lors de la soumission du formulaire
                    setErreur(true);
                }
            })
            .catch(() => {
                // Une erreur s'est produite lors de la soumission du formulaire
                setErreur(true);
            });
    };

    if (state.succeeded) {
        return (<div className='position-absolute top-50 start-50 translate-middle'><h1 >Votre mail a été envoyé avec succès</h1>
        <h3>Nous vous recontacterons dans les meilleurs délais</h3></div>);
    }
    else if (erreur && !state.submitting) {
        return <h1 className='position-absolute top-50 start-50 translate-middle'>Une erreur est survenue. <br /> Si l'erreur persiste, contactez nous via le mail suivant : <span className='text-primary'>lamarcheclepied@laposte.net</span> </h1>;
    }

    return (
        <section className="container mt-5">
            <h1 className="mb-4">Contactez-nous</h1>
            <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Votre e-mail :</label>
                    <input type="email" id="email" name="email" className="form-control" />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                </div>

                <div className="form-group mt-3">
                    <label htmlFor="objet">Objet :</label>
                    <input type="text" id="objet" name="objet" className="form-control" />
                    <ValidationError
                        prefix="Objet"
                        field="objet"
                        errors={state.errors}
                    />
                </div>

                <div className="form-group mt-3">
                    <label htmlFor="message">Message :</label>
                    <textarea id="message" name="message" className="form-control" rows="5" />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                </div>

                <button type="submit" disabled={state.submitting} className="btn btn-primary mt-3">Envoyer</button>
            </form>
        </section>
    );
}

export default Contact