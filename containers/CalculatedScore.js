import {connect} from 'react-redux';
import Results from '../components/Results';

const mapStateToProps = (state, ownProps) => {
  console.log('answers', state.answers.size);
  console.log('questions', state.questions.length);
  return {
    isVisible: state.answers.size === state.questions.length,
    currentResults: state.answers.reduce((a, b) => parseInt(a) + parseInt(b)),
  };
};

const CalculatedScore = connect(
  mapStateToProps
)(Results);

export default CalculatedScore;
