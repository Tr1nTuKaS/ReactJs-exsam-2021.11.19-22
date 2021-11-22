import React, { useContext } from "react";
import { context } from "./Task8";
function CompA1() {
  const { Counter, setCounter } = useContext(context);

  const handleIncrease = (e) => {
    e.preventDefault();
    if (Counter < 100) {
      setCounter(Counter + 10);
    }
    if (Counter === 100) {
      alert("Didinti nebegalima");
    }
  };
  return (
    <div>
      <h5>CompA1</h5>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}

export default CompA1;
