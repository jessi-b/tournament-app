import {v4} from 'uuid';

class Team {
  constructor(name) {
    this.id = v4()
    this.name = name
  }
}

export default Team;