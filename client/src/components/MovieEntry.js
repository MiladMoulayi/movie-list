import React, { useState } from 'react';
import { Button } from '@mui/material';

const MovieEntry = ({movie, filteredMovies, setFilteredMovies}) => {

  const handleToggle = (event) => {
    let temp = filteredMovies.slice();
    for (let i = 0; i < temp.length; i++) {
      if (movie.title === temp[i].title) {
        temp[i].watched = !temp[i].watched;
      }
    }
    setFilteredMovies(temp);
  };

  return (
    <div className="movieEntry">
      <div id={movie.title} className="movie">{movie.title}</div>
      <Button variant="contained" color="secondary" onClick={handleToggle}>{movie.watched ? 'Watched' : 'Not Watched'}</Button>
    </div>
  )
};

export default MovieEntry;