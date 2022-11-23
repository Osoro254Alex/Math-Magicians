import React from 'react';
import styles from './Home.module.css';

class Home extends React.PureComponent {
  render() {
    return (
      <div className={styles.home}>
        <h2 className={styles.head}>
          Welcome to our page!
        </h2>
        <p>
          Calculator is important do the complex calculation and save time to solve
          them. Calculator helps us to get answer fast with blink of eye for many
          complex and lengthy mathematical problems . hence its save our time , labor
          and reduce the waste of papers. It saves time and omits the chances of error
          and makes the complex calculations easy
        </p>
      </div>
    );
  }
}

export default Home;
