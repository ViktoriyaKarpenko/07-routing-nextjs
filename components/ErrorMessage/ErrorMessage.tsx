import css from './ErrorMessage.module.css';

interface ErrorMessageProps {
  message?: string;
}

export default function ErrorMessage({
  message = 'Something went wrong. Please try again.',
}: ErrorMessageProps) {
  return (
    <div className={css.wrapper}>
      <p className={css.message}>{message}</p>
    </div>
  );
}
