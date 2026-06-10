import css from './EmptyState.module.css';

export default function EmptyState() {
  return (
    <div className={css.wrapper}>
      <p className={css.message}>No notes found. Create your first note!</p>
    </div>
  );
}
