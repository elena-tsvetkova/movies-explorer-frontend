import React from 'react';
import './MoviesCard.css';
import {useLocation} from 'react-router-dom';


function MoviesCard(props) {
    const location = useLocation();

    const time = () => {
        const hours = Math.floor(props.duration / 60);
        const minutes = props.duration % 60;
        return `${hours + 'ч' + minutes + 'м'}`
    }

    return (
        <li className='moviesCard'>
            <a href={props.trailerLink} target='blank'>
                <img className='moviesCard__image' src={props.image} alt={props.nameRU}/>
            </a>
            <div className='moviesCards__information'>
                <h2 className='moviesCard__title'>{props.nameRU}</h2>
                <p className='moviesCard__time'>{`${time()}`}</p>
            </div>

            {(location.pathname === '/movies') ? (
                    <button
                        className={`${props.isSavedMovie(props.movie) ? 'moviesCard__button_like' : 'moviesCard__button'}`}
                        type='button' onClick={() => props.handleAction(props.movie)}></button>
                ) :
                <button className='moviesCard__deleteButton' type='button'
                        onClick={() => props.onDeleteMovie(props.movie)}></button>
            }
        </li>
    );
}

export default MoviesCard;