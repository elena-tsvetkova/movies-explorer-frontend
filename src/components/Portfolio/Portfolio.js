import React from 'react';
import './Portfolio.css';
import arrow from '../../images/arrow.svg';

function Portfolio() {
    return (
        <section className='portfolio'>
            <h3 className='portfolio__title'>Портфолио</h3>
            <nav>
                <ul className='portfolio__links'>
                    <li className = 'portfolio__link'>
                        <a href='https://elena-tsvetkova.github.io/how-to-learn/' target='blank' className='portfolio__link-website'>
                            <h2 className='portfolio__link-subtitle'>Статичный сайт</h2>
                            <img className='portfolio__link-arrow' src={arrow} alt='стрелка'/>
                         </a>
                    </li>


                    <hr className="portfolio__line"/>

                    <li className = 'portfolio__link'>
                        <a href='https://elena-tsvetkova.github.io/russian-travel/index.html' target='blank' className='portfolio__link-website'>
                            <h2 className='portfolio__link-subtitle'>Адаптивный сайт</h2>
                            <img className='portfolio__link-arrow' src={arrow} alt='стрелка'/>
                        </a>
                    </li>

                    <hr className="portfolio__line"/>

                    <li className = 'portfolio__link'>
                        <a href='https://elena-tsvetkova.github.io/react-mesto-auth/' target='blank' className='portfolio__link-website'>
                            <h2 className='portfolio__link-subtitle'>Одностраничное приложение</h2>
                            <img className='portfolio__link-arrow' src={arrow} alt='стрелка'/>
                        </a>
                    </li>
                </ul>
            </nav>

        </section>
    )
}

export default Portfolio;