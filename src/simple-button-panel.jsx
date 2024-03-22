import { useState } from "react";
import "./App.css";

export const SimpleButtonPanel = () => {
  const [count, setCount] = useState(0);

  const plus = () => {
    setCount(count + 1);
  };
  const minus = () => {
    setCount(count - 1);
  };
  return (
    <div className="ButtonPanel">
      <button onClick={minus} className="Button">
        -
      </button>
      <div className="Count">{count}</div>
      <button onClick={plus} className="Button">
        +
      </button>
    </div>
  );
};
