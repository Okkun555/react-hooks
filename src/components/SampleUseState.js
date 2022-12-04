import React, { useState } from "react";

const SampleUseState = (props) => {
  const [state, setState] = useState(props);
  const reset = () => setState(props);

  return (
    <>
      <p>
        現在の{state.name}は{state.price}円です
      </p>
      <button onClick={() => setState({ ...state, price: state.price + 100 })}>
        +100
      </button>
      <button onClick={() => setState({ ...state, price: state.price - 100 })}>
        -100
      </button>
      <button onClick={reset}>Reset</button>
      <input
        value={state.name}
        onChange={(e) => setState({ ...state, name: e.target.value })}
      />
    </>
  );
};

export default SampleUseState;
