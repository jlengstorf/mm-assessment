import {connect} from 'react-redux';
import Question from '../components/Question';

const mapStateToProps = (state, ownProps) => {
  return {
    isAnswered: !!state.answers.filter((q, id) => id === ownProps.id).size,
  };
};

const QuestionContainer = connect(
  mapStateToProps
)(Question);

export default QuestionContainer;
