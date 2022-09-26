/* import Dog from '../../img/dog.png'; */
import PropTypes from 'prop-types'
import React from 'react';



function ItemFilms ({title, poster}){
    return(
        <div className="content__card">
          <img src={poster} alt="постер" className="content__card_img" />
          <h4 className="content__card_headding">{title}</h4>
        </div>
    )
}

ItemFilms.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default ItemFilms