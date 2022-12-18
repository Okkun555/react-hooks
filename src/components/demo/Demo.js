import React, { useReducer } from "react";
import reducer from "../../reducers";
import AppContext from "../../contexts/AppContext";

import EventForm from "./EventForm";
import Events from "./Events";
import "bootstrap/dist/css/bootstrap.min.css";

const Demo = () => {
  const initialState = {
    events: [],
    operationLogs: [],
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  // NOTE: useReducer(reducer, 初期状態, 初期化時に実施したい処理)
  // const [state, dispatch] = useReducer(reducer, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container">
        <EventForm />
        <Events />
      </div>
    </AppContext.Provider>
  );
};

export default Demo;
