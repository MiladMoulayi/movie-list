import React, { useState } from 'react';
import AddBoxIcon from '@mui/icons-material/AddBox';

const AddMovie = ({placeholder, data, setFilteredData}) => {
  const [newMovieEntry, setNewMovieEntry] = useState('');

  const handleInput = (event) => {
    const movieStr = event.target.value;
    setNewMovieEntry(movieStr);
  }

  const handleFilter = (event) => {
    data.push({'title': newMovieEntry, 'watched': false});
    setFilteredData(data.slice());
  };


  return (
    <div className="addMovieInput">
      <input type="text"
            placeholder={placeholder}
            value={newMovieEntry}
            onChange={handleInput}
          />
      <div className="addIcon"><AddBoxIcon id="addBtn" onClick={handleFilter}/></div>
    </div>
  )

}

export default AddMovie;