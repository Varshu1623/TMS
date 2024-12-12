import axios from 'axios';

const API_URL = 'http://localhost:8082/api/tasks';

const TaskApi = {
  getAllTasks: () => axios.get(API_URL),
  createTask: (taskData) => axios.post(API_URL, taskData),
};

export default TaskApi;
