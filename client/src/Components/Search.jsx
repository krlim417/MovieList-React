import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ''
    }
    this.updateSearchValue = this.updateSearchValue.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  updateSearchValue(event) {
    event.preventDefault();
    this.setState({
      searchValue: event.target.value
    });
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.matchSearchFunc(this.state.searchValue);
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="Search..." onChange={this.updateSearchValue} />
          <input type="submit" value="Go!" onClick={this.onSubmit} />
        </form>
      </div>
    );
  }
}

export default Search;