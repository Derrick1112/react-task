import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrement = () => {
    // Ensure the count does not go below zero
    setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button className='styled-button button-link green-button' onClick={handleIncrement}>Increment</button>
      <button className='styled-button button-link red-button' onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Counter;