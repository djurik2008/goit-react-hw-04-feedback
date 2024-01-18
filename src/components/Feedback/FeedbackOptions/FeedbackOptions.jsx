import css from './FeedbackOptions.module.css';
const FeedbackOptions = ({ buttons, handleFn }) => {
  const btnMarckup = buttons.map(button => (
    <li key={button} className={css.item}>
      <button onClick={handleFn} name={button} className={css.btn}>
        {button}
      </button>
    </li>
  ));

  return <ul className={css.list}>{btnMarckup}</ul>;
};

export default FeedbackOptions;
