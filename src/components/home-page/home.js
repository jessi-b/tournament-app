import React, { Component } from 'react';
import './home.css';
import { BrowserRouter as Redirect } from 'react-router-dom';

class HomePage extends Component {
  constructor(props) {
    super (props)
    console.log(props);

    this.state = {
      addTeam: false
    }

    this.renderTeams = this.renderTeams.bind(this);
    this.addTeam = this.addTeam.bind(this);
  }
  addTeam() {
    let new_state = this.state;
    new_state.addTeam = true;
    this.setState(new_state)
  }
  renderTeams(){
    var team_renders = [];
    this.props.teams.map(function(team) {
      team_renders.push(
        <p>{team.name}</p>
      )
    });
    return team_renders;
  }
  render () {
    if (this.state.addTeam === true){
      return (
        <Redirect push to = "/add-team"/>
      )
    }
    return (
    <div className = "home-page container">
      <h1 className = "text-center"> Tournament Tracker </h1>
      <button onClick = {this.addTeam()} type = "button" className = "btn-block btn-primary"> Add Team </button>
      <div className = "team-view">
        {/* {this.renderTeams()} */}
      </div>
    </div>
    );
  }
}

export default HomePage;