import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [name, setName] = useState(""); 

  return (
    <div>
        <p>Enter your name:</p>
        <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)}
            data-testid="name-input"
        />
        <p data-testid="greeting">Hello {name}!</p>
    </div>
  );
};

export default App;
