import React, { useState, useReducer } from "react";
import reducer from "../../reducers";

import Event from "./Event";
import "bootstrap/dist/css/bootstrap.min.css";

const Demo = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  // NOTE: useReducer(reducer, 初期状態, 初期化時に実施したい処理)
  const [state, dispatch] = useReducer(reducer, []);

  const addEvent = (e) => {
    e.preventDefault();

    dispatch({
      type: "CREATE_EVENT",
      title: title,
      body: body,
    });

    setTitle("");
    setBody("");
  };

  const deleteAllEvent = (e) => {
    e.preventDefault();
    dispatch({ type: "DELETE_ALL_EVENTS" });
  };

  return (
    <div className="container">
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input
            className="form-control"
            id="formEventTitle"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="formEventBody">内容</label>
          <textarea
            className="form-control"
            id="formEventBody"
            type="text"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>

        <button onClick={addEvent} className="btn btn-primary">
          イベントを作成する
        </button>
        <button onClick={deleteAllEvent} className="btn btn-danger ml-2">
          全てのイベントを削除する
        </button>
      </form>

      <h4 className="mt-5 mb-2">イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>内容</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {state.map((event, index) => (
            <Event event={event} dispatch={dispatch} key={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Demo;
