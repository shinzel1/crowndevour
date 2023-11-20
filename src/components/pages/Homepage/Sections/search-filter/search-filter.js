import React from 'react';
import SearchBar from '../../../../commons/SearchBar/SearchBar'
import './search-filter.css'
function SearchFilter(){
return(
 <section className="search-filter">
    <h2 className='search-filter-title'>Find Your Perfect Dining Experience</h2>
    <SearchBar/>
    <div className='search-filter-para'>
    <p>Search by Cuisine, Location, and More</p>
    <p>
      Craving a specific cuisine or want to explore hidden gems nearby? Use our powerful search and filtering options to tailor your food journey to your preferences.
    </p>
    </div>
   
  </section>
   
);
}
export default SearchFilter;