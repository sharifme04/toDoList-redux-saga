import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as Trash } from "../icons/trash.svg";
import { ReactComponent as Undone } from "../icons/undone.svg";
import { ReactComponent as Done } from "../icons/done.svg";

const TasksList = props => {
  const { checkboxHandler, tasks, deleteTask, deleteAll } = props;
  return (
    <div className="taskList">
      <table className="table-style">
        <tbody>
          {tasks &&
            tasks.tasks &&
            tasks.tasks.map(e => (
              <tr key={e.id}>
                <td className="checkbox-column">
                  {e.isChecked ? (
                    <Done
                      className="checked-icon"
                      fill="#40bf80"
                      onClick={() => checkboxHandler(e.id, false)}
                    />
                  ) : (
                    <Undone
                      className="unchecked-icon"
                      onClick={() => checkboxHandler(e.id, true)}
                    />
                  )}
                </td>
                <td
                  className={
                    e.isChecked
                      ? "done-task-color comonclass"
                      : "undone-task-color comonclass"
                  }
                >
                  {e.plan}
                </td>
                <td>
                  <Trash
                    stroke="grey"
                    className="trash-icon"
                    onClick={() => deleteTask(e.id)}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <div onClick={deleteAll} className="delete-all">
        <Trash stroke="grey" className="trash-icon" />
        <span className="clearAll">
          <b>CLEAR ALL</b>
        </span>
      </div>
    </div>
  );
};
TasksList.propTypes = {
  checkboxHandler: PropTypes.func,
  deleteTask: PropTypes.func,
  deleteAll: PropTypes.func,
  tasks: PropTypes.object
};

export default TasksList;
