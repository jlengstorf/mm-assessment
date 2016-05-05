import React from 'react';
import AssessmentForm from '../containers/AssessmentForm';
import CalculatedScore from '../containers/CalculatedScore';

const App = () => {
  return (
    <div>
      <AssessmentForm />
      <CalculatedScore />
    </div>
  );
};

export default App;
