/* import Dog from '../../img/dog.png'; */

import React from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../Context';
import styles from "../style/ItemFilms.module.scss"

function ItemFilms ({
  onFavorite, 
  favorited = false, 
  id, title, poster, 
  imgUrl, 
  year, 
  rating, 
  runtime, 
  genres, 
  description_full, 
  language
}) {

  const [isFavorite, setIsFavorite] = React.useState(favorited)
  const {isFavoriteAdded} = React.useContext(AppContext);
  const itemObj = {id, title, poster, imgUrl, year, rating, runtime, genres, description_full, language}
  const onClickFavorite = () => {
    onFavorite(itemObj)
    setIsFavorite(!isFavorite)
  }
    return(
      
          
          <div className={styles.content__card}>
            <div className={styles.content__card_info} style={{
               width: "280px",
               height: "345px",
               backgroundImage : `url(${poster})`,
               backgroundRepeat : "no-repeat",
               backgroundSize: "100%",
            }}>
              <div className={styles.content__card_info_hover}>
                <img 
                src={isFavoriteAdded(id) ? "/img/like.png" : "/img/no-like.png"}
                alt="like" 
                className={styles.content__card_info_like_img}
                onClick={onClickFavorite}
                />
                <Link to={{
                pathname: `/movi/${id}`,
                state: { 
                  id, 
                  title, 
                  poster,
                  year,
                  rating,
                  runtime,
                  genres, 
                  description_full, 
                  language,
                  imgUrl
                },
                }}>
                <p className={styles.content__card_info_genres}>{genres}</p>
                <p className={styles.content__card_info_runtime}>{runtime} minuts</p>
                <span className={styles.content__card_info_year}>{year}</span>
                <span className={styles.content__card_info_rating}>{rating} 
                <img src="/img/Star.png" alt="star" className={styles.content__card_info_rating_img}/></span>
                </Link> 
                </div>
            </div>
            <Link to={{
                pathname: `/movi/${id}`,
                state: { 
                  id, 
                  title, 
                  poster,
                  year,
                  rating,
                  runtime,
                  genres, 
                  description_full, 
                  language,
                  imgUrl  
                },
                }}>
            <h4 className={styles.content__card_headding}>{title}</h4>
            </Link>
          </div>
          
      
          
    )
}


export default ItemFilms