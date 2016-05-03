export const saveAnswer = (id, value) => {
  return {
    type: 'SAVE_ANSWER',
    answer: {
      id,
      value,
    },
  };
};
