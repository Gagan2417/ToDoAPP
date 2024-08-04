

import React, { useState } from 'react';
import './TodoList827.css';

function TodoList827() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addItem = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  const removeItem = (index) => {
    const newItems = items.filter((item, i) => i !== index);
    setItems(newItems);
  };

  return (
    <div className="todo-container">
      <h2>Todo List</h2>
      <div className="input-container">
        <input 
          type="text" 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
          placeholder="Enter a new task"
        />
        <button onClick={addItem}>Add</button>
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => removeItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList827;
