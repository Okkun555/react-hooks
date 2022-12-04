import React, { useState, useEffect } from "react";

const SampleUseEffect = (props) => {
  const [state, setState] = useState(props);
  const reset = () => setState(props);

  // JSXで返されたっものがレンダリングされたタイミングで実行
  useEffect(() => {
    console.log("useEffect is invoked.");
  });

  // 初回レンダリング時のみ呼び出し
  useEffect(() => {
    console.log("This is like componentDidMount");
  }, []);

  // 特定の値に変更があった場合のみ呼び出し
  useEffect(() => {
    console.log("This callback is for name only");
  }, [state.name]);

  return (
    <>
      <p>
        現在の{state.name}は{state.price}円です。
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

export default SampleUseEffect;
