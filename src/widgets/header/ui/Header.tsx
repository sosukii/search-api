import { Component } from 'react';
import { SearchBar } from '@features/search-bar';
import { Button } from '@shared/ui/Button/Button';
import css from './style.module.css';
import '@shared/styles/global.css';

interface Props {
  onInputNewName?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClickNewName?: () => void;
  inputValue: string;
}
interface State {
  hasError: boolean;
}

export class Header extends Component<Props, State> {
  state = { hasError: false };

  handleError = () => {
    this.setState({ hasError: true });
  };

  render() {
    if (this.state.hasError) {
      throw new Error('You are testing Error Boundary! It is worked~');
    }
    return (
      <header className={css.header}>
        <div className="container">
          <SearchBar
            onInputNewName={this.props.onInputNewName}
            onClickNewName={this.props.onClickNewName}
            inputValue={this.props.inputValue}
          />
          <Button onClick={this.handleError}>Check Error Boundary</Button>
        </div>
      </header>
    );
  }
}
