import React, { Component } from 'react';
import Main from './components/Main'
import './App.css';
import {BrowserRouter} from "react-router-dom";
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Main/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
