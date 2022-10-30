import React from "react";

import ItemFilms from "../itemFilms/ItemFilms";
import Pagination from "../Pagination"

import AppContext from "../../Context";


function Films({addToFavorite}) {

  const {items, isLoading, searchValue, setCurrentPage} = React.useContext(AppContext);
  
      return (
        
        <div className="wrap__content_main">
        <main className='content'>
        {isLoading ? (<div>Загрузка...</div>) : (
            items.filter((movie) => movie.title.toLowerCase().includes(searchValue.toLowerCase()))
            .map((movie, index) => {
              return(
              <ItemFilms 
              key={index}
              id={movie.id}
              title={movie.title} 
              poster={movie.medium_cover_image}
              imgUrl={movie.large_cover_image}
              year={movie.year}
              rating={movie.rating}
              runtime={movie.runtime}
              genres={movie.genres}
              description_full={movie.description_full}
              language={movie.language} 
              loading={isLoading}
              onFavorite={(obj) => addToFavorite(obj)}
              /> 
              )
            })
            )    
        }
        </main>
        <Pagination
        onChangePage={(number) => setCurrentPage(number)}/>
        </div>
      );
    }


  export default Films