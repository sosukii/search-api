import { Component } from 'react';
import { Header } from '@widgets/header';
import { SearchPage } from '@pages/SearchPage';
import { fetchItems, Item } from '@shared/api/items';
import { ErrorBoundary } from '@shared/ui/ErrorBoundary/ErrorBoundary';

import '@shared/styles/global.css';

type State = {
  items: Item[];
  userValue: string;
  limit: string | number;
  page: string | number;
};

export default class App extends Component {
  state: State = { items: [], userValue: '', limit: 10, page: 1 };

  handleInputName = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ userValue: e.target.value });
  };
  fetchByName = async () => {
    const { limit, page, userValue } = this.state;
    if (userValue.length < 1) return;

    const response = await fetchItems(limit, page, userValue);
    if (response) {
      this.setState({ items: response?.data.data });
    }
  };

  async componentDidMount() {
    const response = await fetchItems();
    setTimeout(() => this.setState({ items: response?.data.data }), 3000);
  }

  render() {
    const { items } = this.state;

    return (
      <ErrorBoundary>
        <Header onInputNewName={this.handleInputName} onClickNewName={this.fetchByName} />
        <SearchPage items={items} />
      </ErrorBoundary>
    );
  }
}
