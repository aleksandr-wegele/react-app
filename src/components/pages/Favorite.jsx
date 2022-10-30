import React from "react";

import AppContext from "../../Context";
import ItemFilms from "../itemFilms/ItemFilms";


function Favorite (items =[]) {
const {favorites, addToFavorite} = React.useContext(AppContext);
    return(

        <div className="wrap__content_main">
        <main className='content'>
        {favorites.length > 0 ? (<>
        {favorites.map((items, index) => (
             <ItemFilms 
              key={index}
              favorited={true}
              onFavorite={addToFavorite}
              {...items}
              />
              ))}
              </>) : (<div>
                <img src="" alt=""/>
                <p>Вы ничего не выбрали ;(</p>
              </div>) 
        }   
        
        </main>
        </div>
    )
}

export default Favorite