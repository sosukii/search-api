import { Component } from 'react';
import { ItemCard } from '@entities/ItemCard';
import { Item } from '@shared/api/items';
import { Loader } from '@shared/ui/Loader/Loader';
import css from './style.module.css';
import '@shared/styles/global.css';

interface Props {
  items: Item[];
}
export class SearchPage extends Component<Props> {
  renderItems() {
    return this.props.items.map((item: Item) => (
      <ItemCard
        key={item.mal_id}
        mal_id={item.mal_id}
        title={item.title}
        year={item.year}
        duration={item.duration}
        episodes={item.episodes}
        favorites={item.favorites}
        images={item.images}
      />
    ));
  }

  render() {
    const { items } = this.props;
    return (
      <div className="container">
        <div className={css.wrapper}>{items.length > 1 ? this.renderItems() : <Loader />}</div>
      </div>
    );
  }
}
