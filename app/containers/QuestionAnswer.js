import {connect} from 'react-redux';
import {saveAnswer} from '../actions';
import QuestionOption from '../components/QuestionOption';

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChangeHandler: (event) => {
      const input = event.currentTarget;
      dispatch(saveAnswer(input.name, input.value));
    },
  };
};

const QuestionAnswer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionOption);

export default QuestionAnswer;
