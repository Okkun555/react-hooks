import React, { useContext } from "react";
import { DELETE_EVENT, ADD_OPERATION_LOG } from "../../actions";
import AppContext from "../../contexts/AppContext";
import { timeCurrentIso8601 } from "../../utils";

const Event = ({ event }) => {
  const { dispatch } = useContext(AppContext);

  const handleClickDelete = (id) => {
    const result = window.confirm(
      `イベントid:${id}を削除を本当に削除しても良いですか？`
    );

    if (result) {
      dispatch({ type: DELETE_EVENT, id });
      dispatch({
        type: ADD_OPERATION_LOG,
        description: `イベント(id=${id}を削除しました)`,
        operatedAt: timeCurrentIso8601(),
      });
    }
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
