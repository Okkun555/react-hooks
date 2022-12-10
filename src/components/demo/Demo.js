import React, { useReducer } from "react";
import reducer from "../../reducers";

import EventForm from "./EventForm";
import Events from "./Events";
import "bootstrap/dist/css/bootstrap.min.css";

const Demo = () => {
  // NOTE: useReducer(reducer, 初期状態, 初期化時に実施したい処理)
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <div className="container">
      <EventForm state={state} dispatch={dispatch} />
      <Events state={state} dispatch={dispatch} />
    </div>
  );
};

export default Demo;
