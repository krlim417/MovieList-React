import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieInput: {}
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    var titleWords = event.target.value.split(' ');
    for (var i = 0; i < titleWords.length; i++) {
      titleWords[i] = titleWords[i].charAt(0).toUpperCase() + titleWords[i].slice(1);
    }
    var capitalizedTitle = titleWords.join(' ');
    this.setState({
      movieInput: {
        title: capitalizedTitle
      }
    });
  }

  handleClick(event) {
    event.preventDefault();
    if (this.state.movieInput.title !== undefined) {
      this.props.addMovieFunc(this.state.movieInput);
    }
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="Add movie title here" onChange={this.handleChange} />
          <input type="submit" value="Add" onClick={this.handleClick} />
        </form>
      </div>
    );
  }
}

export default AddMovie;