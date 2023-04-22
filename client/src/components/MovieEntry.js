import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import axios from 'axios';

const MovieEntry = ({movie, renderAll}) => {
  const [watchedState, setWatchedState] = useState(movie.watched);

  useEffect(() => {
    renderAll();
  }, [watchedState]);

  const handleToggle = (event) => {

    axios.put('http://localhost:3000/movies', {
      'title': movie.title,
      'watched': !movie.watched
    })
    setWatchedState(!watchedState);
  };

  return (
    <div className="movieEntry">
      <div id={movie.title} className="movie">{movie.title}</div>
      <Button variant="contained" color="secondary" onClick={handleToggle}>{watchedState ? 'Watched' : 'Not Watched'}</Button>
    </div>
  )
};

export default MovieEntry;