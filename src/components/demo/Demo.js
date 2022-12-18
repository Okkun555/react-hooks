import React, { useEffect, useReducer } from "react";
import reducer from "../../reducers";
import AppContext from "../../contexts/AppContext";

import EventForm from "./EventForm";
import Events from "./Events";
import OperationLogs from "./OperationLogs";
import "bootstrap/dist/css/bootstrap.min.css";

const APP_KEY = "appWithRedux";

const Demo = () => {
  const appState = localStorage.getItem(APP_KEY);
  const initialState = appState
    ? JSON.parse(appState)
    : {
        events: [],
        operationLogs: [],
      };
  const [state, dispatch] = useReducer(reducer, initialState);

  // NOTE: useReducer(reducer, 初期状態, 初期化時に実施したい処理)
  // const [state, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    localStorage.setItem(APP_KEY, JSON.stringify(state));
  }, [state]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container">
        <EventForm />
        <Events />
      </div>
      <div className="container">
        <OperationLogs />
      </div>
    </AppContext.Provider>
  );
};

export default Demo;
