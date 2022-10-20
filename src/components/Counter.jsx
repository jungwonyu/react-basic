import React from "react";
import { useState } from "react";

export default function Counter() {
  let num = 0;

  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className="counter">
      <span className="number">{count}</span>
      <button className="button" onClick={handleClick}>
        Add +
      </button>
    </div>
  );
}
