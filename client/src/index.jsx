import React from 'react';
import ReactDOM from 'react-dom';
import AddMovie from './Components/AddMovie.jsx';
import Search from './Components/Search.jsx';
import MovieList from './Components/MovieList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      database: []
    }
    this.addMovie = this.addMovie.bind(this);
    this.matchSearchValue = this.matchSearchValue.bind(this);
  }

  addMovie(movie) {
    var movieDatabase = this.state.database;
    if (this.state.database.indexOf(movie) === -1) {
      movieDatabase.push(movie);
    }
    this.setState({
      movies: movieDatabase
    });
  }

  matchSearchValue(searchValue) {
    var trimLowerCaseSearchValue = searchValue.trim().toLowerCase();
    if (searchValue.trim()) {
      var matchedMovieList = this.state.movies.filter(movie => {
        var movieTitle = movie.title.toLowerCase();
        return movieTitle.includes(trimLowerCaseSearchValue);
      });
      if (matchedMovieList) {
        this.setState({
          movies: matchedMovieList
        });
      }
    } else {
      this.setState({
        movies: this.state.database
      });
    }
  }

  render() {
    return (
      <div>
        <AddMovie addMovieFunc={this.addMovie} />
        <Search movies={this.state.movies} matchSearchFunc={this.matchSearchValue} />
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('app'));