import React, { Component } from "react";
import {BrowserRouter, Route} from 'react-router-dom'
import Content from "./components/contentContainer/Content";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/to-do-list-react-styled-components" component={ Content } />
      </BrowserRouter>
    );
  }
}

export default App;
