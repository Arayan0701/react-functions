import React, { Component } from "react";

class RenderCond extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: false,
    };
  }
  toggle = () => {
    this.setState({ isOn: !this.state.isOn });
  }
  setTextcolor = (color) => {
    this.setState({ textColor: color });
  }
  setBackgroundcolor = (color) => {
    this.setState({ backgroundColor: color });
  };
  render() {
    return (
      <>
      <div>
        <br />
        <button onClick={this.toggle}>{this.state.isOn ? "ON" : "OFF"}</button>
        <button onClick={this.toggle}>Toggle Status</button>

        <p>Status : {this.state.isOn ? "Active" : "InActive"}</p>
        </div>
                 <h3>Change the text color</h3>
        <div>
            <button onClick={() => this.setTextcolor("red")}>Red </button>
            <button onClick={() => this.setTextcolor("blue")}>Blue </button>
            <button onClick={() => this.setTextcolor("green")}>Green </button>
            <button onClick={() => this.setTextcolor("yellow")}>Yellow </button>
            <br/>
            </div>
            <div>
            <h3>Change the background color</h3>
            <button onClick={() => this.setBackgroundcolor("Red")}>Red </button>
            <button onClick={() => this.setBackgroundcolor("blue")}>Blue </button>
            <button onClick={() => this.setBackgroundcolor("green")}>Green </button>
            <button onClick={() => this.setBackgroundcolor("yellow")}>Yellow </button>
            <h2 style={{ color: this.state.textColor, backgroundColor: this.state.backgroundColor }}>
                This is a sample text with dynamic colors.
            </h2>

        </div>
      </>
    );
  }
}

export default RenderCond;
