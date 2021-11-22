import React, { useContext } from "react";
import { context } from "./Task8";

function CompB() {
  const { Counter, setCounter } = useContext(context);
  const handleDecrease = () => {
    setCounter(Counter - 10);
  };
  return (
    <div>
      <h4>CompB</h4>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
}

export default CompB;
