import React, { useState } from 'react';
import AddBoxIcon from '@mui/icons-material/AddBox';

const AddMovie = ({placeholder, data, addNewMovie}) => {
  const [newMovieEntry, setNewMovieEntry] = useState('');

  const movieMagic = (event) => {
    const movieStr = event.target.value;
    setNewMovieEntry(movieStr);
  }

  const addToList = () => {
    data.push({'title': newMovieEntry});
    addNewMovie(data);
  }


  return (
    <div className="addMovieInput">
      <input type="text"
            placeholder={placeholder}
            value={newMovieEntry}
            onChange={movieMagic}
          />
      <AddBoxIcon id="addBtn" onClick={addToList}/>
    </div>
  )

}

export default AddMovie;