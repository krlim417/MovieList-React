import React from 'react';
import ReactDOM from 'react-dom';
import MovieListEntry from './MovieListEntry.jsx';

const MovieList = (props) => (
  <div>
    <MovieListEntry movies={props.movies} />
  </div>
)

export default MovieList;