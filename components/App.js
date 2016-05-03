import React from 'react';
import AssessmentForm from '../containers/AssessmentForm';
import CalculatedScore from '../containers/CalculatedScore';

const App = () => {
  return (
    <div>

      <section className="mm-assessment__questions">
        <AssessmentForm />
      </section>

      <CalculatedScore />

    </div>
  );
};

export default App;
