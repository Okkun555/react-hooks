import React, { useReducer } from "react";

// MEMO: TSの場合はActionで型を定義する
// type Action = "DECREMENT" | "INCREMENT" | "DOUBLE" | "RESET";
const reducer = (currentCount, action) => {
  switch (action) {
    case "INCREMENT":
      return currentCount + 1;
    case "DECREMENT":
      return currentCount - 1;
    case "DOUBLE":
      return currentCount * 2;
    case "RESET":
      return 0;
    default:
      return currentCount;
  }
};

const SampleUseReducer = (props) => {
  const { initialCount } = props;
  const [count, dispatch] = useReducer(reducer, initialCount);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch("DECREMENT")}>-</button>
      <button onClick={() => dispatch("INCREMENT")}>+</button>
      <button onClick={() => dispatch("DOUBLE")}>x2</button>
      <button onClick={() => dispatch("RESET")}>Reset</button>
    </div>
  );
};

export default SampleUseReducer;
