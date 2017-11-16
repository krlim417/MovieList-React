import React from 'react';
import ReactDOM from 'react-dom';

const MovieListEntry = (props) => (
  <div>
    <table>
      <tbody>
        {props.movies.map((movie, index) => {
          return (
            <tr>
              <td key={index}>{movie.title}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
)

export default MovieListEntry;