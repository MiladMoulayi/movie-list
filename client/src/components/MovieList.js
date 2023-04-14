import React, { useState } from 'react';
import MovieEntry from './MovieEntry.js';
import Search from './Search.js';
import AddMovie from './AddMovie.js';

const MovieList = ({movies}) => {
  const [filteredMovies, setFilteredMovies] = useState(movies);
  // const [newMovie, addNewMovie] = useState(movies);

  return (
    <div className="movelist" key="movielist">
      <h2>Movie List</h2>
    <div className="addMovie"><AddMovie placeholder="Add a new movie..." data={movies} addNewMovie={setFilteredMovies}/></div>
    <div className="search"><Search placeholder="Search movies..." data={movies} setFilteredData={setFilteredMovies}/></div>
    <div className="movieSearchResult">
      {filteredMovies.map((movie) => {
        return <div className="movieentry" key={movie.title}><MovieEntry movie={movie}/></div>
        })}
    </div>
   </div>
  )
};

export default MovieList;