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

const initialState = {
  tasks: null,
  error: null
};

export default function tasks(state = initialState, action) {
  switch (action.type) {
    case FETCH_TASKS_LOADING:
      return {
        isLoading: true
      };
    case FETCH_TASKS_SUCCESS:
      return {
        ...state,
        tasks: action.tasks,
        isLoading: false
      };
    case FETCH_TASKS_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case ADD_TASK_LOADING:
      return {
        ...state,
        isAdding: true
      };
    case ADD_TASK_SUCCESS:
      return {
        ...state,
        tasks: [...state.tasks, action.task],
        isAdding: false
      };
    case ADD_TASK_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case UPDATE_TASK_LOADING:
      return {
        ...state,
        isUpdating: true
      };
    // case UPDATE_TASK_SUCCESS:
    //   return {
    //     ...state,
    //     task: action.task,
    //     isUpdating: false
    //   };
    case UPDATE_TASK_SUCCESS:
      return {
        tasks: state.tasks.map(task => {
          if (task.id !== action.task.id) {
            return task;
          }
          return {
            ...task,
            ...action.task
          };
        }),
        isUpdating: false
      };
    case UPDATE_TASK_FAILURE:
      return {
        ...state,
        error: action.error
      };

    case DELETE_TASK_LOADING:
      return {
        ...state,
        isDeleting: true
      };
    case DELETE_TASK_SUCCESS:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.id),
        isDeleting: false
      };
    case DELETE_TASK_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case DELETE_ALL_TASK_LOADING:
      return {
        ...state,
        isDeletingAll: true
      };
    case DELETE_ALL_TASK_SUCCESS:
      return {
        ...state,
        tasks: state.tasks,
        isDeletingALl: false
      };
    case DELETE_ALL_TASK_FAILURE:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
}
