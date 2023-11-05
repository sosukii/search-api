import { useRouteError } from 'react-router-dom';
import styles from './style.module.css';

export const ErrorPage: React.FC = () => {
  const error: unknown = useRouteError();
  console.error(error);

  return (
    <div className={styles.errorWrap}>
      <h1 className={styles.title}>Oops!</h1>
      <p>Wow! We had epic bug... Grab a cup of coffe before we fix it ☕</p>
      <p>
        <i>{(error as Error)?.message || (error as { statusText?: string })?.statusText}</i>
      </p>
    </div>
  );
};
