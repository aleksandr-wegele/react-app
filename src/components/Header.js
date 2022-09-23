import Logo from './img/logo.png'

function Header (){
    return(
        <header className="header">
        <div className="wrap__content_header">
          <img src={Logo} alt="Logo" className="header__logo" />
          <div className="header__search_block">
            <input className="header__search_input" placeholder="Search" />
          </div>
            <div className="swiper_theme">Dark theme</div>
        </div>
      </header>
    )
}
export default Header