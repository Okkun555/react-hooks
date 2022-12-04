import React, { useState } from "react";
import Demo from "./components/demo/Demo";
import SampleUseEffect from "./components/SampleUseEffect";
import SampleUseState from "./components/SampleUseState";

const App = (props) => {
  const [part, setPart] = useState(1);
  const [type, setType] = useState("useState");

  return (
    <>
      <div style={{ marginBottom: "36px" }}>
        <button onClick={() => setPart(1)}>説明</button>
        <button onClick={() => setPart(2)}>デモアプリ</button>
      </div>
      {part === 1 && (
        <>
          <div className="btn-container">
            <button onClick={() => setType("useState")}>Sample useState</button>
            <button onClick={() => setType("useEffect")}>
              Sample useEffect
            </button>
          </div>
          <div className="sample-container">
            {type === "useState" && <SampleUseState name="" price={1000} />}
            {type === "useEffect" && <SampleUseEffect name="" price={1000} />}
          </div>
        </>
      )}
      {part === 2 && <Demo />}
    </>
  );
};

export default App;
