import {Map} from 'immutable';
const answers = (state = Map(), action) => {
  switch (action.type) {
    case 'SAVE_ANSWER':
      state = state.set(action.answer.id, action.answer.value);
      break;

    default:
  }

  return state;
};

export default answers;
