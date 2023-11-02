import { FC, useEffect, useState } from 'react';
import { Header } from '@widgets/header';
import { SearchPage } from '@pages/SearchPage';
import { fetchItems, Item } from '@shared/api/items';
import { ErrorBoundary } from '@shared/ui/ErrorBoundary';

import '@shared/styles/global.css';

const App: FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [isFetching, setIsFetching] = useState(false);
  const [isResultEmpty, setIsResultEmpty] = useState(false);
  const [userValue, setUserValue] = useState('');
  const [inputValue, setInputValue] = useState('');

  const limit = 10;
  const page = 1;

  const handleInputName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserValue(event.target.value.trimStart().trimEnd());
    setInputValue(event.target.value);
  };

  const fetchByName = async () => {
    setItems([]);
    setIsFetching(true);
    setIsResultEmpty(false);

    const response = await fetchItems(limit, page, userValue);

    if (response?.data.data && response?.data.data.length > 0) {
      localStorage.setItem('lastSearchString', userValue);
      setTimeout(() => {
        setItems(response?.data.data);
        setIsFetching(false);
      }, 3000);
    } else {
      setIsFetching(false);
      setIsResultEmpty(true);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const valueFromLocalStorage: string = localStorage.getItem('lastSearchString')!;

      setIsFetching(true);
      setInputValue(valueFromLocalStorage);

      const response = valueFromLocalStorage
        ? await fetchItems(limit, page, valueFromLocalStorage)
        : await fetchItems();

      setTimeout(() => {
        if (response) {
          setItems(response?.data.data);
          setIsFetching(false);
        }
      }, 3000);
    };

    fetchData();
  }, []);

  return (
    <ErrorBoundary>
      <Header
        onInputNewName={handleInputName}
        onClickNewName={fetchByName}
        inputValue={inputValue}
      />
      <SearchPage isFetching={isFetching} isResultEmpty={isResultEmpty} items={items} />
    </ErrorBoundary>
  );
};

export default App;
