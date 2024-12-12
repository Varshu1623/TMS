import axios from 'axios';

const API_URL = 'http://localhost:8091/api/reports';

const ReportApi = {
  getAllReports: () => axios.get(API_URL),
  createOrUpdateReport: (report) => axios.post(API_URL, report),
  deleteReport: (id) => axios.delete(`${API_URL}/${id}`),
};

export default ReportApi;
