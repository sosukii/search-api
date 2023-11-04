import { FC } from 'react';
import { ItemCard } from '@entities/ItemCard';
import { Loader } from '@shared/ui/Loader';
import { Item, Pagination as PaginationInterface } from '@shared/api/items';
import css from './style.module.css';
import '@shared/styles/global.css';
import { Pagination } from '@features/pagination';

interface Props {
  items: Item[];
  itemsPerPage: number;
  setItemsPerPage: (number: number) => void;
  pagination: PaginationInterface;
  isFetching: boolean;
  isResultEmpty: boolean;
  currentPage: number;
  setCurrentPage: (number: number) => void;
  onClickPrev?: () => void;
  onClickNext?: () => void;
}

export const SearchPage: FC<Props> = ({
  items,
  itemsPerPage,
  setItemsPerPage,
  pagination,
  isFetching,
  isResultEmpty,
  currentPage,
  setCurrentPage,
  onClickNext,
  onClickPrev,
}) => {
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
      {!isFetching && !isResultEmpty && (
        <Pagination
          data={pagination}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          itemsPerPage={itemsPerPage}
          setItemsPerPage={setItemsPerPage}
          onClickNext={onClickNext}
          onClickPrev={onClickPrev}
        />
      )}

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
