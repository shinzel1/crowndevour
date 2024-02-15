import React, { useState, useEffect } from 'react';
import './LocationListings.css';
import data from '../../data/CafeResturants.json';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import LocationCards from '../../commons/locationCard/locationCard'
import { Helmet } from 'react-helmet';

function LocationListings() {
  var [searchQuery, setSearchQuery] = useState('');
  const [filteredLocations, setFilteredLocations] = useState(data);
  const location = useLocation();
  const search = useLocation().search;
  const id = new URLSearchParams(search).get("keyId");
  const handleSearch = (val, filterVal) => {
    setSearchQuery(val)
    var query = val.toLowerCase();
    if (val === "") {
      searchQuery = val
    } else if (searchQuery !== "") {
      query = searchQuery.toLowerCase();
    }
    const filtered = data.filter((location) => {
      const name = location?.name?.toLowerCase();
      const description = location?.description?.toString()?.toLowerCase();
      const locationName = location?.location?.toLowerCase();
      const category = location?.category?.toString()?.toLowerCase()
      const tags = location?.tags?.toString()?.toLowerCase()
      if (filterVal === "category") {
        if (category != null) {return category?.includes(query); }
      } else if (filterVal === "tags") {
        if (tags != null) { return tags?.includes(query); }
      } else {
        return name?.includes(query) || description?.includes(query) || locationName?.includes(query)|| category?.includes(query) || tags?.includes(query);;
      }
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
    const body = document.querySelector('#root');
    body.scrollIntoView({
      behavior: 'smooth'
    }, 500)

    setTimeout(() => {
      if (location?.state?.value) {
        var searchBar = document.getElementById('searchBar')
        searchBar.value = location?.state?.value
        setSearchQuery(location?.state?.value)
        handleSearch(location?.state?.value, "")
      } else if (location?.state?.category) {
        var searchBar = document.getElementById('searchBar')
        searchBar.value = location?.state?.category
        setSearchQuery(location?.state?.category)
        handleSearch(location?.state?.category, "category")
      } else if (location?.state?.tags) {
        var searchBar = document.getElementById('searchBar')
        searchBar.value = location?.state?.tags
        setSearchQuery(location?.state?.tags)
        handleSearch(location?.state?.tags, "tags")
      } else {
        setSearchQuery("")
      }
    }, 1000);
  }, []);

  return (
    <div className="location-listings">
      <h1>Explore Cafe's And Resturant's</h1>
      <Helmet>
        <link rel="canonical" href="https://crowndevour.com/location" />
        <title>search cafe and restaurants</title>
        <meta name="description" content="Embark on a culinary journey through our handpicked cafes, restaurants, and food stalls! Discover diverse flavors and settings in this gastronomic exploration. " />
      </Helmet>
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
          onChange={(e) => handleSearch(e.target.value)}
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

