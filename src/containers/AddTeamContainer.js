import { connect } from "react-redux";
import AddTeamPage from "../components/add-team/add-team";
import { addTeam } from "../actions";

const mapStateToProps = state => ({

})
const mapDispatchToProps = dispatch => ({
  addTeam: (team) => {
    dispatch(addTeam(team));
  }
})

export default connect(
  mapDispatchToProps,
  mapStateToProps
)(AddTeamPage)