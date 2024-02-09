import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
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
import PrivacyPolicy from './components/pages/PrivacyPolicy/PrivacyPolicy';



function App() {  
  return (
    // <Router basename={process.env.PUBLIC_URL}>
  <div className="App">
  <Header/>
    <Routes>
    {/* <Route path="*" element={ <Navigate to="/404" replace />} /> */}
      <Route path="/" Component={Homepage} />
      <Route path="/thelas-near-location" Component={ThelasNearLocation} />
      <Route path="/location" element={<SearchAndFilter />} />
      <Route path="/location/:id" element={<LocationDetail />} />
      <Route path="/blogs" element={<BlogListings />} />
      <Route path="/blogs/:id" element={<BlogPostDetail />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/user-profile" element={<UserProfile />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    </Routes>
    <Footer/>
  </div>
// </Router>
  );
}

export default App;
