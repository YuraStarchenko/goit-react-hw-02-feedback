import PropTypes from 'prop-types';

export const OptionsFeedback = ({ step }) => {
  return (
    <div>
      <button type="button">Good {step}</button>
      <button type="button">Neutral {step}</button>
      <button type="button">Bad {step}</button>
    </div>
  );
};

