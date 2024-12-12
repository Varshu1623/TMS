import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {
    Typography,
    Box,
    Button,
    Menu,
    MenuItem,
    Collapse,
    TextField,
    Tabs,
    Tab,
    Paper,
} from "@mui/material";

const CustomerDetails = () => {
    const location = useLocation();
    const customer = location.state?.customer;

    const [status, setStatus] = useState("Open");
    const [anchorEl, setAnchorEl] = useState(null);
    const [expandedSections, setExpandedSections] = useState({
        contactInfo: false,
        keyInformation: false,
        ticketInformation: false,
        additionalInformation: false,
    });
    const [activeTab, setActiveTab] = useState(0);
    const [reply, setReply] = useState("");

    if (!customer) return <div>Customer not found.</div>;

    const handleStatusClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleStatusClose = (newStatus) => {
        setAnchorEl(null);
        if (newStatus) setStatus(newStatus);
    };

    const toggleSection = (section) => {
        setExpandedSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    const handleReplyChange = (event) => {
        setReply(event.target.value);
    };

    const handleReplySubmit = () => {
        alert(`Reply Submitted: ${reply}`);
        setReply("");
    };

    return (
        <div style={{ display: "flex", height: "100vh" }}>
            {/* Sidebar */}
            <div
                style={{
                    width: "300px",
                    backgroundColor: "#f9f9f9",
                    padding: "20px",
                    borderRight: "1px solid #ddd",
                    position: "relative",
                }}
            >
                <Typography variant="h6" style={{ marginBottom: "10px" }}>
                    Ticket Properties
                </Typography>

                {/* Collapsible sections */}
                <Typography
                    style={{
                        fontWeight: "bold",
                        marginTop: "10px",
                        cursor: "pointer",
                    }}
                    onClick={() => toggleSection("contactInfo")}
                >
                    Contact Info
                </Typography>
                <Collapse in={expandedSections.contactInfo}>
                    <Typography>Name: {customer.name}</Typography>
                    <Typography>Email: {customer.email}</Typography>
                    <Typography>Phone: {customer.phone}</Typography>
                </Collapse>

                <Typography
                    style={{
                        fontWeight: "bold",
                        marginTop: "20px",
                        cursor: "pointer",
                    }}
                    onClick={() => toggleSection("keyInformation")}
                >
                    Key Information
                </Typography>
                <Collapse in={expandedSections.keyInformation}>
                    <Typography>Status: {status}</Typography>
                    <Typography>Priority: High</Typography>
                </Collapse>

                <Typography
                    style={{
                        fontWeight: "bold",
                        marginTop: "20px",
                        cursor: "pointer",
                    }}
                    onClick={() => toggleSection("ticketInformation")}
                >
                    Ticket Information
                </Typography>
                <Collapse in={expandedSections.ticketInformation}>
                    <Typography>Created On: 02 Dec 12:22 PM</Typography>
                    <Typography>Assigned To: {customer.assignedTo}</Typography>
                </Collapse>

                <Typography
                    style={{
                        fontWeight: "bold",
                        marginTop: "20px",
                        cursor: "pointer",
                    }}
                    onClick={() => toggleSection("additionalInformation")}
                >
                    Additional Information
                </Typography>
                <Collapse in={expandedSections.additionalInformation}>
                    <Typography>Details about the ticket or other info.</Typography>
                </Collapse>
            </div>

            {/* Main Content */}
            <div style={{ flex: 1, padding: "20px" }}>
                {/* Header with ticket and status */}
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    style={{ marginBottom: "20px" }}
                >
                    <Typography variant="h5">{customer.name}'s Ticket</Typography>
                    <Button
                        variant="outlined"
                        color="primary"
                        onClick={handleStatusClick}
                    >
                        Change Status
                    </Button>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={() => handleStatusClose(null)}
                    >
                        {["Open", "On Hold", "Escalated", "Closed"].map((option) => (
                            <MenuItem
                                key={option}
                                selected={status === option}
                                onClick={() => handleStatusClose(option)}
                            >
                                {option}
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>

                {/* Tabs for switching between different sections */}
                <Tabs
                    value={activeTab}
                    onChange={handleTabChange}
                    indicatorColor="primary"
                    textColor="primary"
                    style={{ marginBottom: "20px" }}
                >
                    <Tab label="Contact Info" />
                    <Tab label="Key Information" />
                    <Tab label="Ticket Information" />
                    <Tab label="Additional Information" />
                </Tabs>

                <Box style={{ marginBottom: "20px" }}>
                    {activeTab === 0 && (
                        <Paper style={{ padding: "20px" }}>
                            <Typography variant="h6">Contact Info</Typography>
                            <Typography>Name: {customer.name}</Typography>
                            <Typography>Email: {customer.email}</Typography>
                            <Typography>Phone: {customer.phone}</Typography>
                        </Paper>
                    )}
                    {activeTab === 1 && (
                        <Paper style={{ padding: "20px" }}>
                            <Typography variant="h6">Key Information</Typography>
                            <Typography>Status: {status}</Typography>
                            <Typography>Priority: High</Typography>
                        </Paper>
                    )}
                    {activeTab === 2 && (
                        <Paper style={{ padding: "20px" }}>
                            <Typography variant="h6">Ticket Information</Typography>
                            <Typography>Created On: 02 Dec 12:22 PM</Typography>
                            <Typography>Assigned To: {customer.assignedTo}</Typography>
                        </Paper>
                    )}
                    {activeTab === 3 && (
                        <Paper style={{ padding: "20px" }}>
                            <Typography variant="h6">Additional Information</Typography>
                            <Typography>Details about the ticket.</Typography>
                        </Paper>
                    )}
                </Box>

                {/* Conversation Section */}
                <Box style={{ marginTop: "30px" }}>
                    <Typography variant="h6">Conversation</Typography>
                    <Box
                        style={{
                            backgroundColor: "#f9f9f9",
                            padding: "10px",
                            border: "1px solid #ddd",
                            marginTop: "10px",
                        }}
                    >
                        <Typography>
                            <strong>Suresh</strong> - 30 Nov 12:21 PM
                        </Typography>
                        <Typography>
                            Welcome to Wsc Desk's new Unified Ticket Screen. Here,
                            you have complete context of the ticket. Now that you
                            have received your first ticket, did you notice that it
                            has been assigned to you?
                        </Typography>
                    </Box>
                </Box>

                {/* Action Buttons (Apply Macro, Remote Assist, Close Ticket) */}
                <Box display="flex" justifyContent="flex-start" gap="10px" marginTop="20px">
                    <Button variant="contained" color="secondary">
                        Apply Macro
                    </Button>
                    <Button variant="contained" color="primary">
                        Remote Assist
                    </Button>
                    <Button variant="contained" color="error">
                        Close Ticket
                    </Button>
                </Box>

                {/* Reply Section */}
                <Box style={{ marginTop: "20px" }}>
                    <TextField
                        label="Reply"
                        variant="outlined"
                        multiline
                        rows={4}
                        fullWidth
                        value={reply}
                        onChange={handleReplyChange}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        style={{ marginTop: "10px" }}
                        onClick={handleReplySubmit}
                    >
                        Submit Reply
                    </Button>
                </Box>
            </div>
        </div>
    );
};

export default CustomerDetails;
