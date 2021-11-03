import React, { Component } from "react";
import {BrowserRouter, Route} from 'react-router-dom'
import Content from "./components/contentContainer/Content";

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Route exact path="/" component={ Content } />
      </BrowserRouter>
    );
  }
}

export default App;
