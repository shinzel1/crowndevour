import React, { useEffect, useState } from 'react';
import './LocationListings.css';
import RecipeReviewCard from '../../commons/Card/Card';
import data from '../../data/CafeResturants.json';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

function LocationListings() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredLocations, setFilteredLocations] = useState(data);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
    const query = searchQuery.toLowerCase();
    const filtered = data.filter((location) => {
      const name = location.name.toLowerCase();
      const description = location.description.toLowerCase();
      const locationName = location.location.toLowerCase();

      return name.includes(query) || description.includes(query) || locationName.includes(query);
    });

    setFilteredLocations(filtered);
  };

  return (
    <div className="location-listings">
      <div className='centerDiv padding-5'>
        <TextField
          variant="outlined"
          className='searchBar'
       InputProps={{
            endAdornment: (
              <IconButton color="primary">
                <SearchIcon />
              </IconButton>
            ),
          }}
          type="text"
          placeholder="Search locations by name, description, or location"
          value={searchQuery}
          onChange={(e) =>handleSearch(e)}
        />
      </div>
      <div className='padding-5'>
      <Row xs={1} md={5} className="g-4"> 
          {filteredLocations.map((location, index) => (
            <Col key={index}>
            <RecipeReviewCard key={index} data={location}/>
          </Col>
        ))}
      </Row>
      </div>
    </div>
  );
}

export default LocationListings;

