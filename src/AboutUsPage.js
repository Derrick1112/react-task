import React from 'react';
import { Link } from 'react-router-dom';

const AboutUsPage = () => {
  return (
    <div className='page-style'>
        <h1 className='App'>About Us Page</h1>
        <p>This is the About Page.</p>

        <Link to="/routing" className='button-link'>
            <button className='styled-button orange-button'>Routing</button>
          </Link>
          
        <Link to="/">
            <button className='styled-button button-link blue-button'>Home</button>
        </Link>
    </div>
  );
};

export default AboutUsPage;