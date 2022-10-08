import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox () {
    return(
        <section className='filterCheckBox'>
            <form className='filterCheckBox__form'>
                    <input type="checkbox" checked="checked" className='filterCheckBox__button'/>
            </form>
            <p className='filterCheckBox__title'>Короткометражки</p>
        </section>
    )
}

export default FilterCheckbox;