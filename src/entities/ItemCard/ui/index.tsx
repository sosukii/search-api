import { Component } from 'react';

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
      <div>
        <h2>Title: {title}</h2>
        <div>id: {mal_id}</div>
        <img src={images?.jpg.image_url} alt="picture of anime" />
        <p>
          Year: {year}, Duration: {duration}, Episodes: {episodes}
        </p>
        <div>Favorites: {favorites} peoples likes this!</div>
      </div>
    );
  }
}
