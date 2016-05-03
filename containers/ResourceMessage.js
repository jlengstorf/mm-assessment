import {connect} from 'react-redux';
import Message from '../components/Message';

const mapStateToProps = (state, ownProps) => {
  const filterAnswers = filterByIntVal.bind(null, state.answers);
  const addResources = mapResources.bind(null, state.questions);

  return {
    good: addResources(filterAnswers(2)),
    okay: addResources(filterAnswers(1)),
    bad: addResources(filterAnswers(0)),
  };
};

const filterByIntVal = (answers, matchValue) => {
  return answers.filter(value => parseInt(value) === matchValue);
};

const mapResources = (questions, answers) => {
  return answers.map((value, key) => {
    return {
      value: value,
      resource: questions.filter(q => q.id === key).pop().resource,
    };
  });
};

const ResourceMessage = connect(
  mapStateToProps
)(Message);

export default ResourceMessage;
