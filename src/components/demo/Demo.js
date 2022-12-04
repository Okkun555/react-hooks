import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Demo = () => {
  return (
    <div className="container">
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input className="form-control" id="formEventTitle" type="text" />
        </div>

        <div className="form-group">
          <label htmlFor="formEventBody">内容</label>
          <textarea className="form-control" id="formEventBody" type="text" />
        </div>

        <button className="btn btn-primary">イベントを作成する</button>
        <button className="btn btn-danger ml-2">
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
        <tbody></tbody>
      </table>
    </div>
  );
};

export default Demo;
