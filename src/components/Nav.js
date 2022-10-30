import React from 'react';
import {Link} from 'react-router-dom'


function Nav(){
    return (
      <div className="wrap__content_main">
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__list_item">
              <Link to="/" className="nav__list_item_link">Films</Link>
              </li>
            <li className="nav__list_item">
              <Link to="/favorits" className="nav__list_item_link">Favorits</Link>
              </li>
          </ul>
        </nav>
        </div>
    )
}
export default Nav