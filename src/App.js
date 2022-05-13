import './App.css';
import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import home from './containers/home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={home} />
        </Router>
      </div>
    );
  }
}

export default App;