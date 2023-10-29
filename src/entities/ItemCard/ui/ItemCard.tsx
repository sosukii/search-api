import { Component } from 'react';
import css from './style.module.css';

type Props = {
  mal_id: number;
  title: string;
  year?: number;
  duration?: string | number;
  episodes?: number;
  favorites?: number;
  images?: {
    jpg: {
      image_url: string;
    };
  };
};

export class ItemCard extends Component<Props> {
  render() {
    const { mal_id, title, year, duration, episodes, favorites, images } = this.props;
    return (
      <div className={css.card}>
        <h2 className={css.title}>{title}</h2>
        <div className={css.id}>id: {mal_id}</div>
        <div className={css.imageWrapper}>
          <img className={css.image} src={images?.jpg.image_url} alt="picture of anime" />
        </div>
        <div className={css.description}>
          <p>
            Year: {year}, Duration: {duration}, Episodes: {episodes}
          </p>
          <div>Favorites: {favorites} peoples likes this!</div>
        </div>
      </div>
    );
  }
}
