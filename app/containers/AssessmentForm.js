import {connect} from 'react-redux';
import {saveQuestions} from '../actions';
import {getDataFromApi} from '../utils';
import Form from '../components/Form';

const mapStateToProps = (state, ownProps) => {
  return {
    questions: state.questions,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onQuestionsEmpty: () => {
      // TODO set this in props or, better, and env var
      getDataFromApi(window.MM_WP_API_URL + '/acf/options/questions')
        .then(response => {
          dispatch(saveQuestions(response));
        });
    }
  };
}

const AssessmentForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);

export default AssessmentForm;
