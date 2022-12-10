import React from "react";
import { DELETE_EVENT } from "../../actions";

const Event = ({ event, dispatch }) => {
  const handleClickDelete = (id) => {
    const result = window.confirm(
      `イベントid:${id}を削除を本当に削除しても良いですか？`
    );

    if (result) dispatch({ type: DELETE_EVENT, id });
  };

  return (
    <tr>
      <td>{event.id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td>
        <button
          onClick={() => handleClickDelete(event.id)}
          type="button"
          className="btn btn-danger"
        >
          削除
        </button>
      </td>
    </tr>
  );
};

export default Event;
