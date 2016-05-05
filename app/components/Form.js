import React from 'react';
import QuestionContainer from '../containers/QuestionContainer';

const Form = ({ questions = [], onQuestionsEmpty }) => {
  let loading = false;
  if (questions.length < 1) {
    onQuestionsEmpty();
    loading = true;
  }

  const classes = ['mm-assessment__questions'];
  loading && classes.push('mm-assessment__questions--loading');

  const questionComponents = questions.map(question => {
    return <QuestionContainer key={question.id} {...question} />;
  });

  return (
    <section className={classes.join(' ')}>
      <h2 className="mm-assessment__heading">Website Assessment</h2>
      <p>
        Fill out this assessment to see how well your website is communicating
        with the people who visit it.
      </p>
      <form className="mm-assessment__form mm-assessment__form--assessment">
        {questionComponents}
      </form>
    </section>
  );
};

export default Form;
