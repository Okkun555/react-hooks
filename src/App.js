import React, { useState } from "react";
import SampleUseEffect from "./components/SampleUseEffect";
import SampleUseState from "./components/SampleUseState";

const App = (props) => {
  const [type, setType] = useState("useState");

  return (
    <>
      <div className="btn-container">
        <button onClick={() => setType("useState")}>Sample useState</button>
        <button onClick={() => setType("useEffect")}>Sample useEffect</button>
      </div>
      <div className="sample-container">
        {type === "useState" && <SampleUseState name="" price={1000} />}
        {type === "useEffect" && <SampleUseEffect name="" price={1000} />}
      </div>
    </>
  );
};

export default App;
