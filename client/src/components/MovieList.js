import React, { useState } from 'react';
import MovieEntry from './MovieEntry.js';
import Search from './Search.js';
import AddMovie from './AddMovie.js';
import { Button } from '@mui/material';

const MovieList = ({movies}) => {
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [watchedState, setWatchedState] = useState('all');

  const handleWatchButtonClick = (e) => {
    setWatchedState(e.target.value);
    const watchedFilter = movies.filter(movie => {
      if (e.target.value === 'watched') {
        return movie.watched === true;
      } else if (e.target.value === 'to watch') {
        return movie.watched === false;
      } else {
        return true;
      }
    })
    setFilteredMovies(watchedFilter);
  }

  return (
    <div className="movelist" key="movielist">
      <h2>Movie List</h2>
    <div className="addMovie"><AddMovie placeholder="Add a new movie..." data={movies} setFilteredData={setFilteredMovies}/></div>
    <div className="search"><Search placeholder="Search movies..." data={movies} setFilteredData={setFilteredMovies}/></div>
    <div className="listButtons">
      <span className="listButton"><Button variant="contained" color="secondary" value="all" onClick={handleWatchButtonClick}>All</Button></span>
      <span className="listButton"><Button variant="contained" color="secondary" value="watched" onClick={handleWatchButtonClick}>Watched</Button></span>
      <span className="listButton"><Button variant="contained" color="secondary" value="to watch" onClick={handleWatchButtonClick}>To Watch</Button></span>
    </div>
    <div className="movieDisplay">
      {filteredMovies.map((movie) => {
        return <div className="movieentry" key={movie.title}><MovieEntry movie={movie} filteredMovies={filteredMovies} setFilteredMovies={setFilteredMovies}/></div>
        })}
    </div>
   </div>
  )
};

export default MovieList;