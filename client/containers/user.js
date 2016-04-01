import { connect } from 'react-redux';
import User from '../components/user/User';
import { SaveChanges, switchEditMode, fetchUserInfo } from '../actions/user';
import { fetchConversations } from '../actions/messageFeed.actions'

const mapStateToProps = (state, ownProps) => {
  return {
    selfUsername: state.user.username,
    self_id: state.user.id,
    artist: state.artist,
    editMode: state.user.editMode,
    location: ownProps,
    showGridAndNotMessageFeed: state.view.displayGridAndNotMessageFeed,
    displayGridAndNotMessageFeed: state.view.displayGridAndNotMessageFeed,

    formData: state.form.profileInformation
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    switchEditMode: () => {
      dispatch(switchEditMode());
    },
    saveChanges: (values) => {
      dispatch(SaveChanges(values));
    },
    toggleShowGridAndNotMessageFeed: () => {
      dispatch({type: 'TOGGLE_GRID_MESSAGE_FEED'});
    },
    fetchConversations: (self_id) => {
      dispatch(fetchConversations(self_id));
    },
    updateField: (field, value) => {
      dispatch({
        type: 'EDIT_PROFILE_INFORMATION',
        payload: {
          field: field,
          value: value
        }
      })
    }
  }
}

const container = connect(
  mapStateToProps,
  mapDispatchToProps
)(User);

export default container;