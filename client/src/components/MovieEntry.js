import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import axios from 'axios';

const MovieEntry = ({movie, changeToWatchState, setChangeToWatchState}) => {
  const [watchedState, setWatchedState] = useState(movie.watched);

  const handleToggle = async (event) => {
    const update = await axios.put('http://localhost:3000/movies', {
      'title': movie.title,
      'watched': !movie.watched
    })
    setWatchedState(!watchedState);
    setChangeToWatchState(changeToWatchState+'.');
  };

  return (
    <div className="movieEntry">
      <div id={movie.title} className="movie">{movie.title}</div>
      <Button variant="contained" color="secondary" onClick={handleToggle}>{watchedState ? 'Watched' : 'Not Watched'}</Button>
    </div>
  )
};

export default MovieEntry;