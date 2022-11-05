import React from 'react';
import {Link} from 'react-router-dom'
import styles from './style/Nav.module.scss'


function Nav(){
    return (
      <div className={styles.wrap__content_main}>
        <nav className={styles.nav}>
          <ul className={styles.nav__list}>
            <li className={styles.nav__list_item}>
              <Link to="/" className={styles.nav__list_item_link}>Films</Link>
              </li>
            <li className={styles.nav__list_item}>
              <Link to="/favorits" className={styles.nav__list_item_link}>Favorits</Link>
              </li>
          </ul>
        </nav>
        </div>
    )
}
export default Nav