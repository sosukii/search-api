import { FC } from 'react';
import css from './style.module.css';

interface Props {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
}

export const InputSearch: FC<Props> = ({ onChange, inputValue }) => {
  return (
    <input
      className={css.input}
      type="text"
      onChange={onChange}
      placeholder="Naruto"
      value={inputValue}
    />
  );
};
