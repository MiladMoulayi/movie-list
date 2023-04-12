import React from 'react';
import MovieEntry from './MovieEntry.jsx';

const MovieList = ({movies}) => {

  return (
    <div>{movies.map(movie =>
      <MovieEntry movie={movie}/>
    )
    }</div>
  );
};

export default MovieList;