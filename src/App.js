import './App.css';
import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
//containers
import HomeContainer from './containers/HomeContainer'
//pages
import AddTeamPage from './components/add-team/add-team';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path = "/" component={HomeContainer} />
          <Route path = "/add-team" component={AddTeamPage} />
        </Router>
      </div>
    );
  }
}

export default App;