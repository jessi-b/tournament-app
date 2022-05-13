import {v4} from 'uuid';

class Team {
  constructor(name) {
    this.id = v4()
    this.name = name
    // this.addProp = addProp  // placeholder for another property later
  }
}

export default Team;