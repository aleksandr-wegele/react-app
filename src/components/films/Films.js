import ItemFilms from './itemFilms/ItemFilms';

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

}

export default Films