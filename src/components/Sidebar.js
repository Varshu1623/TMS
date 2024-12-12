import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Collapse,
  Divider,
  Box,
  Typography
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  Folder as FolderIcon,
  Description as DescriptionIcon,
  People as PeopleIcon,
  Settings as SettingsIcon,
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
  Article as ArticleIcon,
  Delete as RecycleBinIcon,
  PhotoLibrary as GalleryIcon,
  Event as EventIcon,
  Call as CallIcon,
  Task as TaskIcon,
  Assignment as AssignmentIcon,
  LocalOffer as LocalOfferIcon,
  Queue as QueueIcon,
  RssFeed as RssFeedIcon
} from "@mui/icons-material";
import ForumIcon from "@mui/icons-material/Forum";
import RadarIcon from"@mui/icons-material/Radar";

const Sidebar = ({ activeTabs, currentTab }) => {
  const [openTickets, setOpenTickets] = useState(false);
  const [openKnowledgeBase, setOpenKnowledgeBase] = useState(false);
  const [openCommunity, setOpenCommunity] = useState(false);
  const [openCustomers, setOpenCustomers] = useState(false);
  const [openAnalytics, setOpenAnalytics] = useState(false);
  const [openActivities, setOpenActivities] = useState(false);

  const getListItemStyle = (tab) => ({
    color: "#fff",
    padding: "12px 20px",
    backgroundColor: currentTab === tab ? "#2980b9" : "transparent", // Highlight active tab
  });

  const toggleSection = (section) => {
    if (section === "tickets") setOpenTickets(!openTickets);
    if (section === "knowledgeBase") setOpenKnowledgeBase(!openKnowledgeBase);
    if (section === "community") setOpenCommunity(!openCommunity);
    if (section === "customers") setOpenCustomers(!openCustomers);
    if (section === "analytics") setOpenAnalytics(!openAnalytics);
    if (section === "activities") setOpenActivities(!openActivities);
  };

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          backgroundColor: "#2C3E50",
          color: "#fff",
          height: "100vh",
        },
      }}
    >
      <Box sx={{ padding: 3, backgroundColor: "#2C3E50" }}>
        <Typography variant="h6" sx={{ color: "#fff", textAlign: "center", marginBottom: 2 }}>
          WSC Desk
        </Typography>
      </Box>

      <List>
        {/* Tickets Section */}
        <ListItem button onClick={() => toggleSection("tickets")}>
          <ListItemIcon style={{ color: "#fff" }}>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Tickets" />
          {openTickets ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>
        <Collapse in={openTickets} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button component={Link} to="/hqdashboard" style={getListItemStyle("hq")}>
              <ListItemIcon style={{ color: "#fff" }}>
                <FolderIcon />
              </ListItemIcon>
              <ListItemText primary="HQ" />
            </ListItem>
            <ListItem button component={Link} to="/team-feeds" style={getListItemStyle("team-feeds")}>
              <ListItemIcon style={{ color: "#fff" }}>
                <RssFeedIcon />
              </ListItemIcon>
              <ListItemText primary="Team Feeds" />
            </ListItem>
            <ListItem button component={Link} to="/views" style={getListItemStyle("views")}>
              <ListItemIcon style={{ color: "#fff" }}>
                <FolderIcon />
              </ListItemIcon>
              <ListItemText primary="Views" />
            </ListItem>
            <ListItem button component={Link} to="/agent-queue" style={getListItemStyle("agent-queue")}>
              <ListItemIcon style={{ color: "#fff" }}>
                <QueueIcon />
              </ListItemIcon>
              <ListItemText primary="Agent Queue" />
            </ListItem>
            <ListItem button component={Link} to="/team-queue" style={getListItemStyle("team-queue")}>
              <ListItemIcon style={{ color: "#fff" }}>
                <QueueIcon />
              </ListItemIcon>
              <ListItemText primary="Team Queue" />
            </ListItem>
            
          </List>
        </Collapse>

        {/* Knowledge Base Section */}
        <ListItem button onClick={() => toggleSection("knowledgeBase")}>
          <ListItemIcon style={{ color: "#fff" }}>
            <DescriptionIcon />
          </ListItemIcon>
          <ListItemText primary="Knowledge Base" />
          {openKnowledgeBase ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>
        <Collapse in={openKnowledgeBase} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button component={Link} to="/dashboard" style={getListItemStyle("dashboard")}>
              <ListItemIcon style={{ color: "#fff" }}>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button component={Link} to="/articles" style={getListItemStyle("articles")}>
              <ListItemIcon style={{ color: "#fff" }}>
                <ArticleIcon />
              </ListItemIcon>
              <ListItemText primary="Articles" />
            </ListItem>
            <ListItem button component={Link} to="/manage-kb" style={getListItemStyle("manage-kb")}>
              <ListItemIcon style={{ color: "#fff" }}>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Manage KB" />
            </ListItem>
            <ListItem button component={Link} to="/gallery" style={getListItemStyle("gallery")}>
              <ListItemIcon style={{ color: "#fff" }}>
                <GalleryIcon />
              </ListItemIcon>
              <ListItemText primary="Gallery" />
            </ListItem>
            <ListItem button component={Link} to="/recyclebin" style={getListItemStyle("recyclebin")}>
              <ListItemIcon style={{ color: "#fff" }}>
                <RecycleBinIcon />
              </ListItemIcon>
              <ListItemText primary="Recycle Bin" />
            </ListItem>
          </List>
        </Collapse>

        {/* Community Section */}
        <ListItem button onClick={() => toggleSection("community")}>
          <ListItemIcon style={{ color: "#fff" }}>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Community" />
          {openCommunity ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>
        <Collapse in={openCommunity} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button component={Link} to="/community-dashboard" style={getListItemStyle("community-dashboard")}>
              <ListItemIcon style={{ color: "#fff" }}>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button component={Link} to="/community-moderation" style={getListItemStyle("community-moderation")}>
              <ListItemIcon style={{ color: "#fff" }}>
                <ForumIcon />
              </ListItemIcon>
              <ListItemText primary="Moderation" />
            </ListItem>
          </List>
        </Collapse>

        {/* Customers Section */}
        <ListItem button onClick={() => toggleSection("customers")}>
          <ListItemIcon style={{ color: "#fff" }}>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Customers" />
          {openCustomers ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>
        <Collapse in={openCustomers} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button component={Link} to="/contact" style={getListItemStyle("contact")}>
              <ListItemIcon style={{ color: "#fff" }}>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Contact" />
            </ListItem>
            <ListItem button component={Link} to="/account" style={getListItemStyle("account")}>
              <ListItemIcon style={{ color: "#fff" }}>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText primary="Account" />
            </ListItem>
          </List>
        </Collapse>

        {/* Analytics Section */}
        <ListItem button onClick={() => toggleSection("analytics")}>
          <ListItemIcon style={{ color: "#fff" }}>
            <EventIcon />
          </ListItemIcon>
          <ListItemText primary="Analytics" />
          {openAnalytics ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>
        <Collapse in={openAnalytics} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button component={Link} to="/dashboards" style={getListItemStyle("dashboards")}>
              <ListItemIcon style={{ color: "#fff" }}>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboards" />
            </ListItem>
            <ListItem button component={Link} to="/reports" style={getListItemStyle("reports")}>
              <ListItemIcon style={{ color: "#fff" }}>
                <DescriptionIcon />
              </ListItemIcon>
              <ListItemText primary="Reports" />
            </ListItem>
            <ListItem button component={Link} to="/advanced-analytics" style={getListItemStyle("advanced-analytics")}>
              <ListItemIcon style={{ color: "#fff" }}>
                <EventIcon />
              </ListItemIcon>
              <ListItemText primary="Advanced Analytics" />
            </ListItem>
           
          </List>
        </Collapse>

        {/* Activities Section */}
        <ListItem button onClick={() => toggleSection("activities")}>
          <ListItemIcon style={{ color: "#fff" }}>
            <EventIcon />
          </ListItemIcon>
          <ListItemText primary="Activities" />
          {openActivities ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>
        <Collapse in={openActivities} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button component={Link} to="/activities" style={getListItemStyle("activities")}>
              <ListItemIcon style={{ color: "#fff" }}>
                <EventIcon />
              </ListItemIcon>
              <ListItemText primary="Activities" />
            </ListItem>
            <ListItem button component={Link} to="/calls" style={getListItemStyle("calls")}>
              <ListItemIcon style={{ color: "#fff" }}>
                <CallIcon />
              </ListItemIcon>
              <ListItemText primary="Calls" />
            </ListItem>
            <ListItem button component={Link} to="/tasks" style={getListItemStyle("tasks")}>
              <ListItemIcon style={{ color: "#fff" }}>
                <TaskIcon />
              </ListItemIcon>
              <ListItemText primary="Tasks" />
            </ListItem>
            <ListItem button component={Link} to="/events" style={getListItemStyle("events")}>
              <ListItemIcon style={{ color: "#fff" }}>
                <EventIcon />
              </ListItemIcon>
              <ListItemText primary="Events" />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </Drawer>
  );
};

export default Sidebar;
