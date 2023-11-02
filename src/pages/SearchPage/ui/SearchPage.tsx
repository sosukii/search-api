import { FC } from 'react';
import { ItemCard } from '@entities/ItemCard';
import { Loader } from '@shared/ui/Loader';
import { Item } from '@shared/api/items';
import css from './style.module.css';
import '@shared/styles/global.css';

interface Props {
  items: Item[];
  isFetching: boolean;
  isResultEmpty: boolean;
}

export const SearchPage: FC<Props> = ({ items, isFetching, isResultEmpty }) => {
  const renderItems = () => {
    return items.map((item: Item) => (
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
  };

  return (
    <div className="container">
      <div className={css.wrapper}>
        {isFetching ? (
          <Loader />
        ) : !isResultEmpty ? (
          renderItems()
        ) : (
          'We have nothing for this request...'
        )}
      </div>
    </div>
  );
};
