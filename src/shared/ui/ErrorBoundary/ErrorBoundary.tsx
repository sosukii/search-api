import { Component, ReactNode } from 'react';
import css from './index.module.css';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  reloadPage = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className={css.body}>
          <h2>Oops..! Looks like something gone wrong... 🐈 (reload page!)</h2>

          <button onClick={() => window.location.reload()}>I got it~ Reload this page!</button>
        </div>
      );
    }
    return this.props.children;
  }
}
