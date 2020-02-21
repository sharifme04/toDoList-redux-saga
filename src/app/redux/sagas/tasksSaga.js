import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  FETCH_TASKS_LOADING,
  DELETE_TASK_LOADING,
  ADD_TASK_LOADING,
  DELETE_ALL_TASK_LOADING,
  UPDATE_TASK_LOADING
} from "../actionType/tasksType";
import {
  tasksSuccess,
  tasksFail,
  deleteTaskSuccess,
  deleteTaskFail,
  addTaskSuccess,
  addTaskFail,
  deleteAllTaskSuccess,
  deleteAllTaskFail,
  updateTaskSuccess,
  updateTaskFail
} from "../actions/tasks";
import { api } from "../services/services";

function* fetchTasks() {
  const { tasks, error } = yield call(api.fetchData);
  if (tasks) yield put(tasksSuccess(tasks));
  else yield put(tasksFail(error));
}

function* deleteTask(action) {
  const { id, error } = yield call(api.deleteByID, action);
  if (id) yield put(deleteTaskSuccess(id));
  else yield put(deleteTaskFail(error));
}

function* addTask(action) {
  const { task, error } = yield call(api.addTaskById, action.task);
  if (task) yield put(addTaskSuccess(task));
  else yield put(addTaskFail(error));
}

function* deleteAllTask(action) {
  const { id, error } = yield call(api.deleteAll, action.tasks.tasks);
  if (id) yield put(deleteAllTaskSuccess(id));
  else yield put(deleteAllTaskFail(error));
}

function* updateTask(action) {
  const { task, error } = yield call(api.updateTaskById, action);
  if (task) yield put(updateTaskSuccess(task));
  else yield put(updateTaskFail(error));
}

export function* watchFetchData() {
  yield takeEvery(FETCH_TASKS_LOADING, fetchTasks);
}

export function* watchDeleteData() {
  yield takeEvery(DELETE_TASK_LOADING, deleteTask);
}

export function* watchAddData() {
  yield takeEvery(ADD_TASK_LOADING, addTask);
}

export function* watchUpdateData() {
  yield takeEvery(UPDATE_TASK_LOADING, updateTask);
}

export function* watchDeleteAllData() {
  yield takeLatest(DELETE_ALL_TASK_LOADING, deleteAllTask);
}
