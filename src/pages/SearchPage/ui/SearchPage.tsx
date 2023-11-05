import { FC, useState } from 'react';
import { ItemCard } from '@entities/ItemCard';
import { Loader } from '@shared/ui/Loader';
import { Item, Pagination as PaginationInterface } from '@shared/api/items';
import styles from './style.module.css';
import '@shared/styles/global.css';
import { Pagination } from '@features/pagination';
import { useNavigate } from 'react-router-dom';
import { ItemCardDetails } from '@entities/ItemCardDetails';

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
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState<Item>({
    mal_id: 0,
    title: '',
    year: 0,
    duration: '',
    episodes: 0,
    favorites: 0,
    images: {
      jpg: {
        image_url: '',
      },
    },
    rating: '',
    season: '',
    source: '',
    status: '',
    trailer: {
      embed_url: '',
    },
    synopsis: '',
  });
  const [showDetails, setShowDetails] = useState(false);

  const handleItemClick = (item: Item) => {
    setSelectedItem(item);
    setShowDetails(true);
    navigate(`/card/${item.mal_id}`);
  };
  const onCloseDetails = () => {
    setShowDetails(false);
    navigate('');
  };
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
        onClick={() => handleItemClick(item)}
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

      <div className={styles.content}>
        <div className={styles.wrapper}>
          {isFetching ? (
            <Loader />
          ) : !isResultEmpty ? (
            renderItems()
          ) : (
            'We have nothing for this request...'
          )}
        </div>
        <div className={styles.details}>
          {showDetails ? (
            <ItemCardDetails
              synopsis={selectedItem?.synopsis}
              status={selectedItem?.status}
              onCloseDetails={onCloseDetails}
              id={selectedItem?.mal_id}
            />
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};
