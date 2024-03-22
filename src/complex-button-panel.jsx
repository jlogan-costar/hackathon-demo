import { useState } from "react";
import "./App.css";

export const ComplexButtonPanel = ({ total, setTotal }) => {
  const [count, setCount] = useState(0);

  const plus = () => {
    setTotal(total + 1);
    setCount(count + 1);
  };
  const minus = () => {
    setTotal(total - 1);
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
