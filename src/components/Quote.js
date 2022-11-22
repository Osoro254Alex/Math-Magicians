import React from 'react';
import styles from './Quote.module.css';

const Quote = () => (
  <div className={styles.quote}>
    <ul>
      <li>
        I hope that seeing the excitement of solving this problem will make
        mathematicians realize that there are lots and lots of other problems in
        mathematics which are going to be just as challenging in the future. —
        <span>
          <big>
            <b>Andrew Wiles</b>
          </big>
        </span>
      </li>
      <li>
        If people do not believe that mathematics is simple, it is only because
        they do not realize how complicated life is. —
        <span>
          <big>
            <b>John von Neumann</b>
          </big>
        </span>
      </li>
    </ul>
  </div>
);

export default Quote;
