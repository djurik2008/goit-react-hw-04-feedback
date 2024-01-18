import css from './Statistics.module.css';
import NotificationMessage from '../NotificationMessage/NotificationMessage';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  if (!good && !neutral && !bad) {
    return <NotificationMessage message="There is no feedback" />;
  }
  return (
    <ul className={css.list}>
      <li className={css.item}>Good: {good}</li>
      <li className={css.item}>Neutral: {neutral}</li>
      <li className={css.item}>Bad: {bad}</li>
      <li className={css.item}>Total: {total}</li>
      <li className={css.item}>Positive Percentage: {positivePercentage}%</li>
    </ul>
  );
};
export default Statistics;
