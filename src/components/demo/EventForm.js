import React, { useState } from "react";
import { CREATE_EVENT, DELETE_ALL_EVENTS } from "../../actions";

const EventForm = ({ state, dispatch }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addEvent = (e) => {
    e.preventDefault();

    dispatch({
      type: CREATE_EVENT,
      title: title,
      body: body,
    });

    setTitle("");
    setBody("");
  };

  const deleteAllEvent = (e) => {
    e.preventDefault();
    const result = window.confirm(
      "全てのイベントを本当に削除しても良いですか？"
    );

    if (result) dispatch({ type: DELETE_ALL_EVENTS });
  };

  const unCreate = title === "" || body === "";
  const unDelete = state.length === 0;

  return (
    <>
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

        <button
          onClick={addEvent}
          className="btn btn-primary"
          disabled={unCreate}
        >
          イベントを作成する
        </button>
        <button
          onClick={deleteAllEvent}
          className="btn btn-danger ml-2"
          disabled={unDelete}
        >
          全てのイベントを削除する
        </button>
      </form>
    </>
  );
};

export default EventForm;
