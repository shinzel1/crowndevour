import React from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import './SearchBar.css';
function SearchBar() {
    return (
      <div className='centerDiv padding-5'>
        <TextField
          variant="outlined"
          className='searchBar'
          placeholder="Search Locations for Cafe and Resturants..."
          InputProps={{
            endAdornment: (
              <IconButton color="primary">
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
      </div>
    );
  }
  
  export default SearchBar;