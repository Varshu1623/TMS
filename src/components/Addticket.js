import React, { useState } from "react";
import { TextField, Button, Box, Typography, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { createTicket } from "../api/TicketApi";
import { useTickets } from "./TicketContext";

const TicketList = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");
  const { fetchTickets } = useTickets();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted");

    const newTicket = {
      title,
      description,
      priority,
      status: "Open",
    };

    try {
      await createTicket(newTicket);
      fetchTickets(); // Refresh tickets after creating a new one
      setTitle("");
      setDescription("");
      setPriority("Medium");
      navigate("/tickets");
    } catch (error) {
      console.error("Failed to create ticket:", error);
    }
  };

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom align="center">
          Create a New Ticket
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Title"
            fullWidth
            margin="normal"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <TextField
            label="Description"
            fullWidth
            multiline
            rows={4}
            margin="normal"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <TextField
            label="Priority"
            select
            fullWidth
            margin="normal"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            SelectProps={{ native: true }}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </TextField>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default TicketList;
