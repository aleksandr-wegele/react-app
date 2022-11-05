import React from "react";

import AppContext from "../../Context";
import ItemFilms from "../itemFilms/ItemFilms";
import styles from "../style/Favorite.module.scss"

function Favorite (items =[]) {
const {favorites, addToFavorite} = React.useContext(AppContext);
    return(

        <div className={styles.wrap__content_main}>
        <main className={styles.content}>
          {favorites.length > 0 ? (<>
          {favorites.map((items, index) => (
              <ItemFilms 
                key={index}
                favorited={true}
                onFavorite={addToFavorite}
                {...items}
                />
                ))}
                </>) : (<div className={styles.favorite_empty}>
                  <p className={styles.favorite_empty_description}>Вы ничего не выбрали</p>
                </div>) 
          }   
          
        </main>
        </div>
    )
}

export default Favorite