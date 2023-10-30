import { Component } from 'react';
import css from './style.module.css';

interface Props {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
}

export class InputSearch extends Component<Props> {
  render() {
    const { onChange, inputValue } = this.props;
    return (
      <div>
        <input
          className={css.input}
          type="text"
          onChange={onChange}
          placeholder="Naruto"
          value={inputValue}
        />
      </div>
    );
  }
}
