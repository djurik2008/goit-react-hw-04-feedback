import css from './NotificationMessage.module.css';

const NotificationMessage = ({ message }) => {
  return <p className={css.message}>{message}</p>;
};

export default NotificationMessage;
