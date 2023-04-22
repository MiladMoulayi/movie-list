import React from 'react';
import MovieList from './components/MovieList.js';
import Search from "./components/Search.js";

const App = (props) => {
  return (
    <div className="App" key="app">
      <MovieList/>
    </div>
  )
};

export default App;