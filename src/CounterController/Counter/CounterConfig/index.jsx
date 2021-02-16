import React from "react";
import styles from "./CounterConfig.module.css";

const CounterConfig = (props) => {
  const {
    step,
    isForward,
    counterSetStep,
    counterSetDirection,
    isAutoclickOn,
    autoclickStop,
    autoclickStart,
    autoclickInterval,
    intervalSetStep
  } = props;

  const stepChangeHandler = ({ target: { value } }) => counterSetStep(value);

  const directionChangeHandler = () => counterSetDirection();

  const autoclickHandler = () => isAutoclickOn ? autoclickStop() : autoclickStart();

  const intervalChangeHandler = ({ target: { value } }) => intervalSetStep(value);

  return (
    <div className={styles.counterSetupsWrapper}>
      <h1 className={styles.counterSettingHeader}>Settings:</h1>
      <div>
        <p>Step:</p>
        <input
          type="number"
          name="stepInput"
          onChange={stepChangeHandler}
          value={step}
        />
      </div>
      <div>
        <p>Direction: {isForward ? "Up" : "Down"}</p>

        <button className={styles.directBtn} onClick={directionChangeHandler}>
          Reverse
        </button>
      </div>
      <div>
        <p>Autoclick: {isAutoclickOn ? "On" : "Off"}</p>
        <button className={styles.directBtn} onClick={autoclickHandler}>
        {isAutoclickOn ? "Off" : "On"} AC
        </button>
        <input
          type="number"
          name="intervalInput"
          onChange={intervalChangeHandler}
          value={autoclickInterval}
        />
      </div>
    </div>
  );
};

export default CounterConfig;
