import React, { Component } from 'react';
import Section from 'components/Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';

class LeaveFeedback extends Component {
  static defaultOptionButtons = ['good', 'neutral', 'bad'];

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = e => {
    this.setState(prevState => {
      return {
        [e.target.name]: prevState[e.target.name] + 1,
      };
    });
  };

  totalFedbacks = () => {
    return Object.values(this.state).reduce((acc, val) => acc + val, 0);
  };

  positivePercentage = () => {
    return Number(((this.state.good / this.totalFedbacks()) * 100).toFixed(2));
  };

  render() {
    const buttons = LeaveFeedback.defaultOptionButtons;
    const { good, neutral, bad } = this.state;
    const totalFedbacks = this.totalFedbacks();
    const positivePercentage = this.positivePercentage();

    return (
      <>
        <Section title="Please leave Feedback">
          <FeedbackOptions buttons={buttons} handleFn={this.handleClick} />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            bad={bad}
            neutral={neutral}
            total={totalFedbacks}
            positivePercentage={positivePercentage}
          />
        </Section>
      </>
    );
  }
}

export default LeaveFeedback;
