import React, { Component } from 'react';
import Counter from './Counter';

class CounterController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1
    }
  }

  counterSetStep = (v) => {
    this.setState({
      step: isNaN(v)?1:Number(v)
    });
  };
  
  render() {
    return (
      <Counter step={this.state.step} counterSetStep={this.counterSetStep}/>
    );
  }
}

export default CounterController;
