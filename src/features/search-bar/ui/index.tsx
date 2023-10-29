import { Component } from 'react';
import { InputSearch } from '@shared/ui/InputSearch';
import { Button } from '@shared/ui/Button';
import css from './style.module.css';

export class SearchBar extends Component {
  state = {};

  render() {
    return (
      <div className={css.bar}>
        <InputSearch />
        <Button>Go search!</Button>
      </div>
    );
  }
}
