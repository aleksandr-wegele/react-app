function Nav(){
    return (
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__list_item"><a href='/films' className="nav__list_item_link">Films</a></li>
            <li className="nav__list_item"><a href='/tv_series' className="nav__list_item_link">TV Series</a></li>
            <li className="nav__list_item"><a href='/favorite' className="nav__list_item_link">Favorite</a></li>
          </ul>
        </nav>
    )
}
export default Nav