import {
  FETCH_TASKS_LOADING,
  FETCH_TASKS_SUCCESS,
  FETCH_TASKS_FAILURE,
  ADD_TASK_LOADING,
  ADD_TASK_SUCCESS,
  ADD_TASK_FAILURE,
  DELETE_TASK_LOADING,
  DELETE_TASK_SUCCESS,
  DELETE_TASK_FAILURE,
  DELETE_ALL_TASK_LOADING,
  DELETE_ALL_TASK_SUCCESS,
  DELETE_ALL_TASK_FAILURE,
  UPDATE_TASK_LOADING,
  UPDATE_TASK_SUCCESS,
  UPDATE_TASK_FAILURE
} from "../actionType/tasksType";

export const tasksLoading = () => ({
  type: FETCH_TASKS_LOADING
});

export const tasksSuccess = tasks => ({
  type: FETCH_TASKS_SUCCESS,
  tasks
});

export const tasksFail = error => ({
  type: FETCH_TASKS_FAILURE,
  error
});

export const addTaskLoading = task => ({
  type: ADD_TASK_LOADING,
  task
});

export const addTaskSuccess = task => ({
  type: ADD_TASK_SUCCESS,
  task
});

export const addTaskFail = error => ({
  type: ADD_TASK_FAILURE,
  error
});

export const updateTaskLoading = (id, isChecked) => ({
  type: UPDATE_TASK_LOADING,
  id,
  isChecked
});

export const updateTaskSuccess = task => ({
  type: UPDATE_TASK_SUCCESS,
  task
});

export const updateTaskFail = error => ({
  type: UPDATE_TASK_FAILURE,
  error
});

export const deleteTaskLoading = id => ({
  type: DELETE_TASK_LOADING,
  id
});

export const deleteTaskSuccess = id => ({
  type: DELETE_TASK_SUCCESS,
  id
});

export const deleteTaskFail = error => ({
  type: DELETE_TASK_FAILURE,
  error
});

export const deleteAllTaskLoading = tasks => ({
  type: DELETE_ALL_TASK_LOADING,
  tasks
});

export const deleteAllTaskSuccess = () => ({
  type: DELETE_ALL_TASK_SUCCESS
});

export const deleteAllTaskFail = error => ({
  type: DELETE_ALL_TASK_FAILURE,
  error
});
