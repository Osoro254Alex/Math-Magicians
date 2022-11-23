import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

class Navbar extends React.PureComponent {
  render() {
    return (
      <nav>
        <Router>
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
        </Router>
      </nav>
    );
  }
}

export default Navbar;
