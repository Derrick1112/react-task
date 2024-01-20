import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import AboutUsPage from './AboutUsPage';

const RoutingPage = () => {
  return (
    <div className='page-style App-header'>
      <h1 className='App'>Routing Page</h1>
      <Link to="/">
        <button className='styled-button button-link blue-button'>Home</button>
      </Link>
      <Link to="aboutus">
        <button className='styled-button button-link orange-button'>About Us</button>
      </Link>

      <Routes>
        <Route path="aboutus" element={<AboutUsPage />} />
      </Routes>
    </div>
  );
};

export default RoutingPage;