import Logo from './img/logo.png'
import { Link } from "react-router-dom";

function Header (){
    return(
        <header className="header">
        <div className="wrap__content_header">
          <img src={Logo} alt="Logo" className="header__logo" />
          <Link to="/"><img src='/img/logo.png' alt="Logo" className="header__logo" /></Link>
          <div className="header__search_block">
            <input className="header__search_input" placeholder="Search" />
          </div>
            <div className="swiper_theme">Dark theme</div>
        </div>
      </header>
    )
}
export default Header