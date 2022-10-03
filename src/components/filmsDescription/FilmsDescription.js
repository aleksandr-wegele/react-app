import PropTypes from 'prop-types'
import React from 'react';
import Back from '../img/back.svg';

function FilmsDescription ({title, year, rating, poster, runtime, genres, description}){
    return(
        <div>
            <nav className="nav">
            <ul className="nav__list">
                <li className="nav__list_item"><a href='/films' className="nav__list_item_link"><img src={Back} alt='back'/>Back</a></li>
            </ul>
            </nav>

            <section className='film__description'>
                <img src={poster} alt='poster' className='poster'/>
                <h1 className='film_headding'>{title}</h1>
                <div className='film__rating'>{rating}</div>
                <div className='film__info'>
                    <ul>
                        <li>Genre:</li>
                        <li>Year:</li>
                        <li>Running time:</li>                    
                    </ul>
                    <ul>
                        <li>{genres}</li>
                        <li>{year}</li>
                        <li>{runtime} min</li>                    
                    </ul>
                </div>
                <p className='films__descriptions'>{description}</p>
            </section>

        </div>
        
    )
}

FilmsDescription.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    runtime: PropTypes.number.isRequired,
    genres: PropTypes.string.isRequired,
  };

export default FilmsDescription