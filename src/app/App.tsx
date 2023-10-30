import { Component } from 'react';
import { Header } from '@widgets/header';
import { SearchPage } from '@pages/SearchPage';
import { fetchItems, Item } from '@shared/api/items';
import { ErrorBoundary } from '@shared/ui/ErrorBoundary/ErrorBoundary';

import '@shared/styles/global.css';

type State = {
  items: Item[];
  isFetching: boolean;
  isResultEmpty: boolean;
  userValue: string;
  inputValue: string;
  limit: string | number;
  page: string | number;
};

export default class App extends Component {
  state: State = {
    items: [],
    isFetching: false,
    isResultEmpty: false,
    userValue: '',
    inputValue: '',
    limit: 10,
    page: 1,
  };

  handleInputName = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ userValue: e.target.value });
    this.setState({ inputValue: e.target.value });
  };
  fetchByName = async () => {
    const { limit, page, userValue } = this.state;

    this.setState({ items: [] });
    this.setState({ isFetching: true });
    this.setState({ isResultEmpty: false });

    const response = await fetchItems(limit, page, userValue);

    if (response?.data.data && response?.data.data.length > 0) {
      localStorage.setItem('lastSearchString', this.state.userValue);
      setTimeout(() => {
        this.setState({ items: response?.data.data });
        this.setState({ isFetching: false });
      }, 3000);
    } else {
      this.setState({ isFetching: false });
      this.setState({ isResultEmpty: true });
    }
  };

  async componentDidMount() {
    const valueFromLocalStorage = localStorage.getItem('lastSearchString');

    this.setState({ isFetching: true });
    this.setState({ inputValue: valueFromLocalStorage });

    const response = valueFromLocalStorage
      ? await fetchItems(10, 1, valueFromLocalStorage)
      : await fetchItems();
    setTimeout(() => {
      this.setState({ items: response?.data.data });
      this.setState({ isFetching: false });
    }, 3000);
  }

  render() {
    const { items, isFetching, isResultEmpty, inputValue } = this.state;

    return (
      <ErrorBoundary>
        <Header
          onInputNewName={this.handleInputName}
          onClickNewName={this.fetchByName}
          inputValue={inputValue}
        />
        <SearchPage isFetching={isFetching} isResultEmpty={isResultEmpty} items={items} />
      </ErrorBoundary>
    );
  }
}
