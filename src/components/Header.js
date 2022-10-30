import React from "react";
import { Link } from "react-router-dom";

import AppContext from "../Context";

function Header() {

const {
  searchValue, 
  onChangeSearchInput, 
  setSearchValue,
  setTheme
  } = React.useContext(AppContext);

const toggleThemeLight = () =>{
  setTheme('light')
}
const toggleThemeDark = () => {
  setTheme('dark');
}

    return(
        <header className="header">
        <div className="wrap__content_header">
          <Link to="/"><img src='/img/logo.png' alt="Logo" className="header__logo" /></Link>
          <div className="header__search_block">
            <img src='/img/search.png' alt='search' className='search_img'/>
            {searchValue && <img onClick={()=> setSearchValue('')} src='/img/close.svg' alt='clear_search' className='clear_search_btn'/>}
            <input onChange={onChangeSearchInput} value={searchValue} className="header__search_input" placeholder="Search..." />
          </div>
            <button onClick={toggleThemeDark}>Темная тема</button>
            <button onClick={toggleThemeLight}>Светлая тема</button>
        </div>
      </header>
    )
}

export default Header