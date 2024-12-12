import React, { useState } from 'react';
import { Grid, Paper, Typography, Box, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

const AgentQueue = () => {
  // State to manage the open dialog
  const [openTicketDialog, setOpenTicketDialog] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);

  // Handler to open the ticket details dialog
  const handleOpenTicket = (ticket) => {
    setSelectedTicket(ticket);
    setOpenTicketDialog(true);
  };

  // Handler to close the ticket details dialog
  const handleCloseTicket = () => {
    setOpenTicketDialog(false);
  };

  // Sample ticket data
  const tickets = [
    {
      id: '#100',
      customer: 'suresh',
      company: 'Westayclose',
      submittedAt: '30 Nov 12:21 PM',
      status: 'Open',
      dueDate: '02 Dec 12:22 PM',
      overdue: true,
      contactInfo: {
        name: 'Suresh',
        company: 'Wsc',
        email: 'suresh.it@westayclose.in',
        phone: '1 888 900 9646',
        website: 'https://westayclose.in/'
      }
    }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Kowsik k (01)
      </Typography>

      {/* Main Grid Layout */}
      <Grid container spacing={3}>
        {/* Overdue Field */}
        <Grid item xs={12} md={2}>
          <Paper
            style={{
              padding: "20px",
              textAlign: "center",
              minHeight: "200px",
              border: "2px solid red",
              borderRadius: "8px",
            }}
          >
            <Typography variant="h6" style={{ color: "red" }}>
              Overdue (1)
            </Typography>
            <Box style={{ marginTop: "20px" }}>
              <Typography variant="body1">Here's your first ticket:</Typography>
              <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
                {tickets[0].id} - {tickets[0].customer} - {tickets[0].company}
              </Typography>
              <Typography variant="body2" style={{ marginTop: "10px" }}>
                {tickets[0].submittedAt}
              </Typography>
              <Button
                variant="contained"
                color="error"
                onClick={() => handleOpenTicket(tickets[0])}
                style={{ marginTop: "10px" }}
              >
                Open
              </Button>
            </Box>
          </Paper>
        </Grid>

        {/* Other Grid items remain the same */}
        <Grid item xs={12} md={2}>
          <Paper
            style={{
              padding: "20px",
              textAlign: "center",
              minHeight: "200px",
            }}
          >
            <Typography variant="h6">Due in 1 Hour</Typography>
            <Box style={{ marginTop: "20px" }}>
              <Typography variant="body1">No tickets in this Queue</Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Remaining Grid items... */}
      </Grid>

      {/* Ticket Details Dialog */}
      <Dialog
        open={openTicketDialog}
        onClose={handleCloseTicket}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>Ticket Details: {selectedTicket?.id}</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            <strong>Customer:</strong> {selectedTicket?.customer}
          </Typography>
          <Typography variant="body1">
            <strong>Company:</strong> {selectedTicket?.company}
          </Typography>
          <Typography variant="body1">
            <strong>Submitted:</strong> {selectedTicket?.submittedAt}
          </Typography>
          <Typography variant="body1" style={{ marginTop: "15px" }}>
            <strong>Contact Info:</strong>
            <br />
            Name: {selectedTicket?.contactInfo.name}
            <br />
            Email: {selectedTicket?.contactInfo.email}
            <br />
            Phone: {selectedTicket?.contactInfo.phone}
            <br />
            Website: {selectedTicket?.contactInfo.website}
          </Typography>
          <Typography variant="body1" style={{ marginTop: "15px" }}>
            <strong>Key Information:</strong>
            <br />
            Status: {selectedTicket?.status}
            <br />
            Due Date: {selectedTicket?.dueDate}
            <br />
            Overdue: {selectedTicket?.overdue ? 'Yes' : 'No'}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseTicket} color="primary">
            Close
          </Button>
          <Button onClick={handleCloseTicket} color="primary" variant="contained">
            Resolve
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AgentQueue;