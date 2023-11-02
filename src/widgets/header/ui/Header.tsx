import { FC, useState } from 'react';
import { SearchBar } from '@features/search-bar';
import { Button } from '@shared/ui/Button';
import css from './style.module.css';
import '@shared/styles/global.css';

interface Props {
  onInputNewName?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClickNewName?: () => void;
  inputValue: string;
}

export const Header: FC<Props> = ({ onInputNewName, onClickNewName, inputValue }) => {
  const [hasError, setHasError] = useState(false);

  const handleHasError = () => setHasError(true);

  if (hasError) {
    throw new Error('You are testing Error Boundary! It is worked~');
  }

  return (
    <header className={css.header}>
      <div className="container">
        <SearchBar
          onInputNewName={onInputNewName}
          onClickNewName={onClickNewName}
          inputValue={inputValue}
        />
        <Button onClick={handleHasError}>Check Error Boundary</Button>
      </div>
    </header>
  );
};
