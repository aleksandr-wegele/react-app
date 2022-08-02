import './Header.css';
import LogoHeader from '../../img/logo.svg'
import HeaderSearch from '../../img/search.svg'

function Header() {
  return (
    <header className="Header">
      <img src={LogoHeader} alt='Logo' className='Header__logo' />
      <div className="header__search-block">
        <img src={HeaderSearch} className="header__search-block_img" alt="search" />
        <input className="search__block_search" placeholder="Поиск..." />
      </div>
      <div>
        свайпер темы
      </div>
    </header>
  );
}

export default Header;
