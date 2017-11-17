import React from 'react';
import ReactDOM from 'react-dom';

const MovieListEntry = (props) => {
  if (props.movies) {
    return (
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
    );
  } else {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>No movies in the database.</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default MovieListEntry;