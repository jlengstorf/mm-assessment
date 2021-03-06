import React from 'react';
import QuestionAnswer from '../containers/QuestionAnswer';

const Question = ({ id, question, instructions = false, answers, isAnswered }) => {
  const answerComponents = answers.map(answer => (<QuestionAnswer key={answer.id} name={id} {...answer} />));

  const classes = ['mm-assessment__input-group', 'mm-assessment__input-group--question', 'mm-question'];
  if (isAnswered) {
    classes.push('mm-question--answered');
  }

  return (
    <div className={classes.join(' ')}>
      <h3 className="mm-question__heading">
        {question}
      </h3>
      {instructions && (
        <p className="mm-question__instructions">
          {instructions}
        </p>
      )}
      <ul className="mm-question__radio-group">
        {answerComponents}
      </ul>
    </div>
  );
};

export default Question;
