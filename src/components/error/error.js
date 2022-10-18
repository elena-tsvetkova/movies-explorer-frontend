import React from 'react';
import {Link} from 'react-router-dom';
import './error.css';
import {useHistory} from 'react-router-dom';


function Error() {
    const history = useHistory();

    function backToPrevPage() {
        history.goBack()
    }

    return (
        <div className="error">
            <h2 className="error__title">404</h2>
            <p className="error__text">Страница не найдена</p>
            <Link to='' onClick={() => backToPrevPage()} className="error__link">Назад</Link>
        </div>
    );
}

export default Error
