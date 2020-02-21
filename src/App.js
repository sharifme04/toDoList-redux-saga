import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  tasksLoading,
  deleteTaskLoading,
  addTaskLoading,
  //deleteAllTaskLoading,
  updateTaskLoading
} from "./app/redux/actions/tasks";
import TasksList from "./app/components/TasksList";
import AddTask from "./app/components/AddTask";
import uuid from "uuid";

function App() {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks);
  const [value, setValue] = useState("");

  useEffect(() => {
    dispatch(tasksLoading());
  }, [dispatch]);

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const task = {
      id: uuid.v4(),
      plan: value,
      isChecked: false
    };
    dispatch(addTaskLoading(task));
    setValue("");
  };

  const checkboxHandler = (id, isChecked) => {
    dispatch(updateTaskLoading(id, { isChecked: isChecked }));
  };

  const deleteTask = id => {
    dispatch(deleteTaskLoading(id));
  };
  const deleteAll = () => {
    //dispatch(deleteAllTaskLoading(tasks));
  };

  return (
    <div className="container">
      <h1>REACT TO-DO</h1>
      <AddTask
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        value={value}
      />
      <TasksList
        tasks={tasks && tasks}
        checkboxHandler={checkboxHandler}
        deleteTask={deleteTask}
        deleteAll={deleteAll}
      />
    </div>
  );
}

export default App;
