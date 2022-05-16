import React, { Component } from 'react';
import './add-team.css';
import Team from '../../models/Team';

class AddTeamPage extends Component {
  constructor(props) {
    super (props)
    console.log(props)

    this.state = {
      team: new Team("","")
    }

    this.submitTeam = this.submitTeam.bind(this)
  }
  submitTeam(){
    let team = this.state;
    console.log(team);
  }
  render () {
    return (
    <div className = "home-page container">
      <h1 className='text-center'>Add Team</h1>
      <form>

        <button onClick = {this.submitTeam} type = "button" className = "btn-block btn-success"> Submit </button>
      </form>
      
    </div>
    );
  }
}

export default AddTeamPage;