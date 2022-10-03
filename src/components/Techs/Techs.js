import React from 'react';
import './Techs.css';

function Techs () {
    return (
        <section className='technology' id='techs'>
            <h3 className='technology__subtitle'>Технологии</h3>
            <hr className="technology__line"></hr>
            <h2 className='technology__title'>7 технологий</h2>
            <p className='technology__text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <div className='technology__cards'>
                <div className='technology__card'>
                    <p className='technology__card-text'>HTML</p>
                </div>

                <div className='technology__card'>
                    <p className='technology__card-text'>CSS</p>
                </div>

                <div className='technology__card'>
                    <p className='technology__card-text'>JS</p>
                </div>

                <div className='technology__card'>
                    <p className='technology__card-text'>React</p>
                </div>

                <div className='technology__card'>
                    <p className='technology__card-text'>Git</p>
                </div>

                <div className='technology__card'>
                    <p className='technology__card-text'>Express.js</p>
                </div>

                <div className='technology__card'>
                    <p className='technology__card-text'>mongoDB</p>
                </div>
            </div>
        </section>
    )
}

export default Techs;