import React, { Component } from 'react';
import './add-team.css';

class AddTeamPage extends Component {
  constructor(props) {
    super (props)
  }
  
  render () {
    return (
    <div className = "home-page container">
      <h1>Add Team</h1>
      <button type = "button" className = "btn-block btn-primary"> Add Team </button>
    </div>
    );
  }
}

export default AddTeamPage;