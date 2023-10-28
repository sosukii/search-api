import { Component } from 'react';
import { SearchBar } from '@features/search-bar';

export class Header extends Component {
  state = {};

  render() {
    return (
      <header>
        <SearchBar />
      </header>
    );
  }
}
