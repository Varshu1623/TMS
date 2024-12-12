import React, { useState } from "react";
import { useTickets } from "./TicketContext";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  Typography,
  TextField,
  MenuItem,
  Paper,
  Box,
} from "@mui/material";

const AdminPanel = () => {
  const { tickets, setTickets } = useTickets();
  const [assignees] = useState([
    { id: 1, name: "CEO", email: "ceo@example.com" },
    { id: 2, name: "Team Lead", email: "teamlead@example.com" },
    { id: 3, name: "Project Manager", email: "pm@example.com" },
  ]);

  const handleAssign = async (ticketId, assigneeId) => {
    if (!assigneeId) {
      console.error("Assignee ID is missing");
      return;
    }
  
    const assignee = assignees.find((a) => a.id === assigneeId);
  
    try {
      const response = await axios.put(
        `http://localhost:8090/api/tickets/${ticketId}/assign`,
        null,
        {
          params: {
            assigneeEmail: assignee.email,
            assigneeName: assignee.name,
          },
        }
      );
  
      const updatedTicket = response.data;
      setTickets((prevTickets) =>
        prevTickets.map((ticket) =>
          ticket.id === updatedTicket.ticketId ? updatedTicket : ticket
        )
      );
    } catch (error) {
      console.error("Error assigning ticket:", error);
    }
  };
  

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Admin Panel - Manage Tickets
      </Typography>
      <Paper elevation={3} sx={{ mt: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Priority</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Assignee</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tickets.map((ticket) => (
              <TableRow key={ticket.id}>
                <TableCell>{ticket.title}</TableCell>
                <TableCell>{ticket.description}</TableCell>
                <TableCell>{ticket.priority}</TableCell>
                <TableCell>{ticket.status}</TableCell>
                <TableCell>
                  <TextField
                    select
                    fullWidth
                    size="small"
                    value={ticket.assignee?.id || ""}
                    onChange={(e) =>
                      handleAssign(ticket.id, parseInt(e.target.value))
                    }
                  >
                    {assignees.map((assignee) => (
                      <MenuItem key={assignee.id} value={assignee.id}>
                        {assignee.name}
                      </MenuItem>
                    ))}
                  </TextField>
                </TableCell>
                <TableCell>
                <Button
  variant="contained"
  color="primary"
  size="small"
  onClick={() => handleAssign(ticket.id, ticket.assignee?.id)}
  disabled={!ticket.assignee?.id}  // This condition disables the button
>
  Assign
</Button>

                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
};

export default AdminPanel;
