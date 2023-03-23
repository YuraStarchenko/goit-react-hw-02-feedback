import { Component } from 'react';
import { GlobalStyle } from '../GlobalStyle';
import { Container } from './Container.styled';
import { Statistics } from './Feedback/Statistics/Statistics';
import { OptionsFeedback } from './Feedback/OptionsFeedbeck/OptionsFeedback';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <Container>
        <OptionsFeedback />
        <Statistics />
        <GlobalStyle />
      </Container>
    );
  }
}
