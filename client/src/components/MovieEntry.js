import React from 'react';

const MovieEntry = ({movie}) => {

  return (
    <div id={movie.title}>{movie.title}</div>
  )
};

export default MovieEntry;