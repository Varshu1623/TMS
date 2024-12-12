import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTickets } from "./TicketContext";

const TicketDetails = () => {
  const { id } = useParams();
  const [ticket, setTicket] = useState(null);
  const { tickets, removeTicket } = useTickets();
  const navigate = useNavigate();

  useEffect(() => {
    const foundTicket = tickets.find((t) => t.id === id);
    setTicket(foundTicket || null);
  }, [id, tickets]);

  const handleDelete = () => {
    removeTicket(id);
    navigate("/tickets");
  };

  return ticket ? (
    <div>
      <h1>{ticket.title}</h1>
      <p>{ticket.description}</p>
      <p>Status: {ticket.status}</p>
      <button onClick={() => navigate("/tickets")}>Back</button>
      <button onClick={handleDelete}>Delete Ticket</button>
    </div>
  ) : (
    <p>Ticket not found</p>
  );
};

export default TicketDetails;
