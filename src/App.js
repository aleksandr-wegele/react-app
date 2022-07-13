import React from 'react';
import axios from 'axios';
import Movie from './Movie';

class App extends React.Component {

  state = {
    isLoading: true,
    movies: []
  }

  getMovies = async () => {
    const {data: {data: {movies}}} = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');
    this.setState({movies, isLoading: false});
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const {isLoading, movies} = this.state;
    return <div>{isLoading ? "Загрузка..." : movies.map(movie => {
     return <Movie
      id={movie.id}
      yeare={movie.yeare}
      title={movie.title}
      summary={movie.summary}
      poster={movie.medium_cover_image}/>
    })}
    </div>
  }
}

export default App;
