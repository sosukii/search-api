import { FC } from 'react';
import { InputSearch } from '@shared/ui/InputSearch';
import { Button } from '@shared/ui/Button';
import css from './style.module.css';

interface Props {
  onInputNewName?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClickNewName?: () => void;
  inputValue: string;
}

export const SearchBar: FC<Props> = ({ onInputNewName, onClickNewName, inputValue }) => {
  return (
    <div className={css.bar}>
      <InputSearch onChange={onInputNewName} inputValue={inputValue} />
      <Button onClick={onClickNewName}>Go search!</Button>
    </div>
  );
};
