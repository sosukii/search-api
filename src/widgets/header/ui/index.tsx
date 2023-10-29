import { Component } from 'react';
import { SearchBar } from '@features/search-bar';
import css from './style.module.css';
import '@shared/styles/global.css';

export class Header extends Component {
  state = {};

  render() {
    return (
      <header className={css.header}>
        <div className="container">
          <SearchBar />
        </div>
      </header>
    );
  }
}
