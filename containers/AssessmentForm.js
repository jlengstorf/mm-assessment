import {connect} from 'react-redux';
import Form from '../components/Form';

const mapStateToProps = (state, ownProps) => {
  return {
    questions: state.questions,
  };
};

const AssessmentForm = connect(
  mapStateToProps
)(Form);

export default AssessmentForm;
