import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard.js';
import movieDisayn from '../../images/disayn.svg';

const card = [
    {
        description: '22 слова о дизайне',
        image: movieDisayn,
        duration: '1ч45м',
    },
    {
        description: '11 слова о дизайне',
        image: movieDisayn,
        duration: '1ч52м'
    },
    {
        description: '33 слова о дизайне',
        image: movieDisayn,
        duration: '1ч32м'
    },
    {
        description: '44 слова о дизайне',
        image: movieDisayn,
        duration: '1ч46м'
    },
    {
        description: '33 слова о дизайне',
        image: movieDisayn,
        duration: '1ч42м'
    },
    {
        description: '33 слова о дизайне',
        image: movieDisayn,
        duration: '1ч42м'
    },
    {
        description: '33 слова о дизайне',
        image: movieDisayn,
        duration: '1ч50м'
    },
    {
        description: '33 слова о дизайне',
        image: movieDisayn,
        duration: '1ч25м'
    },
    {
        description: '33 слова о дизайне',
        image: movieDisayn,
        duration: '1ч42м'
    },
    {
        description: '33 слова о дизайне',
        image: movieDisayn,
        duration: '1ч42м'
    },
    {
        description: '33 слова о дизайне',
        image: movieDisayn,
        duration: '1ч42м'
    },
    {
        description: '33 слова о дизайне',
        image: movieDisayn,
        duration: '1ч42м'
    },
    {
        description: '33 слова о дизайне',
        image: movieDisayn,
        duration: '1ч42м'
    },
    {
        description: '33 слова о дизайне',
        image: movieDisayn,
        duration: '1ч42м'
    },
    {
        description: '33 слова о дизайне',
        image: movieDisayn,
        duration: '1ч42м'
    },
    {
        description: '22 слова о дизайне',
        image: movieDisayn,
        duration: '1ч42м'
    },
];

function MoviesCardList (props) {

    return (
        <section className='movieCardList'>
            <ul className='movieCardList__cards'>

                {card.map((card) => (
                    <MoviesCard
                        image = {card.image}
                        description = {card.description}
                        duration = {card.duration}
                        className = {props.className}>
                      </MoviesCard>
                ))}

            </ul>
        </section>
    );
}

export default MoviesCardList;