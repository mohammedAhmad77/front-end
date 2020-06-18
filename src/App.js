import React, { Component } from 'react';
import PageRouter from "./PageRoutes";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
     
    }
  }
  render() {
    return (
      <PageRouter />
    );
  }
}

export default App;