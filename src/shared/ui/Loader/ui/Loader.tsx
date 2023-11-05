import { FC } from 'react';
import css from './style.module.css';

export const Loader: FC = () => {
  return (
    <div className={css.loader}>
      <div className={css.dot}></div>
      <div className={css.dot}></div>
      <div className={css.dot}></div>
      <div className={css.dot}></div>
      <div className={css.dot}></div>
    </div>
  );
};
