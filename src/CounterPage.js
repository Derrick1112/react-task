import React from 'react';
import Counter from './Counter';
import { Link } from 'react-router-dom';

const CounterPage = () => {
    return (
      <div className='page-style App-header'>
        <h1 className='App'>Counter Page</h1>
        <Counter />

        <Link to="/" className='button-link'>
            <button className='styled-button blue-button'>Home</button>
        </Link>
      </div>
    );
  };

export default CounterPage;