import "./App.css";
import { useState } from "react";
import { SimpleButtonPanel } from "./simple-button-panel";
import { ComplexButtonPanel } from "./complex-button-panel";

//1.) Simple components
export const ButtonContainer = () => {
  const plus = () => {
    //Do something
  };
  const minus = () => {
    //Do something
  };
  return (
    <div className="ButtonPanel">
      <button onClick={minus} className="Button">
        -
      </button>
      <div className="Count">{0}</div>
      <button onClick={plus} className="Button">
        +
      </button>
    </div>
  );
};

//---------------------------------------------------------------------------------------------

//2.) Add useState to count clicks
// export const ButtonContainer = () => {
//   const [count, setCount] = useState(0);
//   const plus = () => {
//     setCount(count + 1);
//   };
//   const minus = () => {
//     setCount(count - 1);
//   };
//   return (
//     <>
//       <div className="ButtonPanel">
//         <button onClick={minus} className="Button">
//           -
//         </button>
//         <div className="Count">{count}</div>
//         <button onClick={plus} className="Button">
//           +
//         </button>
//       </div>
//     </>
//   );
// };

//---------------------------------------------------------------------------------------------

//3.) Make Button Panel a component
// export const ButtonContainer = () => {
//   return (
//     <>
//       <SimpleButtonPanel />
//       <SimpleButtonPanel />
//       <SimpleButtonPanel />
//     </>
//   );
// };

//---------------------------------------------------------------------------------------------

//4.) Add Props with complex states
// export const ButtonContainer = () => {
//   const [total, setTotal] = useState(0);
//   return (
//     <>
//       <ComplexButtonPanel total={total} setTotal={setTotal} />
//       <ComplexButtonPanel total={total} setTotal={setTotal} />
//       <ComplexButtonPanel total={total} setTotal={setTotal} />
//       <div className="TotalPanel">Total: {total}</div>
//     </>
//   );
// };

//---------------------------------------------------------------------------------------------

//5.) Add more for fun
// export const ButtonContainer = () => {
//   const [total, setTotal] = useState(0);
//   return (
//     <>
//       <ComplexButtonPanel total={total} setTotal={setTotal} />
//       <ComplexButtonPanel total={total} setTotal={setTotal} />
//       <ComplexButtonPanel total={total} setTotal={setTotal} />
//       <div className="TotalPanel">Total: {total}</div>
//       <div className="TotalPanel">Average: {(total / 3).toFixed(1)}</div>
//     </>
//   );
// };
