
import React from 'react';
import './AboutMe.css';
import Elena from '../../images/Elena.jpg';
import Portfolio from "../Portfolio/Portfolio";

function AboutMe () {
    return (
        <section className='aboutMe' id='aboutMe'>
            <h3 className='aboutMe__status'>Студент</h3>
            <hr className="aboutMe__line"></hr>

            <div className='aboutMe__content'>
                <div className='aboutMe__textContent'>
                    <h2 className='aboutMe__name'>Елена</h2>
                    <p className='aboutMe__profession'>Фронтенд-разработчик, 31 года</p>

                    <p className='aboutMe__description'> Я живу в Орле. Замужем, двое детей. Окончила Орловский государственный университет - учебно-научно-производственный комплекс по специальность юриспруденция. Имею степень магистра юриспруденции.
                        Работала в Управление по вопросам миграции РФ. Пока находилась в отпуске по уходу за ребенком, решила попробовать свои силы в новой специальности, поэтому пошла на курсы Яндекс.Практикума.
                    </p>
                    <a href="https://github.com/elena-tsvetkova" target="_blank" className='aboutMe__Github' rel="noreferrer">Github</a>
                </div>

                <img  className='aboutMe__foto' src={Elena} alt="фото"/>

            </div>

            <Portfolio />
        </section>
    )
}

export default AboutMe;