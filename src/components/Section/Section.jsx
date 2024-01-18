import css from '../Section/section.module.css';

const Section = ({ title, children }) => {
  return (
    <div className={css.section}>
      <h3 className={css.title}>{title}</h3>
      <div>{children}</div>
    </div>
  );
};

export default Section;
