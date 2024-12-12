import axios from 'axios';

const API_URL = 'http://localhost:8083/api/events';

const EventApi = {
  getAllEvents: () => axios.get(API_URL),
  createEvent: (eventData) => axios.post(API_URL, eventData),
};

export default EventApi;
