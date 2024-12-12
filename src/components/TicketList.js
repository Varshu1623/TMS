import React, { useEffect } from "react";
import { useTickets } from "./TicketContext";
import { Table, TableBody, TableCell, TableHead, TableRow, Button, Typography, Paper, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const TicketList = () => {
  const { tickets, fetchTickets } = useTickets();
  const navigate = useNavigate();

  useEffect(() => {
    fetchTickets();
  }, [fetchTickets]);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        All Tickets
      </Typography>
      <Button variant="contained" color="primary" sx={{ mb: 2 }} onClick={() => navigate("/addticket")}>
        Create New Ticket
      </Button>
      <Paper elevation={3}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Priority</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tickets.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} align="center">
                  No tickets available
                </TableCell>
              </TableRow>
            ) : (
              tickets.map((ticket) => (
                <TableRow key={ticket.id} onClick={() => navigate(`/ticket/${ticket.id}`)}>
                  <TableCell>{ticket.title}</TableCell>
                  <TableCell>{ticket.description}</TableCell>
                  <TableCell>{ticket.priority}</TableCell>
                  <TableCell>{ticket.status}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
};

export default TicketList;
