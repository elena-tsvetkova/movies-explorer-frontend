import React from 'react';
import './Footer.css';

function Footer () {
    return (
        <footer className="footer">
            <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <hr className="footer__line"/>
            <div className="footer__bottom">
                <p className="footer__bottom-date">© 2022</p>
                <div className="footer__bottom-links">
                    <a className="footer__bottom-link" href="https://practicum.yandex.ru" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
                    <a className="footer__bottom-link" href="https://github.com/elena-tsvetkova" target="_blank" rel="noreferrer" >Github</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;