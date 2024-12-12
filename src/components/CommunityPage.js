import React, { useState, useEffect } from "react";
import { Box, Typography, Card, CardContent, List, ListItem, ListItemText, Divider, Button, Grid } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ArticleIcon from "@mui/icons-material/Article";
import ForumIcon from "@mui/icons-material/Forum";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Link } from "react-router-dom";

const CommunityPage = () => {
  // Optional: Dynamic Data
  const [announcements, setAnnouncements] = useState([]);
  const [articles, setArticles] = useState([]);
  const [topContributors, setTopContributors] = useState([]);

  useEffect(() => {
    // Mock fetching data (replace with API calls)
    setAnnouncements([
      { title: "Welcome to the New Community Hub!", author: "Kowsik", timestamp: "7 hours ago" },
      { title: "New Features in Community Discussion", author: "Admin", timestamp: "2 days ago" }
    ]);

    setArticles([
      { title: "How to resolve login issues", author: "Admin", timestamp: "4 hours ago" },
      { title: "Getting started with the Community Hub", author: "Kowsik", timestamp: "7 hours ago" }
    ]);

    setTopContributors([
      { name: "Kowsik", posts: 12, replies: 4 },
      { name: "John Doe", posts: 10, replies: 2 }
    ]);
  }, []);

  const sectionStyle = {
    padding: 3,
    marginBottom: 3
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "row", padding: 3 }}>
      {/* Sidebar Section */}
      <Box
        sx={{
          width: "240px",
          backgroundColor: "#2C3E50",
          color: "#fff",
          padding: 2,
          height: "100vh",
          borderRadius: "8px",
          marginRight: 3,
        }}
      >
        <Typography variant="h6" sx={{ marginBottom: 2, fontWeight: "bold" }}>
          Community
        </Typography>
        <List>
          <ListItem button component={Link} to="/community-dashboard">
            <DashboardIcon sx={{ color: "#fff", marginRight: 1 }} />
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button component={Link} to="/community-moderation">
            <ForumIcon sx={{ color: "#fff", marginRight: 1 }} />
            <ListItemText primary="Moderation" />
          </ListItem>
          <ListItem button component={Link} to="/community-articles">
            <ArticleIcon sx={{ color: "#fff", marginRight: 1 }} />
            <ListItemText primary="Articles" />
          </ListItem>
          <ListItem button component={Link} to="/manage-community">
            <ManageSearchIcon sx={{ color: "#fff", marginRight: 1 }} />
            <ListItemText primary="Manage Community" />
          </ListItem>
          <Divider sx={{ my: 2 }} />
          <ListItem button>
            <AddCircleIcon sx={{ color: "#fff", marginRight: 1 }} />
            <ListItemText primary="Post New Article" />
          </ListItem>
        </List>
      </Box>

      {/* Main Content Section */}
      <Box sx={{ flex: 1 }}>
        {/* Welcome Section */}
        <Card elevation={3} sx={sectionStyle}>
          <Typography variant="h5" color="primary" sx={{ marginBottom: 2 }}>
            Welcome to Community Hub
          </Typography>
          <Typography variant="body1" sx={{ color: "#555" }}>
            The Community Hub lets you interact with other users, create discussions, share articles, and resolve queries.
            Check out the latest updates and participate in ongoing discussions!
          </Typography>
          <Typography variant="caption" sx={{ display: "block", marginTop: 2 }}>
            7 hours ago
          </Typography>
        </Card>

        {/* Announcements Section */}
        <Card elevation={3} sx={sectionStyle}>
          <Typography variant="h6" sx={{ marginBottom: 2 }}>
            Announcements
          </Typography>
          <List>
            {announcements.map((announcement, index) => (
              <ListItem button key={index}>
                <ListItemText primary={announcement.title} secondary={`${announcement.author} • ${announcement.timestamp}`} />
              </ListItem>
            ))}
            <Button variant="text" sx={{ color: "primary.main" }}>
              Show all announcements
            </Button>
          </List>
        </Card>

        {/* Community Articles Section */}
        <Card elevation={3} sx={sectionStyle}>
          <Typography variant="h6" sx={{ marginBottom: 2 }}>
            Latest Community Articles
          </Typography>
          <List>
            {articles.map((article, index) => (
              <ListItem button component={Link} to={`/article/${index}`} key={index}>
                <ListItemText primary={article.title} secondary={`${article.author} • ${article.timestamp}`} />
              </ListItem>
            ))}
            <Button variant="text" sx={{ color: "primary.main" }}>
              View all articles
            </Button>
          </List>
        </Card>

        {/* Top Contributors Section */}
        <Card elevation={3} sx={sectionStyle}>
          <Typography variant="h6" sx={{ marginBottom: 2 }}>
            Top Contributors
          </Typography>
          <List>
            {topContributors.map((contributor, index) => (
              <ListItem key={index}>
                <Typography variant="body2" color="text.primary">{contributor.name}</Typography>
                <Typography variant="caption" color="text.secondary" sx={{ marginLeft: 1 }}>
                  {contributor.posts} Posts • {contributor.replies} Replies
                </Typography>
              </ListItem>
            ))}
          </List>
        </Card>

        {/* Discussions Section */}
        <Card elevation={3} sx={sectionStyle}>
          <Typography variant="h6" sx={{ marginBottom: 2 }}>
            Ongoing Discussions
          </Typography>
          <List>
            <ListItem button component={Link} to="/discussion/1">
              <ListItemText primary="How to get started with Wsc Desk?" secondary="Kowsik • 2 hours ago" />
            </ListItem>
            <ListItem button component={Link} to="/discussion/2">
              <ListItemText primary="Best practices for ticket management" secondary="John Doe • 4 hours ago" />
            </ListItem>
            <Button variant="text" sx={{ color: "primary.main" }}>
              View all discussions
            </Button>
          </List>
        </Card>
      </Box>
    </Box>
  );
};

export default CommunityPage;
