import Header from './components/Header';
import Main from './components/Main';
import AppContext from './Context';
import {useTheme} from './components/hooks/useTheme'

function App() {
  const {theme, setTheme} = useTheme();
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
      <Main/>
      
    </div>
    </AppContext.Provider>
  );
}

export default App;
