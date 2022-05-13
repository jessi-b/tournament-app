import Team from '../components/models/Team'

export const teams = (state = [
  new Team("Test1", null),
  new Team("Test2", null),
  new Team("Test3", null),
  new Team("Test4", null),
  new Team("Test5", null),
], action) => {
  return state
}