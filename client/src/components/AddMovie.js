import React, { useState } from 'react';
import AddBoxIcon from '@mui/icons-material/AddBox';

const AddMovie = ({placeholder, data, setFilteredData}) => {
  const [newMovieEntry, setNewMovieEntry] = useState('');

  const movieMagic = (event) => {
    const movieStr = event.target.value;
    setNewMovieEntry(movieStr);
  }

  const handleFilter = (event) => {
    data.push({'title': newMovieEntry});

    console.log(data);
    setFilteredData(data.slice());

  };


  return (
    <div className="addMovieInput">
      <input type="text"
            placeholder={placeholder}
            value={newMovieEntry}
            onChange={movieMagic}
          />
      <div className="addIcon"><AddBoxIcon id="addBtn" onClick={handleFilter}/></div>
    </div>
  )

}

export default AddMovie;