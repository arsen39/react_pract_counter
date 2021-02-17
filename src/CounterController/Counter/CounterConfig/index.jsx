import React from "react";
import styles from "./CounterConfig.module.css";
import cog from "./cog.svg";
import classNames from "classnames";

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
    intervalSetStep,
    isSetsOpen,
    setsOpenClose,
  } = props;

  const stepChangeHandler = ({ target: { value } }) => counterSetStep(value);

  const settingAppendHandler = (e) => setsOpenClose();

  const directionChangeHandler = () => counterSetDirection();

  const autoclickHandler = () =>
    isAutoclickOn ? autoclickStop() : autoclickStart();

  const intervalChangeHandler = ({ target: { value } }) => intervalSetStep(value);

  const classesCSS = classNames(styles.counterSetupsInnerWrapper, {
    [styles.hidden]: !isSetsOpen,
  });

  return (
    <div className={styles.counterSetupsWrapper}>
      <img src={cog} alt="Open Settings" onClick={settingAppendHandler}/>
      <div id="counterSetupsInnerWrapper" className={classesCSS}>
        <p>Autoclick will working for 30s</p>
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
        </div>
        <div>
          <p>Autoclicks per second:</p>
          <input
            type="number"
            name="intervalInput"
            onChange={intervalChangeHandler}
            value={autoclickInterval}
          />
        </div>
      </div>
    </div>
  );
};

export default CounterConfig;
