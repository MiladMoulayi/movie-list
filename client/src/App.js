import React from 'react';
import MovieList from './components/MovieList.js';
import movies from './data/movies.js';
import Search from "./components/Search.js";

const App = (props) => {
  return (
    <div className="App" key="app">
      <MovieList movies={movies}/>
    </div>
  )
};

export default App;