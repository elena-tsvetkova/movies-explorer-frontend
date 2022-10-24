import React from 'react';
import logo from '../../images/landing-logo.svg';
import './Promo.css';

function Promo() {

    return (
        <section className="promo">
            <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
            <img className="promo__image" src={logo} alt="титульная заставка"/>
        </section>
    );
}

export default Promo;