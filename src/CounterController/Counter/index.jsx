import React, { Component } from "react";
import CounterConfig from "./CounterConfig";
import CounterWrapper from "./CounterWrapper";
import styles from "./Counter.module.css"

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counterValue: 0,
      isForward: true,
      autoclickInterval: 1,
      isAutoclickOn: true,
      intervalKey: null,
      timeoutKey: null,
      isSetsOpen: false
    };
  }
  
  autoclickHandler = () => {
    const interval = Math.round(1000/this.state.autoclickInterval);
    this.setState({
      intervalKey: setInterval (() => this.counterAction(), interval)
    })
  }

  setsOpenClose = () => {
    this.setState({
      isSetsOpen: !this.state.isSetsOpen
    })
  }

  autoclickStart = () => {
    if (!this.state.isAutoclickOn) {
      this.autoclickHandler();
      this.setState({
        isAutoclickOn: true
      })
    }
  }

  intervalSetStep = (v) => {
    this.setState({
      autoclickInterval: isNaN(v)||v<1?1:Number(v)
    });
    this.autoclickStop();
    this.autoclickHandler();
      this.setState({
        isAutoclickOn: true
      })
  };

  autoclickStop = () => {
    clearInterval(this.state.intervalKey);
    clearTimeout(this.state.timeoutKey);
    this.setState({
      intervalKey: null,
      isAutoclickOn: false
    })
  }

  counterAction = () => {
    const {step} = this.props;
    const { counterValue: value, isForward } = this.state;
    this.setState({
      counterValue: isForward ? value + step : value - step,
    });
  };

  counterSetDirection = () => {
    const { isForward } = this.state;
    this.setState({
      isForward: !isForward,
    });
  };

  componentDidMount = () => {
    this.autoclickHandler();
    this.setState({
      timeoutKey: setTimeout(()=> this.autoclickStop(),30000)
    })
    
  }

  render() {
    return (
      <section className={styles.counterBox}>
        <CounterWrapper
          counterValue={this.state.counterValue}
          counterAction={this.counterAction}
        />
        <CounterConfig
          step={this.props.step}
          isForward={this.state.isForward}
          counterSetStep={this.props.counterSetStep}
          counterSetDirection={this.counterSetDirection}
          isAutoclickOn={this.state.isAutoclickOn}
          autoclickStart={this.autoclickStart}
          autoclickStop={this.autoclickStop}
          autoclickInterval={this.state.autoclickInterval}
          intervalSetStep={this.intervalSetStep}
          isSetsOpen={this.state.isSetsOpen}
          setsOpenClose={this.setsOpenClose}
        />
      </section>
    );
  }
}

export default Counter;
