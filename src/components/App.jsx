import LeaveFeedback from './Feedback/LeaveFeedback';
import css from './Container.module.css';

export const App = () => {
  return (
    <div className={css.container}>
      <div className={css.title}>
        <h1>Expresso Cafe</h1>
      </div>
      <LeaveFeedback />
    </div>
  );
};
