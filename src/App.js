import Header from './components/Header';
import Main from './components/Main';
import AppContext from './Context';

function App() {
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
