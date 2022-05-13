import {v4} from 'uuid';

class Match {
  static get TEAM_ONE() {
    return "team_one";
  }
  static get TEAM_TWO() {
    return "team_two";
  }
  constructor(team_one, team_two) {
    this.id = v4()
    this.team_one = team_one
    this.team_two = team_two
    this.winner = null
    this.score_one = 0
    this.score_two = 0
  }
  setWinner(winner) {
    this.winner = winner
  }
  endMatch() {
    return this.winner != null;
  }
}

export default Match;