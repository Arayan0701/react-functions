import React, { Component } from "react";

class stringstate extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      age: "",
    };
  }
  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };
  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };
  handleAgeChange = (event) => {
    this.setState({ age: event.target.value });
  };

  consolelog = () => {
    console.log(this.state.name);
    console.log(this.state.email);
    console.log(this.state.age);
  };

  render() {
    const { name, email, age } = this.state;
    return (
      <>
       
        
        <h2>Name: {name}</h2>
        <input
        
          type="text"
          value={name}
          onChange={this.handleNameChange}
        />
         <h2>Email: {email}</h2>
        <input
          type="email"
          value={email}
          onChange={this.handleEmailChange}
        />
        <h2>Age: {age}</h2>
        <input
          type="number"
          value={age}
          onChange={this.handleAgeChange}
        />
        
      </>
    );
  }
}

export default stringstate;
