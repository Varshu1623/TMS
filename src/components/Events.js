import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Stack,
  Modal,
  TextField,
  FormControl,
  Select,
  MenuItem,
  Grid,
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CloseIcon from "@mui/icons-material/Close";
import EventApi from "../api/EventsApi";

const Events = () => {
  const [showAddEvents, setShowAddEvents] = useState(false);
  const [showImportEvents, setShowImportEvents] = useState(false);
  const [events, setEvents] = useState([]);
  
  // Form state for adding a new event
  const [formData, setFormData] = useState({
    subject: "",
    category: "",
    status: "Not Started",
    description: "",
  });

  const fetchEvents = async () => {
    try {
      const response = await EventApi.getAllEvents();
      setEvents(response.data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      await EventApi.createEvent(formData);
      fetchEvents(); // Refresh the event list after adding a new event
      setShowAddEvents(false); // Close the modal
      setFormData({ subject: "", category: "", status: "Not Started", description: "" }); // Reset form
    } catch (error) {
      console.error("Error adding event:", error);
    }
  };

  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" height="100vh" textAlign="center" p={2}>
      <Box mb={2}>
        <CalendarTodayIcon style={{ fontSize: 80, color: "#9e9e9e" }} />
      </Box>

      <Typography variant="h5" gutterBottom>
        {events.length === 0 ? "No Events available" : "Your Events"}
      </Typography>

      <Typography variant="body1" color="textSecondary" mb={3}>
        Add a new Event to be logged.
      </Typography>

      <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center">
        <Button variant="contained" color="primary" onClick={() => setShowAddEvents(true)}>
          Add Event
        </Button>
      </Stack>

      {/* Modal for Add Event */}
      <Modal open={showAddEvents} onClose={() => setShowAddEvents(false)}>
        <Box
          width={{ xs: "90%", sm: "70%", md: "50%" }}
          bgcolor="white"
          p={4}
          boxShadow={3}
          borderRadius={2}
          mx="auto"
          my={4}
        >
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Typography variant="h5">Add Event</Typography>
            <CloseIcon onClick={() => setShowAddEvents(false)} style={{ cursor: "pointer" }} />
          </Box>

          <form>
            <TextField
              fullWidth
              label="Subject"
              name="subject"
              variant="outlined"
              margin="normal"
              required
              value={formData.subject}
              onChange={handleChange}
            />

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth margin="normal">
                  <Select name="category" value={formData.category} onChange={handleChange} displayEmpty>
                    <MenuItem value="">-None-</MenuItem>
                    <MenuItem value="Meeting">Meeting</MenuItem>
                    <MenuItem value="Call">Call</MenuItem>
                    <MenuItem value="Conference">Conference</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth margin="normal">
                  <Select name="status" value={formData.status} onChange={handleChange}>
                    <MenuItem value="Not Started">Not Started</MenuItem>
                    <MenuItem value="In Progress">In Progress</MenuItem>
                    <MenuItem value="Completed">Completed</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            <TextField
              fullWidth
              label="Description"
              name="description"
              variant="outlined"
              margin="normal"
              multiline
              rows={4}
              value={formData.description}
              onChange={handleChange}
            />

            <Box mt={2} display="flex" gap={2}>
              <Button variant="contained" color="primary" onClick={handleSubmit}>
                Submit
              </Button>
              <Button variant="outlined" color="secondary" onClick={() => setShowAddEvents(false)}>
                Cancel
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </Box>
  );
};

export default Events;
