import React, { useState, useEffect } from 'react';

const TodoComponent = () => {
  const [todo, setTodo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        setTodo(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : todo ? (
        <div>
          <h2>Todo Title:</h2>
          <p>{todo.title}</p>
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default TodoComponent;