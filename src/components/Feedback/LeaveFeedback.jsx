import { useState } from 'react';
import Section from 'components/Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';

const defaultOptionButtons = ['good', 'neutral', 'bad'];

const LeaveFeedback = () => {
  const [feedbacks, setFeedbacks] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleClick = e => {
    setFeedbacks(prevFeedbacks => {
      return {
        ...prevFeedbacks,
        [e.target.name]: prevFeedbacks[e.target.name] + 1,
      };
    });
  };

  const totalFedbacks = () => {
    return Object.values(feedbacks).reduce((acc, val) => acc + val, 0);
  };

  const positivePercentage = () => {
    return Number(((feedbacks.good / totalFedbacks()) * 100).toFixed(2));
  };

  return (
    <>
      <Section title="Please leave Feedback">
        <FeedbackOptions
          buttons={defaultOptionButtons}
          handleFn={handleClick}
        />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={feedbacks.good}
          bad={feedbacks.bad}
          neutral={feedbacks.neutral}
          total={totalFedbacks()}
          positivePercentage={positivePercentage()}
        />
      </Section>
    </>
  );
};

export default LeaveFeedback;
