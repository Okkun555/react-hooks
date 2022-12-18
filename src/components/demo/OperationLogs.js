import React from "react";
import { useContext } from "react";
import AppContext from "../../contexts/AppContext";
import OperationLog from "./OperationLog";

const OperationLogs = () => {
  const { state } = useContext(AppContext);

  return (
    <>
      <h4 className="mt-5 mb-2">操作ログ一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>操作内容</th>
            <th>操作日時</th>
          </tr>
        </thead>
        <tbody>
          {state.operationLogs.map((operationLog) => (
            <OperationLog
              key={operationLog.operatedAt}
              operationLog={operationLog}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default OperationLogs;
