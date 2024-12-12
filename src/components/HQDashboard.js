import React, { useState } from "react";
import {
  Box,
  Grid,
  Paper,
  Typography,
  IconButton,
  Tabs,
  Tab,
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Button,
  TextField,
  MenuItem,
} from "@mui/material";
import {
  PlaylistAdd,
  HourglassEmpty,
  AccessTime,
  CheckCircle,
  Cancel,
} from "@mui/icons-material";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

// Dummy Data
const pieData = [
  { name: "Unassigned", value: 10 },
  { name: "On Hold", value: 5 },
  { name: "Due in 1 Hour", value: 3 },
  { name: "Overdue", value: 2 },
  { name: "Resolved", value: 150 },
];

const ticketStatusData = [
  { label: "Unassigned", count: 10, icon: <PlaylistAdd />, color: "primary" },
  { label: "On Hold", count: 5, icon: <HourglassEmpty />, color: "warning" },
  { label: "Due Soon", count: 3, icon: <AccessTime />, color: "error" },
  { label: "Overdue", count: 2, icon: <Cancel />, color: "error" },
  { label: "Resolved", count: 150, icon: <CheckCircle />, color: "success" },
];

const ticketList = [
  { id: 1, title: "Ticket 1", description: "Issue with server", priority: "High" },
  { id: 2, title: "Ticket 2", description: "Login issue", priority: "Medium" },
  { id: 3, title: "Ticket 3", description: "Database backup failed", priority: "Low" },
];

const HQDashboard = () => {
  const [tabValue, setTabValue] = useState(0);
  const [filters, setFilters] = useState({
    ticketStatus: "All",
    priority: "All",
    dateRange: "",
  });

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleFilterChange = (field, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [field]: value,
    }));
  };

  return (
    <Box sx={{ padding: 3 }}>
      {/* Pre-Dashboard Fields */}
      <Paper elevation={3} sx={{ padding: 3, marginBottom: 3 }}>
        <Typography variant="h5" gutterBottom>
          Configure Dashboard
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <TextField
              label="Ticket Status"
              select
              fullWidth
              value={filters.ticketStatus}
              onChange={(e) => handleFilterChange("ticketStatus", e.target.value)}
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Unassigned">Unassigned</MenuItem>
              <MenuItem value="On Hold">On Hold</MenuItem>
              <MenuItem value="Due Soon">Due Soon</MenuItem>
              <MenuItem value="Resolved">Resolved</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              label="Priority"
              select
              fullWidth
              value={filters.priority}
              onChange={(e) => handleFilterChange("priority", e.target.value)}
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="High">High</MenuItem>
              <MenuItem value="Medium">Medium</MenuItem>
              <MenuItem value="Low">Low</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              label="Date Range"
              type="date"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              value={filters.dateRange}
              onChange={(e) => handleFilterChange("dateRange", e.target.value)}
            />
          </Grid>
        </Grid>
      </Paper>

      {/* Dashboard Content */}
      <Typography variant="h4" align="center" gutterBottom>
        HQ Dashboard
      </Typography>

      {/* Status Cards */}
      <Grid container spacing={3} sx={{ marginBottom: 3 }}>
        {ticketStatusData.map((ticket, index) => (
          <Grid item xs={12} sm={6} md={2.4} key={index}>
            <Paper elevation={3} sx={{ padding: 2, textAlign: "center" }}>
              <IconButton color={ticket.color} size="large">
                {ticket.icon}
              </IconButton>
              <Typography variant="h6">{ticket.label}</Typography>
              <Typography variant="h4" sx={{ color: "text.primary", fontWeight: "bold" }}>
                {ticket.count}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        {/* Pie Chart */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 3 }}>
            <Typography variant="h6" align="center">
              Ticket Distribution
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={["#FF7043", "#FFA726", "#26A69A", "#66BB6A", "#42A5F5"][index]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Line Chart */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 3 }}>
            <Typography variant="h6" align="center">
              Ticket Trends
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={ticketStatusData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="label" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="count" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={3} sx={{ marginTop: 3 }}>
        <Grid item xs={12}>
          <Typography variant="h6">Tickets Raised</Typography>
        </Grid>
        {ticketList.map((ticket) => (
          <Grid item xs={12} md={4} key={ticket.id}>
            <Card elevation={3}>
              <CardHeader
                title={ticket.title}
                subheader={`Priority: ${ticket.priority}`}
                sx={{ backgroundColor: "#f5f5f5" }}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {ticket.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  View Details
                </Button>
                <Button size="small" color="secondary">
                  Resolve
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Tabs Below the Dashboard */}
      <Grid container spacing={3} sx={{ marginTop: 3 }}>
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ padding: 3 }}>
            <Typography variant="h6" align="center">
              Ticket Feedback
            </Typography>
            <Tabs value={tabValue} onChange={handleTabChange} centered>
              <Tab label="Likes" />
              <Tab label="Dislikes" />
              <Tab label="Views" />
            </Tabs>
            <Box sx={{ marginTop: 3 }}>
              {tabValue === 0 && (
                <Typography align="center">Feedback on Tickets: Most Liked Tickets</Typography>
              )}
              {tabValue === 1 && (
                <Typography align="center">Feedback on Tickets: Tickets with Issues</Typography>
              )}
              {tabValue === 2 && (
                <Typography align="center">Feedback on Tickets: Most Viewed Tickets</Typography>
              )}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HQDashboard;
