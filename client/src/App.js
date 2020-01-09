import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <h1>Hello World</h1>
        </div>
      </Router>
    )
  }
}

export default App;
