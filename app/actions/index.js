export const saveAnswer = (id, value) => {
  return {
    type: 'SAVE_ANSWER',
    answer: {
      id,
      value,
    },
  };
};

export const saveMessages = (messages) => {
  return {
    type: 'SAVE_MESSAGES',
    messages,
  };
}

export const saveQuestions = (questions) => {
  return {
    type: 'SAVE_QUESTIONS',
    questions,
  };
}
