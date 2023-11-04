import { FC, useEffect, useState } from 'react';
import { SearchPage } from '@pages/SearchPage';
import { Header } from '@widgets/header';
import { ErrorBoundary } from '@shared/ui/ErrorBoundary';
import { fetchItems, Item, Pagination as PaginationInterface } from '@shared/api/items';

import '@shared/styles/global.css';

const App: FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pagination, setPagination] = useState<PaginationInterface>({
    currentPage: 1,
    has_next_page: false,
    items: {
      count: 1,
      total: 1,
      per_page: 10,
    },
    last_visible_page: 1,
  });

  const [isFetching, setIsFetching] = useState(false);
  const [isResultEmpty, setIsResultEmpty] = useState(false);
  const [userValue, setUserValue] = useState('');
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    fetchByName();
  }, [currentPage, itemsPerPage]);

  const handleInputName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserValue(event.target.value.trimStart().trimEnd());
    setInputValue(event.target.value);
  };
  const handleItemsPerPageChange = (value: number) => {
    setItemsPerPage(value);
  };

  const prevPageHandler = () => {
    setCurrentPage(currentPage - 1);
  };
  const nextPageHandler = () => {
    setCurrentPage(currentPage + 1);
  };

  const setPageHandler = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const fetchByName = async () => {
    setItems([]);
    setIsFetching(true);
    setIsResultEmpty(false);

    const prevValue = localStorage.getItem('lastSearchString');
    const search = prevValue ? prevValue : userValue;

    const response = await fetchItems(itemsPerPage, currentPage, search);

    if (response?.data.data && response?.data.data.length > 0) {
      localStorage.setItem('lastSearchString', userValue);
      setTimeout(() => {
        setItems(response?.data.data);
        setPagination(response.data.pagination);
        setIsFetching(false);
      }, 1500);
    } else {
      setIsFetching(false);
      setIsResultEmpty(true);
    }
  };

  return (
    <ErrorBoundary>
      <Header
        onInputNewName={handleInputName}
        onClickNewName={fetchByName}
        inputValue={inputValue}
      />
      <SearchPage
        isFetching={isFetching}
        isResultEmpty={isResultEmpty}
        items={items}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={handleItemsPerPageChange}
        pagination={pagination}
        currentPage={currentPage}
        setCurrentPage={setPageHandler}
        onClickNext={nextPageHandler}
        onClickPrev={prevPageHandler}
      />
    </ErrorBoundary>
  );
};

export default App;
