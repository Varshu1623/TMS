import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Button,
  Modal,
} from "@mui/material";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Brush } from 'recharts';
import { ThumbUp, ThumbDown } from '@mui/icons-material';
import { Link } from "react-router-dom";

// Mock data for the articles and metrics
const articles = [
  { id: 1, title: "How to Use Ticketing System", content: "This is a guide on how to use the ticketing system..." },
  { id: 2, title: "Setting Up Agent Accounts", content: "This article explains how to set up agent accounts..." },
  { id: 3, title: "Troubleshooting", content: "This guide helps you troubleshoot common issues..." },
];

// Mock data for graph
const articleViewsData = [
  { date: '2024-12-01', views: 100, likes: 50, dislikes: 10 },
  { date: '2024-12-02', views: 150, likes: 70, dislikes: 15 },
  { date: '2024-12-03', views: 200, likes: 90, dislikes: 20 },
  { date: '2024-12-04', views: 250, likes: 120, dislikes: 25 },
  { date: '2024-12-05', views: 300, likes: 150, dislikes: 30 },
];

const KnowledgeBase = () => {
  const [open, setOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [selectedSection, setSelectedSection] = useState("dashboard");

  const handleOpen = (article) => {
    setSelectedArticle(article);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedArticle(null);
  };

  return (
    <div style={{ display: "flex" }}>
      {/* Main Content */}
      <Box style={{ flex: 1, padding: "20px" }}>
        {selectedSection === "dashboard" && (
          <div>
            <Typography variant="h4" style={{ fontWeight: 600, marginBottom: "20px" }}>
              Knowledge Base Dashboard
            </Typography>

            {/* Overview Dashboard Metrics */}
            <Grid container spacing={2} style={{ marginTop: "20px" }}>
              <Grid item xs={12} sm={6} md={3}>
                <Paper style={{ padding: "20px", backgroundColor: "#f5f5f5" }} elevation={3}>
                  <Typography variant="h6">Total Articles</Typography>
                  <Typography variant="body1" style={{ fontWeight: 600 }}>3</Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Paper style={{ padding: "20px", backgroundColor: "#f5f5f5" }} elevation={3}>
                  <Typography variant="h6">Articles Added Today</Typography>
                  <Typography variant="body1" style={{ fontWeight: 600 }}>0</Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Paper style={{ padding: "20px", backgroundColor: "#f5f5f5" }} elevation={3}>
                  <Typography variant="h6">Likes</Typography>
                  <Typography variant="body1" style={{ fontWeight: 600 }}>
                    <ThumbUp style={{ color: "#007aff", verticalAlign: "middle" }} /> 50
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Paper style={{ padding: "20px", backgroundColor: "#f5f5f5" }} elevation={3}>
                  <Typography variant="h6">Dislikes</Typography>
                  <Typography variant="body1" style={{ fontWeight: 600 }}>
                    <ThumbDown style={{ color: "#f44336", verticalAlign: "middle" }} /> 10
                  </Typography>
                </Paper>
              </Grid>
            </Grid>

            {/* Graph: Article Views Over Time */}
            <Grid container spacing={2} style={{ marginTop: "40px" }}>
              <Grid item xs={12} sm={6} md={6}>
                <Paper style={{ padding: "20px", backgroundColor: "#ffffff" }} elevation={3}>
                  <Typography variant="h6" style={{ fontWeight: 600, marginBottom: "10px" }}>
                    Article Views Over Time
                  </Typography>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={articleViewsData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="views" stroke="#007aff" strokeWidth={2} dot={false} />
                      <Line type="monotone" dataKey="likes" stroke="#ff4081" strokeWidth={2} dot={false} />
                      <Line type="monotone" dataKey="dislikes" stroke="#ff5722" strokeWidth={2} dot={false} />
                      <Brush />
                    </LineChart>
                  </ResponsiveContainer>
                </Paper>
              </Grid>

              <Grid item xs={12} sm={6} md={6}>
                <Paper style={{ padding: "20px", backgroundColor: "#ffffff" }} elevation={3}>
                  <Typography variant="h6" style={{ fontWeight: 600, marginBottom: "10px" }}>
                    Likes vs Dislikes
                  </Typography>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={articleViewsData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="likes" stroke="#4caf50" strokeWidth={2} dot={false} />
                      <Line type="monotone" dataKey="dislikes" stroke="#f44336" strokeWidth={2} dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
                </Paper>
              </Grid>
            </Grid>

            {/* Trending Articles */}
            <Box mt={4}>
              <Typography variant="h5" style={{ fontWeight: 600 }}>Trending Articles</Typography>
              <Grid container spacing={2}>
                {articles.map((article) => (
                  <Grid item xs={12} sm={6} md={4} key={article.id}>
                    <Paper style={{ padding: "10px", backgroundColor: "#f5f5f5" }} elevation={3}>
                      <Typography
                        variant="h6"
                        style={{ cursor: "pointer", fontWeight: 600 }}
                        onClick={() => handleOpen(article)}
                      >
                        {article.title}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Views: 150 | Likes: 20 | Dislikes: 2
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Box>

            {/* Article Effectiveness */}
            <Box mt={4}>
              <Typography variant="h5" style={{ fontWeight: 600 }}>Article Effectiveness</Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                  <Paper style={{ padding: "20px", backgroundColor: "#f5f5f5" }} elevation={3}>
                    <Typography variant="h6">Effective Articles</Typography>
                    <Typography variant="body1" style={{ fontWeight: 600 }}>80%</Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Paper style={{ padding: "20px", backgroundColor: "#f5f5f5" }} elevation={3}>
                    <Typography variant="h6">Ineffective Articles</Typography>
                    <Typography variant="body1" style={{ fontWeight: 600 }}>20%</Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Box>
          </div>
        )}

        {/* Modal for Knowledge Base Articles */}
        <Modal open={open} onClose={handleClose}>
          <Box
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "60%",
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              maxHeight: "80vh",
              overflowY: "auto",
            }}
          >
            <Typography variant="h5">{selectedArticle?.title}</Typography>
            <Typography variant="body1" style={{ marginTop: "20px" }}>
              {selectedArticle?.content}
            </Typography>
            <Button variant="contained" color="primary" style={{ marginTop: "20px" }} onClick={handleClose}>
              Close
            </Button>
          </Box>
        </Modal>
      </Box>
    </div>
  );
};

export default KnowledgeBase;
