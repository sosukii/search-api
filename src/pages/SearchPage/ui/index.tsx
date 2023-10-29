import { Component } from 'react';
import { fetchItems, Item } from '@shared/api/items';
import { ItemCard } from '@entities/ItemCard';

type State = { items: Item[] };

export class SearchPage extends Component {
  state: State = { items: [] };

  async componentDidMount() {
    const response = await fetchItems();
    this.setState({ items: response?.data.data });
  }

  render() {
    const { items } = this.state;

    return (
      <div>
        {items.map((item: Item) => (
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
        ))}
      </div>
    );
  }
}
