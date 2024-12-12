import React, { useEffect, useState } from "react";
import Views from "./Views";

const ParentComponent = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    // Fetch tickets data (mocked here for demonstration)
    const fetchedTickets = [
      { id: "1", status: "Open", description: "Ticket 1 description" },
      { id: "2", status: "Closed", description: "Ticket 2 description" },
    ];
    setTickets(fetchedTickets);
  }, []);

  return <Views tickets={tickets} />;
};

export default ParentComponent;
