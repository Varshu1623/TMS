import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Stack,
  Modal,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  Select,
  MenuItem,
  Grid,
  Switch,
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CloseIcon from "@mui/icons-material/Close";
import TaskApi from "../api/TaskApi";

const Tasks = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  const [formData, setFormData] = useState({
    subject: "",
    ticket: "",
    dueDate: "",
    taskOwner: "Kowsik",
    contactName: "",
    status: "Not Started",
    priority: "High",
    setReminder: false,
    description: "",
  });

  const fetchTasks = async () => {
    try {
      const response = await TaskApi.getAllTasks();
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async () => {
    try {
      await TaskApi.createTask(formData);
      fetchTasks(); // Refresh the task list after adding a new task
      setShowAddTask(false); // Close the modal
      setFormData({
        subject: "",
        ticket: "",
        dueDate: "",
        taskOwner: "Kowsik",
        contactName: "",
        status: "Not Started",
        priority: "High",
        setReminder: false,
        description: "",
      });
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" height="100vh" textAlign="center" p={2}>
      <Box mb={2}>
        <CalendarTodayIcon style={{ fontSize: 80, color: "#9e9e9e" }} />
      </Box>

      <Typography variant="h5" gutterBottom>
        {tasks.length === 0 ? "No Tasks available" : "Your Tasks"}
      </Typography>

      <Typography variant="body1" color="textSecondary" mb={3}>
        Add a new Task to be logged.
      </Typography>

      <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center">
        <Button variant="contained" color="primary" onClick={() => setShowAddTask(true)}>
          Add Task
        </Button>
      </Stack>

      {/* Modal for Add Task */}
      <Modal open={showAddTask} onClose={() => setShowAddTask(false)}>
        <Box
          p={4}
          bgcolor="white"
          boxShadow={3}
          borderRadius={2}
          width={{ xs: "95%", md: "60%" }}
          maxHeight="90vh"
          overflow="auto"
          mx="auto"
          my={4}
        >
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Typography variant="h5">Task Information</Typography>
            <Button onClick={() => setShowAddTask(false)} color="secondary">
              <CloseIcon />
            </Button>
          </Box>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                variant="outlined"
                margin="normal"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Ticket"
                name="ticket"
                value={formData.ticket}
                onChange={handleChange}
                variant="outlined"
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Due Date"
                type="datetime-local"
                name="dueDate"
                value={formData.dueDate}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth margin="normal">
                <Select name="taskOwner" value={formData.taskOwner} onChange={handleChange}>
                  <MenuItem value="Kowsik">Kowsik</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Switch
                    color="primary"
                    name="setReminder"
                    checked={formData.setReminder}
                    onChange={handleChange}
                  />
                }
                label="Set Reminder"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                variant="outlined"
                margin="normal"
                multiline
                rows={4}
              />
            </Grid>
            <Grid item xs={12} display="flex" justifyContent="flex-start">
              <Button variant="contained" color="primary" sx={{ mr: 2 }} onClick={handleSubmit}>
                Submit
              </Button>
              <Button variant="outlined" color="secondary" onClick={() => setShowAddTask(false)}>
                Cancel
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </Box>
  );
};

export default Tasks;
