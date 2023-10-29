import { Component } from 'react';
import { SearchBar } from '@features/search-bar';
import css from './style.module.css';
import '@shared/styles/global.css';

interface Props {
  onInputNewName?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClickNewName?: () => void;
}

export class Header extends Component<Props> {
  state = {};

  render() {
    return (
      <header className={css.header}>
        <div className="container">
          <SearchBar
            onInputNewName={this.props.onInputNewName}
            onClickNewName={this.props.onClickNewName}
          />
        </div>
      </header>
    );
  }
}
