import {combineReducers} from 'redux';
import questions from './questions';
import answers from './answers';
import messages from './messages';

const assessment = combineReducers({
  questions,
  answers,
  messages,
});

export default assessment;
