import { Component } from 'react';
import css from './style.module.css';

export class Loader extends Component {
  state = {};

  render() {
    return (
      <div className={css.loader}>
        <div className={css.dot}></div>
        <div className={css.dot}></div>
        <div className={css.dot}></div>
        <div className={css.dot}></div>
        <div className={css.dot}></div>
      </div>
    );
  }
}
