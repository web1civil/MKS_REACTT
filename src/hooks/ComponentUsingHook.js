import React from 'react';
import useCustomHook from './useCustomHook';

const ComponentUsingHook = () => {
  const { data } = useCustomHook();
  const inputRef = useRef(null);

  const handleButtonClick = () => {
    // Використання useRef для звертання до DOM-елемента (input)
    inputRef.current.focus();
  };

  return (
    <div>
      <h2>Component Using Custom Hook</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <input type="text" ref={inputRef} placeholder="Focus me" />
      <button onClick={handleButtonClick}>Focus Input</button>
    </div>
  );
};

export default ComponentUsingHook;