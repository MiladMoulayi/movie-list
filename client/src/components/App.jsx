import React from 'react';
import MovieList from './MovieList.jsx';
import movies from '../data/movies.js';

const App = (props) => {

  return (
    <div><MovieList movies={movies}/></div>
  )
};

export default App;