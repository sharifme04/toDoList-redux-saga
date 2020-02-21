import axios from "axios";

const API_END_POINT = process.env.REACT_APP_TASKS_API;

export const api = {
  fetchData() {
    return axios
      .get(`${API_END_POINT}`)
      .then(response => ({ tasks: response.data }))
      .catch(error => ({ error }));
  },

  deleteByID(action) {
    return axios
      .delete(`${API_END_POINT}/${action.id}`)
      .then(response => ({ id: action.id }))
      .catch(error => ({ error }));
  },

  addTaskById(task) {
    return axios
      .post(`${API_END_POINT}`, task)
      .then(response => ({ task: task }))
      .catch(error => ({ error }));
  },

  updateTaskById(action) {
    return axios
      .patch(`${API_END_POINT}/${action.id}`, action.isChecked)
      .then(response => ({ task: response.data }))
      .catch(error => ({ error }));
  },

  async deleteAll(action) {
    //console.log(action);
    // let tasks = action;
    // if (tasks) {
    //   await tasks.map(async e => {
    //     await console.log(e);
    //     return await axios
    //       .delete(`${API_END_POINT}/${e.id}`)
    //       .then(response => ({ id: e.id }))
    //       .catch(error => ({ error }));
    //   });
    // }
  }
};
