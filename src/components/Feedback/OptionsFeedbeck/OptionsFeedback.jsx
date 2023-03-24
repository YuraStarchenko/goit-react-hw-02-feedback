import PropTypes from 'prop-types';
import { List, Item, Btn } from './OptionsFeedback.styled.js';

export const OptionsFeedback = ({ options, feedbackClick }) => {
  return (
    <List>
      {options.map((el, index) => (
        <Item key={index}>
          <Btn type="button" onClick={feedbackClick}>
            {el}
          </Btn>
        </Item>
      ))}
    </List>
  );
};

OptionsFeedback.propTypes = {
  options: PropTypes.array.isRequired,
  feedbackClick: PropTypes.func.isRequired,
};