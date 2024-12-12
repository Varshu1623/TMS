import React, { createContext, useState, useContext, useEffect } from "react";
import { getAllTickets } from "../api/TicketApi";

const TicketContext = createContext();

export const useTickets = () => {
  return useContext(TicketContext);
};

export const TicketProvider = ({ children }) => {
  const [tickets, setTickets] = useState([]);

  // Fetch tickets from the backend when the component mounts
  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    try {
      const data = await getAllTickets();
      setTickets(data);
    } catch (error) {
      console.error("Failed to fetch tickets:", error);
    }
  };

  const addTicket = (ticket) => {
    setTickets((prevTickets) => [...prevTickets, ticket]);
  };

  const removeTicket = (ticketId) => {
    setTickets((prevTickets) => prevTickets.filter((ticket) => ticket.id !== ticketId));
  };

  return (
    <TicketContext.Provider value={{ tickets, setTickets, fetchTickets, addTicket, removeTicket }}>
      {children}
    </TicketContext.Provider>
  );
};
