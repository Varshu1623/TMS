import axios from "axios";

const API_URL = "http://localhost:8090/api/tickets";

// Fetch all tickets
export const getAllTickets = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching tickets:", error);
    throw error;
  }
};

// Create a new ticket
export const createTicket = async (ticketData) => {
  try {
    const response = await axios.post(API_URL, ticketData);
    return response.data;
  } catch (error) {
    console.error("Error creating ticket:", error);
    throw error;
  }
};
