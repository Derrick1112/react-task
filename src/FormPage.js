import React from 'react';
import Form from './Form';
import { Link } from 'react-router-dom';

const CounterPage = () => {
    return (
      <div className='page-style App-header'>
        <h1 className='App'>Form Page</h1>
        <Form />

        <Link to="/">
            <button className='styled-button blue-button'>Home</button>
        </Link>
      </div>
    );
  };

export default CounterPage;