import React, { useState } from "react";
import {
  Tabs,
  Tab,
  Typography,
  Box,
  TextField,
  Paper,
  Button,
  Avatar,
} from "@mui/material";

const TeamFeeds = () => {
  const [tabValue, setTabValue] = useState(0); // Current tab
  const [allFeedsPosts, setAllFeedsPosts] = useState([]); // All Feeds Posts (aggregates all post data)
  const [openTicketsPosts, setOpenTicketsPosts] = useState([]); // Open Tickets Posts
  const [teamFeedPosts, setTeamFeedPosts] = useState([]); // Team Feed Posts
  const [newPostContent, setNewPostContent] = useState(""); // New Post Input
  const [ticketContent, setTicketContent] = useState(""); // Ticket Post Content (for Open Tickets)

  // Handle Tab Change
  const handleTabChange = (_event, newValue) => {
    setTabValue(newValue);
  };

  // Handle Post Content Change
  const handlePostContentChange = (e) => {
    setNewPostContent(e.target.value);
  };

  // Handle Ticket Content Change (for Open Tickets tab)
  const handleTicketContentChange = (e) => {
    setTicketContent(e.target.value);
  };

  // Handle Share Post
  const handleSharePost = () => {
    if (newPostContent.trim() === "") {
      alert("Please enter some text to post.");
      return;
    }

    const newPost = {
      id: new Date().getTime(),
      user: "Kowsik K",
      action: "added a post",
      date: new Date().toLocaleString(),
      content: newPostContent,
    };

    // Add the new post to All Feeds
    setAllFeedsPosts([newPost, ...allFeedsPosts]);

    // Add the post to the respective tab's state
    if (tabValue === 0) {
      setAllFeedsPosts([newPost, ...allFeedsPosts]);
    } else if (tabValue === 1) {
      setOpenTicketsPosts([
        { ...newPost, ticketContent: ticketContent },
        ...openTicketsPosts,
      ]);
    } else if (tabValue === 2) {
      setTeamFeedPosts([newPost, ...teamFeedPosts]);
    }

    // Clear input fields
    setNewPostContent("");
    setTicketContent("");
  };

  const handleCancel = () => {
    setNewPostContent("");
    setTicketContent("");
  };

  const renderPosts = (posts) => {
    return posts.length > 0 ? (
      posts.map((post) => (
        <Paper
          key={post.id}
          elevation={2}
          sx={{ padding: 2, marginBottom: 2, display: "flex" }}
        >
          <Avatar sx={{ marginRight: 2 }}>{post.user.charAt(0)}</Avatar>
          <Box>
            <Typography>
              <b>{post.user}</b> {post.action}.
            </Typography>
            <Typography variant="caption" color="textSecondary">
              {post.date}
            </Typography>
            {/* Display content based on the tab */}
            {post.ticketContent ? (
              // Show ticket-related content in Open Tickets
              <Typography sx={{ marginTop: 1 }}>
                <b>Ticket Content:</b> {post.ticketContent}
              </Typography>
            ) : (
              // Show general content in Team Feed Posts
              <Typography sx={{ marginTop: 1 }}>{post.content}</Typography>
            )}
            <Button size="small" color="primary" sx={{ marginTop: 1 }}>
              Comment
            </Button>
          </Box>
        </Paper>
      ))
    ) : (
      <Typography>No posts yet. Start by creating one!</Typography>
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Team Feeds
      </Typography>
      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
      >
        <Tab label="All Feeds" />
        <Tab label="Feeds - Open Tickets" />
        <Tab label="Team Feed Posts" />
      </Tabs>

      <Box sx={{ padding: 2 }}>
        {/* All Feeds Section */}
        {tabValue === 0 && (
          <Box>
            <Typography variant="h6" gutterBottom>
              All Feeds
            </Typography>
            <TextField
              label="What's on your mind?"
              fullWidth
              multiline
              rows={3}
              variant="outlined"
              value={newPostContent}
              onChange={handlePostContentChange}
              sx={{ marginBottom: 2 }}
            />
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                variant="contained"
                color="primary"
                sx={{ marginRight: 1 }}
                onClick={handleSharePost}
              >
                Share Post
              </Button>
              <Button variant="outlined" color="secondary" onClick={handleCancel}>
                Cancel
              </Button>
            </Box>
            {/* Display All Feeds Posts */}
            {renderPosts(allFeedsPosts)}
          </Box>
        )}

        {/* Feeds - Open Tickets Section */}
        {tabValue === 1 && (
          <Box>
            <Typography variant="h6" gutterBottom>
              Feeds - Open Tickets
            </Typography>
            <TextField
              label="Ticket Content"
              fullWidth
              multiline
              rows={3}
              variant="outlined"
              value={ticketContent}
              onChange={handleTicketContentChange}
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="What's on your mind?"
              fullWidth
              multiline
              rows={3}
              variant="outlined"
              value={newPostContent}
              onChange={handlePostContentChange}
              sx={{ marginBottom: 2 }}
            />
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                variant="contained"
                color="primary"
                sx={{ marginRight: 1 }}
                onClick={handleSharePost}
              >
                Share Post
              </Button>
              <Button variant="outlined" color="secondary" onClick={handleCancel}>
                Cancel
              </Button>
            </Box>
            {/* Display Open Tickets Posts */}
            {renderPosts(openTicketsPosts)}
          </Box>
        )}

        {/* Team Feed Posts Section */}
        {tabValue === 2 && (
          <Box>
            <Typography variant="h6" gutterBottom>
              Create a Post
            </Typography>
            <TextField
              label="What's on your mind?"
              fullWidth
              multiline
              rows={3}
              variant="outlined"
              value={newPostContent}
              onChange={handlePostContentChange}
              sx={{ marginBottom: 2 }}
            />
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                variant="contained"
                color="primary"
                sx={{ marginRight: 1 }}
                onClick={handleSharePost}
              >
                Share Post
              </Button>
              <Button variant="outlined" color="secondary" onClick={handleCancel}>
                Cancel
              </Button>
            </Box>
            {/* Display Team Feed Posts */}
            {renderPosts(teamFeedPosts)}
          </Box>
        )}
      </Box>
    </div>
  );
};

export default TeamFeeds;
