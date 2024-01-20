import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CounterPage from './CounterPage';
import FormPage from './FormPage';
import ToDoPage from './ToDoPage';
import RoutingPage from './RoutingPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 className='App'>ReactJS Task by Derrick Teo</h1>

          <Link to="/counter" className='button-link'>
            <button className='styled-button green-button'>Counter</button>
          </Link>
          <Link to="/form" className='button-link'>
            <button className='styled-button red-button'>Form</button>
          </Link>
          <Link to="/todo" className='button-link'>
            <button className='styled-button blue-button'>To Do</button>
          </Link>
          <Link to="/routing" className='button-link'>
            <button className='styled-button orange-button'>Routing</button>
          </Link>
        </header>
        <Routes>
          <Route path="/counter" element={<CounterPage />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/todo" element={<ToDoPage />} />
          <Route path="/routing/*" element={<RoutingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
