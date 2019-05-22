import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

export default class StaticTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      s: 0,
      m: 0,
      h: 0
    }
    // this.setInt = this.setInt.bind(this)
    // this.clearInt = this.clearInt.bind(this)
    // this.reset = this.reset.bind(this)
  }

  timeSTring(x) {
    return (x < 10) ? '0' + x : '' + x;
  }
  setInt = () => {
    this.x = setInterval(this.myTimer, 1000)
  }
  clearInt = () => {
    clearInterval(this.x)
  }
  reset = () => {
    this.clearInt()
    this.setState({ s: 0, m: 0, h: 0 });
  }
  myTimer = () => {
    //this.state.s++
    this.setState({ s: this.state.s + 1 })
    if (this.state.s === 60) {
      this.setState({ s: 0 })
      this.setState({ m: this.state.m + 1 })
      if (this.state.m === 60) {
        this.setState({ m: 0 })
        this.setState({ h: this.setState.h + 1 })
      }
    }
    console.log(this.state.s)
  }

  render() {
    return (
      <div className="StaticTimer">
        <div className="Time" >{this.timeSTring(this.state.h)}:{this.timeSTring(this.state.m)}:{this.timeSTring(this.state.s)}</div>
        <div className="Tags">Hour &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; Minute &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; Second</div>
        <div className="buttons">
          <Button className="Start" onClick={this.setInt} variant="warning">Start</Button>
          <Button className="Pause" onClick={this.clearInt} variant="primary">Pause</Button>
          <Button className="Reset" onClick={this.reset} variant="danger">Reset</Button>
        </div>
      </div>

    )
  }
}
