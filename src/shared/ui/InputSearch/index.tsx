import { Component, ChangeEvent } from 'react';

interface State {
  searchValue: string;
}

export class InputSearch extends Component {
  state: State = {
    searchValue: '',
  };

  handleChange(e: ChangeEvent<HTMLInputElement>) {
    const newValue = e.target.value;
    this.setState({
      searchValue: newValue,
    });
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange} />
      </div>
    );
  }
}

// export default Search;
