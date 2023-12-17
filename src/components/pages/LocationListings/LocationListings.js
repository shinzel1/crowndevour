import React, { useState, useEffect } from 'react';
import './LocationListings.css';
import data from '../../data/CafeResturants.json';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import LocationCards from '../../commons/locationCard/locationCard'

function LocationListings() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredLocations, setFilteredLocations] = useState(data);
  const location = useLocation();


  const search = useLocation().search;
  const id = new URLSearchParams(search).get("keyId");
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
  useEffect(() => {
    // Get the element by ID
    if (id !== null && id !== "null") {
      const element = document.getElementById(id);
      // Trigger a click event on the element
      if (element) {
        element.click();
      } else {
        window.location.href = "404"
      }
    }
    if (location?.state?.value) {
      var searchBar = document.getElementById('searchBar')
      setSearchQuery(location?.state?.value)
    } else {
      setSearchQuery("")
    }
    const body = document.querySelector('#root');

    body.scrollIntoView({
      behavior: 'smooth'
    }, 500)
  }, []);

  return (
    <div className="location-listings">
      <div className='centerDiv padding-5'>
        <TextField
          variant="outlined"
          className='searchBar'
          id='searchBar'
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
          onChange={(e) => handleSearch(e)}
        />
      </div>
      <section className="section-sm">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title text-center">
                <h2 className="mb-5">Posted by this author</h2>
              </div>
            </div>
            {filteredLocations.map((location, index) => (
              <div className="col-lg-4 col-sm-6 mb-4">
                <Link to={'/location/' + location.title} state={{ loc: location }}>
                  <LocationCards data={location} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default LocationListings;

