import React from 'react';
import QuestionContainer from '../containers/QuestionContainer';

const Form = ({ questions = [] }) => {
  const questionComponents = questions.map(question => {
    return <QuestionContainer key={question.id} {...question} />;
  });

  return (
    <div>
      <h2 className="mm-assessment__heading">Website Assessment</h2>
      <p>
        Fill out this assessment to see how well your website is communicating 
        with the people who visit it.
      </p>
      <form className="mm-assessment__form mm-assessment__form--assessment">
        {questionComponents}
      </form>
    </div>
  );
};

export default Form;
