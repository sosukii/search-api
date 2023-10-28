import { Component } from 'react';
import { Header } from '@widgets/header';
import { SearchPage } from '@pages/SearchPage';
import '@shared/styles/global.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SearchPage />
      </div>
    );
  }
}
