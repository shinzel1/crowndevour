import React from 'react';
import SearchBar from '../../../../commons/SearchBar/SearchBar'
import './search-filter.css'
function SearchFilter(){
return(
 <section className="search-filter">
    <h1 className='search-filter-title'>Find Your Perfect Dining Experience</h1>
    <SearchBar/>   
  </section>
   
);
}
export default SearchFilter;