import React from 'react';
import {Link} from 'react-router-dom';
import './error.css';

function Error () {
    return (
        <div className="error">
                <h2 className="error__title">404</h2>
                <p className="error__text">Страница не найдена</p>
                <Link to='' className = "error__link">Назад</Link>
        </div>
    );
}

export default Error;