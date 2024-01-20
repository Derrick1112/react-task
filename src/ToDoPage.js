import React from 'react';
import ToDo from './ToDo';
import { Link } from 'react-router-dom';

const ToDoPage = () => {
    return (
      <div className='page-style App-header'>
        <h1 className='App'>To Do Page</h1>
        <ToDo />

        <Link to="/">
            <button className='styled-button button-link blue-button'>Home</button>
        </Link>
      </div>
    );
  };

export default ToDoPage;