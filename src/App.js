import './App.css';
import React, {Component} from 'react';
import HomePage from './components/home-page/home';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={HomePage} />
        </Router>
      </div>
    );
  }
}

export default App;