import { Component } from 'react';
import { Container } from './Container.styled';
import { GlobalStyle } from '../GlobalStyle';
import { Statistics } from './Feedback/Statistics/Statistics';
import { OptionsFeedback } from './Feedback/OptionsFeedbeck/OptionsFeedback';
import { Section } from './Feedback/Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  feedbackBtnClick = event => {
    const value = event.target.textContent;
    this.setState(prevState => {
      return {
        [value]: prevState[value] + 1,
      };
    });
  };

  render() {
    const { good, bad, neutral } = this.state;
    return (
      <Container>
        <Section title={'Please leave feedback'}>
          <OptionsFeedback
            feedbackClick={this.feedbackBtnClick}
            options={Object.keys(this.state)}
          />
        </Section>
        <Section title={'Statistics'}>
          <Statistics good={good} neutral={neutral} bad={bad} />
        </Section>
        <GlobalStyle />
      </Container>
    );
  }
}
