import { Component } from 'react';
import css from './style.module.css';

interface Props {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export class InputSearch extends Component<Props> {
  render() {
    const { onChange } = this.props;
    return (
      <div>
        <input className={css.input} type="text" onChange={onChange} placeholder="Naruto" />
      </div>
    );
  }
}
