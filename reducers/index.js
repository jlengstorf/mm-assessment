import {combineReducers} from 'redux';
import questions from './questions';
import answers from './answers';

const assessment = combineReducers({
  questions,
  answers,
});

export default assessment;
