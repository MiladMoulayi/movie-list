import React, { useState } from 'react';
import MovieEntry from './MovieEntry.js';
import Search from './Search.js';

const MovieList = ({movies}) => {
  const [filteredMovies, setFilteredMovies] = useState(movies);

  return (
    <div className="movelist" key="movielist">
      <h2>Movie List</h2>
    <div className="search"><Search placeholder="Enter movie..." data={movies} setFilteredData={setFilteredMovies}/></div>
    {console.log(filteredMovies)}
      <div className="movieSearchResult">
        {filteredMovies.map((movie) => {
          return <div className="movieentry" key={movie.title}><MovieEntry movie={movie}/></div>
          })}
      </div>
   </div>
  )
};

export default MovieList;