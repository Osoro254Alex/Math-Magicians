import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Eachbtn from './Eachbtn';
import styles from './Calculator.module.css';

const Calculator = () => {
  const info = { total: 0, next: null, operation: null };
  const [state, setState] = useState(info);

  const clickReceived = (event) => {
    const buttonName = event.target.innerText;
    const answer = calculate(state, buttonName);
    setState(answer);
  };

  const { total, operation, next } = state;
  return (
    <div className={styles.calculator}>
      <h2>Lets do some Math!</h2>
      <div>
        <div className={styles.answer}>
          {total}
          {operation}
          {next}
        </div>
        <div className={styles.operations}>
          <Eachbtn click={clickReceived} text="AC" />
          <Eachbtn click={clickReceived} text="+/-" />
          <Eachbtn click={clickReceived} text="%" />
          <Eachbtn click={clickReceived} class={styles.maths} text="&#247;" />
          <Eachbtn click={clickReceived} text="7" />
          <Eachbtn click={clickReceived} text="8" />
          <Eachbtn click={clickReceived} text="9" />
          <Eachbtn click={clickReceived} class={styles.maths} text="x" />
          <Eachbtn click={clickReceived} text="4" />
          <Eachbtn click={clickReceived} text="5" />
          <Eachbtn click={clickReceived} text="6" />
          <Eachbtn click={clickReceived} class={styles.maths} text="-" />
          <Eachbtn click={clickReceived} text="1" />
          <Eachbtn click={clickReceived} text="2" />
          <Eachbtn click={clickReceived} text="3" />
          <Eachbtn click={clickReceived} class={styles.maths} text="+" />
          <Eachbtn click={clickReceived} class={styles.zero} text="0" />
          <Eachbtn click={clickReceived} text="." />
          <Eachbtn click={clickReceived} class={styles.maths} text="=" />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
