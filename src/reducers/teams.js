import Team from '../models/Team';
import { ADD_TEAM } from '../constants';

export const teams = (state = [
  new Team("Test1", null),
  new Team("Test2", null),
  new Team("Test3", null),
  new Team("Test4", null),
  new Team("Test5", null)
], action) => {
  switch(action.type) {
    case ADD_TEAM:
      let team = action.team;
      let teams = [...state];
      teams.push(team)
      return teams;
      
    default:
      return state
  }  
}