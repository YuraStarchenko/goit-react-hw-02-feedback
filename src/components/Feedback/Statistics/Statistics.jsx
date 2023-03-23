import PropTypes from 'prop-types';

export const Statistics = ({ good, neutral, bad, total, percent }) => {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {percent}%</p>
    </div>
  );
};

Statistics.propTypes = {
  Good: PropTypes.number.isRequired,
  Neutral: PropTypes.number.isRequired,
  Bad: PropTypes.number.isRequired,
  Total: PropTypes.number.isRequired,
  percent: PropTypes.number.isRequired,
};

