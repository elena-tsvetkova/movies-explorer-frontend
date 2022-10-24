import React from 'react';
import './Footer.css';
import { useLocation } from 'react-router-dom';

function Footer () {

    const location = useLocation();
    return (
        <footer className={'footer' + (location.pathname === '/signin' ? ' footer_none' : '') +  (location.pathname === '/signup' ? ' footer_none' : '') + (location.pathname === '/profile' ? ' footer_none' : '')}>
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