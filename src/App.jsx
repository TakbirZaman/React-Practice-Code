import React, { useState } from "react";

const App = () => {

  const [number, setNumber] = useState(11);

  return (
    <div>
      <h1>Number: {number}</h1>

      <button onClick={() => setNumber(prev => prev + 1)}>
        Increase
      </button>

      <button onClick={() => setNumber(prev => prev - 1)}>
        Decrease
      </button>
    </div>
  );
};

export default App;