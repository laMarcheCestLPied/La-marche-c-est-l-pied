import React from 'react';

const Bouton = ({ className, text }) => {
    return <button className={`btn ${className}`}>{text}</button>;
};

export default Bouton;
