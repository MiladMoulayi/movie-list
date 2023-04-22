import React, { useState, useEffect } from 'react';
import AddBoxIcon from '@mui/icons-material/AddBox';
import axios from "axios";

const AddMovie = ({placeholder, allMovies, setAllMovies, renderAll}) => {
  const [newMovieEntry, setNewMovieEntry] = useState('');
  const [addButtonClick, setAddButtonClick] = useState('click me');

  const handleInput = (event) => {
    const movieStr = event.target.value;
    setNewMovieEntry(movieStr);
  }

  useEffect(() => {
    renderAll();
  }, [addButtonClick])

  const handleSubmit = async () => {
    const response = await axios.post('http://localhost:3000/movies', {
      'title': newMovieEntry,
      'watched': false
    });
    setNewMovieEntry('');
    setAddButtonClick('clicked!');
  }

  return (
    <div className="addMovieInput">
      <input type="text"
            placeholder={placeholder}
            value={newMovieEntry}
            onChange={handleInput}
          />
      <div className="addIcon"><AddBoxIcon id="addBtn" onClick={handleSubmit}/></div>
    </div>
  )

}

export default AddMovie;