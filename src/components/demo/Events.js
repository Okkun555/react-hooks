import React from "react";

import Event from "./Event";

const Events = ({ state, dispatch }) => {
  return (
    <>
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
    </>
  );
};

export default Events;
