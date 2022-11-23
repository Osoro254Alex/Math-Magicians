import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

class Navbar extends React.PureComponent {
  render() {
    return (
      <nav>
        <h1 className={styles.header}>Math Magicians</h1>
        <ul className={styles.links}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          |
          <li>
            <NavLink to="/Calculator">Calculator</NavLink>
          </li>
          |
          <li>
            <NavLink to="/Quote">Quote</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
