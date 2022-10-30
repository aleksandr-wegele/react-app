import React from 'react';
import {Route} from "react-router-dom"
import axios from "axios";


import Header from './components/Header'
import Nav from './components/Nav'
import Films  from './components/pages/Films';
import Description from './components/pages/Description';
import Favorite from './components/pages/Favorite'
import AppContext from './Context';
import {useTheme} from './components/hooks/useTheme'

function App() {
  const {theme, setTheme} = useTheme();
  const [items, setItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');
  const [currentPage, setCurrentPage] = React.useState(1);
  
 
 
  
  React.useEffect(() => {
      async function fetchData(){
      try {
      setIsLoading(true);
      const [itemResponse, favorItemsResponse] = await Promise.all([
      axios.get(`https://yts.mx/api/v2/list_movies.json?limit=12&page=${currentPage}`),
      axios.get(`https://6359336cff3d7bddb99bc5ef.mockapi.io/favorits`)]);

      setIsLoading(false);
      setFavorites(favorItemsResponse.data);
      setItems(itemResponse.data.data.movies);
      } catch (error) {
          alert('Ошибка при запросе данных');
          console.error(error);
      }
      }
      fetchData();
  }, [currentPage]);
  

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  const addToFavorite = async (obj) => {
    try{
     const favItem = favorites.find((favObj) => Number(favObj.id) === Number(obj.id))
     if (favItem) {
       setFavorites((prev) => prev.filter(item => Number(item.id) !== Number(obj.id)));
       await axios.delete(`https://6359336cff3d7bddb99bc5ef.mockapi.io/favorits/${favItem.id}`); 
     } else {
       setFavorites((prev) => [...prev, obj])
       const {data} = await axios.post('https://6359336cff3d7bddb99bc5ef.mockapi.io/favorits', obj);
       setFavorites((prev) => prev.map(item => {
         if (item.id === data.id){
           return{
             ...item,
             id: data.id
           }
         } return item;
       }));
     }
    } catch (error) {
   alert('Не удалось добавить в избранное');
   console.error(error)
   }
 };

const isFavoriteAdded = (id) =>{
 return favorites.some((obj) => Number(obj.id) === Number(id))
};

  return ( 

    <AppContext.Provider value={{
      searchValue,
      onChangeSearchInput, 
      setSearchValue,
      items,
      setCurrentPage,
      isLoading,
      theme,
      setTheme,
      favorites,
      addToFavorite,
      isFavoriteAdded
    }}>
    <div className="App">

    <Header/>

    <Route>
      <Nav exact path="/"/>
    </Route>

    <Route exact path="/">
       <Films 
       addToFavorite={addToFavorite}/>
    </Route>
      
    <Route exact path="/movi/:id" component={Description}/>

    <Route exact path="/favorits">
      <Favorite />
    </Route>

    </div>
    </AppContext.Provider>
  );
}

export default App;
