import React, { useState, useEffect } from 'react';
import MovieEntry from './MovieEntry.js';
import Search from './Search.js';
import AddMovie from './AddMovie.js';
import { Button } from '@mui/material';
import axios from 'axios';

const MovieList = () => {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [allMovies, setAllMovies] = useState([]);
  const [changeToWatchState, setChangeToWatchState] = useState(false);

  const renderAll = () => {
    axios.get('http://localhost:3000/movies').then((response) => {
      setAllMovies(response.data);
      setFilteredMovies(response.data);
    });
  }

  useEffect(() => {
    renderAll();
  }, [])

  useEffect(() => {
    renderAll();
  }, [changeToWatchState])

  const handleWatchButtonClick = (e) => {
    let movies = allMovies.slice()
    let watchedFilter = movies.filter(movie => {
      if (e.target.value === 'watched') {
        return movie.watched === 1;
      } else if (e.target.value === 'to watch') {
        return movie.watched === 0;
      } else {
        return 1;
      }
    });
    setFilteredMovies(watchedFilter)
  }

  return (
    <div className="movelist" key="movielist">
      <h2>Movie List</h2>
    <div className="addMovie"><AddMovie placeholder="Add a new movie..." allMovies={allMovies} setAllMovies={setAllMovies} renderAll={renderAll}/></div>
    <div className="search"><Search placeholder="Search movies..." allMovies={allMovies} setFilteredMovies={setFilteredMovies}/></div>
    <div className="listButtons">
      <span className="listButton"><Button variant="contained" color="secondary" value="all" onClick={handleWatchButtonClick}>All</Button></span>
      <span className="listButton"><Button variant="contained" color="secondary" value="watched" onClick={handleWatchButtonClick}>Watched</Button></span>
      <span className="listButton"><Button variant="contained" color="secondary" value="to watch" onClick={handleWatchButtonClick}>To Watch</Button></span>
    </div>
    <div className="movieDisplay">
      {filteredMovies.map((movie) => {
        return <div className="movieentry" key={movie.title}><MovieEntry movie={movie} changeToWatchState={changeToWatchState} setChangeToWatchState={setChangeToWatchState}/></div>
        })}
    </div>
   </div>
  )
};

export default MovieList;