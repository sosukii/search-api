import { Component } from 'react';
import { InputSearch } from '@shared/ui/InputSearch';
import { Button } from '@shared/ui/Button';
import css from './style.module.css';

interface Props {
  onInputNewName?: () => void;
  onClickNewName?: () => void;
}
export class SearchBar extends Component<Props> {
  render() {
    const { onInputNewName, onClickNewName } = this.props;
    return (
      <div className={css.bar}>
        <InputSearch onChange={onInputNewName} />
        <Button onClick={onClickNewName}>Go search!</Button>
      </div>
    );
  }
}
