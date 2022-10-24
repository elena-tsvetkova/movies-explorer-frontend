import React, {useEffect, useState} from 'react';
import './FilterCheckbox.css';
import { useLocation } from 'react-router-dom';


function FilterCheckbox ({onShort, movies, searchMovie, isShort, text}) {

const [isClicked, setIsClicked]= useState(false);

    const location = useLocation();

    function handleChangeCheckbox() {
        onShort (!isShort)
        setIsClicked (true);
        if (location.pathname === '/movies'){
            localStorage.setItem('isShort', !isShort);
        }
    }

    useEffect(() => {
            if (location.pathname === '/movies'){
           console.log(localStorage.getItem('isShort'))
            if (localStorage.getItem('isShort')) {
                onShort(JSON.parse(localStorage.getItem('isShort')));
            }
        }

        if (location.pathname === '/saved_movies'){
            onShort(false);
         }

    }, [location]);

    useEffect(() => {
        if (isClicked === true) {
            searchMovie (text, movies)
        }
    }, [isShort, isClicked]);

    return(
        <section className='filterCheckBox'>
            <form className='filterCheckBox__form'>
                    <input type="checkbox" className='filterCheckBox__button' id='checkBox' checked={isShort}
                        onChange = {() => handleChangeCheckbox()}/>
            </form>
            <p className='filterCheckBox__title'>Короткометражки</p>
        </section>
    )
}

export default FilterCheckbox;