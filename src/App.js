import React, { Component } from "react";
import {BrowserRouter, Route} from 'react-router-dom'
import Content from "./components/contentContainer/Content";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={ Content } />
      </BrowserRouter>
    );
  }
}

export default App;
