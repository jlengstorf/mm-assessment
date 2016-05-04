import React from 'react';

const QuestionOption = ({ name, id, label, value, onChangeHandler }) => (
  <li className={"mm-question__radio-item"}>
    <input className="mm-question__input mm-question__input--radio"
           id={`${name}_${id}`}
           name={name}
           type="radio"
           value={value}
           onChange={onChangeHandler}
    />
    <label className="mm-question__label"
           htmlFor={`${name}_${id}`}>
      {label}
    </label>
  </li>
);

export default QuestionOption;
