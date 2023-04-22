import React, { useState } from 'react';
import AddBoxIcon from '@mui/icons-material/AddBox';
import axios from "axios";

const AddMovie = ({placeholder, data, setFilteredData}) => {
  const [newMovieEntry, setNewMovieEntry] = useState('');

  const handleInput = (event) => {
    const movieStr = event.target.value;
    setNewMovieEntry(movieStr);
  }


  const handleSubmit = () => {
    axios.post('http://localhost:3000/movies', {
      'title': newMovieEntry,
      'watched': false
    });
    setNewMovieEntry("");
  }


  // const handleFilter = (event) => {
  //   data.push({'title': newMovieEntry, 'watched': false});
  //   setFilteredData(data.slice());
  // };


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