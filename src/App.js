import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './components/pages/Homepage/Homepage';
import LocationDetail from './components/pages/LocationDetail/LocationDetail';
import SearchAndFilter from './components/pages/SearchAndFilter/SearchAndFilter';
import BlogListings from './components/pages/BlogListings/BlogListings';
import BlogPostDetail from './components/pages/BlogPostDetail/BlogPostDetail';
import About from './components/pages/About/About';
import Contact from './components/pages/Contact/Contact';
import UserProfile from './components/pages/UserProfile/UserProfile';
import ThelasNearLocation from './components/pages/ThelasNearLocation/ThelasNearLocation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/layout/Header/Header'
import Footer from './components/layout/Footer/Footer'



function App() {
  return (
    <Router>
  <div className="App">
  <Header/>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/location/:id" element={<LocationDetail />} />
      <Route path="/locations" element={<SearchAndFilter />} />
      <Route path="/blogs" element={<BlogListings />} />
      <Route path="/blog-post/:id" element={<BlogPostDetail />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/user-profile" element={<UserProfile />} />
      <Route path="/thelas-near-location/:id" element={<ThelasNearLocation />} />
    </Routes>
    <Footer/>
  </div>
</Router>
  );
}

export default App;
