import {connect} from 'react-redux';
import {saveMessages} from '../actions';
import {getDataFromApi} from '../utils';
import Results from '../components/Results';

const mapStateToProps = (state, ownProps) => {
  const currentScore = state.answers.reduce((a, b) => parseInt(a) + parseInt(b)) || 0;
  const highScore = state.questions.length * 2;

  return {
    isVisible: state.answers.size === state.questions.length,
    currentResults: Math.round( currentScore / highScore * 100 ),
    messages: state.messages,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onMessagesEmpty: () => {
      getDataFromApi(window.MM_WP_API_URL + '/acf/options/messages')
        .then(response => {
          dispatch(saveMessages(response));
        });
    }
  };
}

const CalculatedScore = connect(
  mapStateToProps,
  mapDispatchToProps
)(Results);

export default CalculatedScore;
