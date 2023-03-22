import { Component } from 'react';
import { GlobalStyle } from '../GlobalStyle';
import { Container } from './Container.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
	};
	
  render() {
    return (
      <Container>
        <GlobalStyle />
      </Container>
    );
  }
}
