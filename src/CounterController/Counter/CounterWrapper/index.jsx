import React from 'react';
import styles from './CounterWrapper.module.css'

const CounterWrapper = (props) => {
  const {counterValue, counterAction} = props;

  const actionBtnHandler = function (e) {
    counterAction();
  }
  
  return (
    <div className={styles.counterWrapper}>
      <p className={styles.counterDisplay}>{counterValue}</p>
      <button className={styles.counterActionBtn} onClick={actionBtnHandler}>CLICK</button>
    </div>
  );
}

export default CounterWrapper;
