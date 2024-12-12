import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { AppBar, Toolbar, Tabs, Tab, Box, Typography } from "@mui/material";
import Sidebar from "./components/Sidebar";
import { useTickets } from "./components/TicketContext";
import TicketList from "./components/TicketList";
import TicketForm from "./components/Addticket";
import TicketDetails from "./components/TicketDetails";
import Dashboard from "./components/Dashboard";
import Managekb from "./components/ManageKB";
import Articles from "./components/Articles";
import RecycleBIN from "./components/RecycleBIN";
import Gallery from "./components/Gallery";
import AnalyticsDashboard from './components/AnalyticsDashboard';
import Analytics from "./components/Analytics";
import Customers from "./components/Customers";
import CustomerDetails from "./components/CustomerDetails";
import KnowledgeBase from "./components/KnowledgeBase";
import CommunityPage from "./components/CommunityPage";
import HQDashboard from "./components/HQDashboard";
import Views from "./components/Views";
import NewTeamPage from "./components/NewTeamPage";
import TeamFeeds from "./components/TeamFeeds";
import TeamQueue from "./components/TeamQueue";
import AgentQueue from "./components/AgentQueue";
import Tages from "./components/Tages";
import { TicketProvider } from "./components/TicketContext";
import AdminPanel from "./components/AdminPanel";
import Moderation from "./components/Moderation";
import CommunityArticles from "./components/CommunityArticles";
import CommunityDashboard from "./components/CommunityDashboard";
import Contact from "./components/Contact";
import ContactDetails from "./components/ContactDetails";
import Accountlist from "./components/Accountlist";
import AccountDetails from "./components/AccountDetails";
import Reports from "./components/Reports";
import AdvancedAnalytics from "./components/AdvancedAnalytics";
import Activities from "./components/Activities";
import Calls from "./components/Calls";
import Tasks from "./components/Tasks";
import Events from "./components/Events";



function AppContent() {
  const location = useLocation();
  const [value, setValue] = useState(0);

  // Define category-based tabs configuration
  const tabsConfig = {
    0: ["ticket-dashboard", "agent-queue", "hq-dashboard", "tags", "team-feeds", "views"], // Ticket related options
    1: ["dashboard", "articles", "manage-kb", "recyclebin", "gallery"], // Knowledge related options
    2: ["community-dashboard", "moderation", "community-articles"], // Moderation options
    3: ["contact", "starred-views", "account"],
    4: ["dashboards", "popular-dashboards", "telephony-dashboards", "time-based-dashboards"],
    5: ["activities", "starred-views", "all-views", "calls", "tasks", "events"],
  };

  const activeTabs = tabsConfig[value] || [];

  // Handle tab active state based on URL
  useEffect(() => {
    const activeTab = getActiveTabFromPath(location.pathname);
    console.log("Active Tab Path: ", location.pathname);  // Debugging log
    setValue(activeTab);
  }, [location.pathname]);

  const getActiveTabFromPath = (path) => {
    // Refined matching logic for dynamic routes
    if (path.includes('/ticket/')) return 0;  // For dynamic ticket routes like /ticket/:id
    if (path.includes('/knowledge-base')) return 1;
    if (path.includes('/community')) return 2; // For dynamic community routes
    return 0;
  };

  const handleChange = (_event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      {/* Sidebar */}
      <Sidebar activeTabs={activeTabs} currentTab={activeTabs[value]} />

      <div style={{ flex: 1 }}>
        {/* Top Header Bar */}
        <AppBar position="sticky">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Ticketing System
            </Typography>
            <Box>
              <Tabs value={value} onChange={handleChange} textColor="inherit" indicatorColor="secondary">
                <Tab label="Tickets" component={Link} to="/" />
                <Tab label="Knowledge Base" component={Link} to="/knowledge-base" />
                <Tab label="Community" component={Link} to="/community-dashboard" />
                <Tab label="Customers" component={Link} to="/customers" />
                <Tab label="Analytics" component={Link} to="/analytics" />
                <Tab label="Activities" component={Link} to="/activities" />
                <Tab label="Team Feeds" component={Link} to="/team-feeds" />
              </Tabs>
            </Box>
          </Toolbar>
        </AppBar>

        {/* Main Content */}
        <div style={{ padding: "20px", overflowY: "auto", height: "calc(100vh - 64px)" }}>
          <Routes>
            {/* Knowledge Base Routes */}
            <Route path="/knowledge-base" element={<KnowledgeBase />} />
            <Route path="/manage-kb" element={<Managekb />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/recyclebin" element={<RecycleBIN />} />
            <Route path="/gallery" element={<Gallery />} />

            {/* Other routes */}
            <Route path="/" element={<TicketList />} />
            <Route path="/ticket/:id" element={<TicketDetails />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/dashboards" element={<AnalyticsDashboard />} />
            <Route path="/advanced-analytics" element={<AdvancedAnalytics />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/community-dashboard" element={<CommunityDashboard />} />
            <Route path="/contact" element={<Contact />} />    
            <Route path="/contact/:id" element={<ContactDetails />} />
            <Route path="/account" element={<Accountlist />} />
            <Route path="/account/:id" element={<AccountDetails />} />
            <Route path="/community-moderation" element={<Moderation />} />
            <Route path="/community-articles" element={<CommunityArticles />} />
            <Route path="/community-page" element={<CommunityPage />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/customers/:id" element={<CustomerDetails />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/calls" element={<Calls />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/events" element={<Events />} />
            <Route path="/addticket" element={<TicketForm />} />
            <Route path="/hqdashboard" element={<HQDashboard />} />
            <Route path="/views" element={<Views />} />
            <Route path="/agent-queue" element={<AgentQueue />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/newteampage" element={<NewTeamPage />} />
            <Route path="/team-feeds" element={<TeamFeeds />} />
            <Route path="/team-queue" element={<TeamQueue />} />
            <Route path="/tages" element={<Tages />} />
            <Route path="/adminpanel" element={<AdminPanel />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <TicketProvider>
      <Router>
        <AppContent />
      </Router>
    </TicketProvider>
  );
}

export default App;
