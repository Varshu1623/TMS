import axios from 'axios';

const API_URL = 'http://localhost:8081/api/calls';

const CallApi = {
  getAllCalls: () => axios.get(API_URL),
  createCall: (callData) => axios.post(API_URL, callData),
  deleteCall: (id) => axios.delete(`${API_URL}/${id}`),
};

export default CallApi;
