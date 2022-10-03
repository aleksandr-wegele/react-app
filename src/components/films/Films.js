import FilmsDescription from '../filmsDescription/FilmsDescription';
import ItemFilms from './itemFilms/ItemFilms';
import axios from 'axios';
import React from 'react';



class Films extends React.Component {
  state ={
    isLoading: true,
    movies: []
  };

  getMovies = async() => {
    const {
      data: {
        data: {movies},
      },
    } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating")
    this.setState({movies, isLoading: false});
  };


  componentDidMount(){
    this.getMovies();
  }

  render(){
    const {isLoading, movies} = this.state;
    return <main className='content'>{isLoading ? "Loading..." : movies.map(movie => {
        console.log(movie)
    return(
  /*   <ItemFilms 
    title={movie.title} 
    poster={movie.medium_cover_image} /> */
    
    <FilmsDescription title={movie.title}
    year={movie.year}
    rating={movie.rating}
    poster={movie.large_cover_image}
    runtime={movie.runtime}
    genres={movie.genres}
    description={movie.description_full}/>
    )})}
    </main>
    
  }
}

export default Films