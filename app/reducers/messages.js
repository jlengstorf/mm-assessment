const messages = (state = [], action) => {

  switch (action.type) {
    case 'SAVE_MESSAGES':
      state = action.messages;
  }

  return state;

};

export default messages;
