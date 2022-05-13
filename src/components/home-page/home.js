import React, {Component} from 'react';
import './home.css';

class HomePage extends Component {
  constructor(props) {
    super (props)
    console.log(props);

    this.renderTeams = this.renderTeams.bind(this);
  }
  renderTeams(){
    var team_renders = [];
    this.props.teams.map (function(team) {
      team_renders.push(
        <p>{team.name}</p>
      )
    });
    return team_renders;
  }
  render () {
    return (
      <h1>Tournament Tracker</h1>
      (this.renderTeams())
    );
  }
}

export default HomePage;