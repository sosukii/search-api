import { Component } from 'react';
import { InputSearch } from '@shared/ui/InputSearch';
import { Button } from '@shared/ui/Button';

export class SearchBar extends Component {
  state = {};

  render() {
    return (
      <div>
        <InputSearch />
        <Button>Go search!</Button>
      </div>
    );
  }
}
