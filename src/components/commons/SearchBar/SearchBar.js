import React from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import {useNavigate} from 'react-router-dom';
import './SearchBar.css';
function SearchBar() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
        // 👇️ redirect to /contacts
        if (typeof document !== 'undefined') {
    navigate(`/location`,{state:{value:document.getElementById('Text').value}});
        }
  };
    return (
      <div className='centerDiv padding-5'>
        <TextField
          variant="outlined"
          className='searchBar'
          placeholder="Search Locations for Cafe and Resturants..."
          id='Text'
          InputProps={{
            endAdornment: (
              <IconButton color="primary" onClick={(e) => handleSubmit(e)}  type="submit">
                <SearchIcon/>
              </IconButton>
            ),
          }}
        />
      </div>
    );
  }
  
  export default SearchBar;