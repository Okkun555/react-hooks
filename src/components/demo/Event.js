import React from "react";

const Event = ({ event, dispatch }) => {
  const handleClickDelete = (id) => {
    dispatch({ type: "DELETE_EVENT", id });
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
