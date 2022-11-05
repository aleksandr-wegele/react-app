import React from "react";
import { Link } from "react-router-dom";

import AppContext from "../Context";
import styles from "./style/Header.module.scss"
function Header() {

const {
  searchValue, 
  onChangeSearchInput, 
  setSearchValue,
  setTheme,
  
  } = React.useContext(AppContext);

const toggleThemeLight = () =>{
  setTheme('light')
}
const toggleThemeDark = () => {
  setTheme('dark');
}

    return(
        <header className={styles.header}>
        <div className={styles.wrap__content_header}>
          <Link to="/"><div className={styles.header__logo}>Movie portal</div></Link>
          <div className={styles.header__search_block}>
            {searchValue && <img onClick={()=> setSearchValue('')} src='img/close.svg' alt='clear_search' className={styles.clear_search_btn}/>}
            <input onChange={onChangeSearchInput} value={searchValue} className={styles.header__search_input} placeholder="Search..." />
          </div>
          <div className={styles.btn_grup}>
            <button onClick={toggleThemeLight} className={styles.btn_theme}>Light</button>
            <button onClick={toggleThemeDark} className={styles.btn_theme}>Dark</button>
          </div>
        </div>
      </header>
    )
}

export default Header