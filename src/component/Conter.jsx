import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const increment = () => {
    setCount(count + 1);
  };

  const deCrement = () => {
    setCount(count + 1);
  };
  return (
    <div className="counter">
      <h1>{count}</h1>
      <h2>{input}</h2>
      <input 
      type="text" 
      value={input}
      onChange={e=> setInput(e.target.value)}
      />
      <button onClick={increment}>+</button>
      <button onClick={deCrement}>-</button>
    </div>
  );
};

export default Counter;
