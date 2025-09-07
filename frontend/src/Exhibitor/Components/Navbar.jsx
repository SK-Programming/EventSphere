import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  Dashboard,
  Event,
  History,
  AddCircle,
  Message,
  Logout,
} from "@mui/icons-material";
import { useNavigate, useLocation, NavLink } from "react-router-dom";

function Navbar({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  // 🔥 Manual highlight with if/else
  let highlightTop = -1;

  if (location.pathname === "/exhibitor/dashboard") {
    highlightTop = 0;
  } else if (location.pathname === "/exhibitor/exhibitions") {
    highlightTop = 48;
  } 
  else if (location.pathname.startsWith("/exhibitor/events/")) {
    // dynamic route: matches /exhibitor/events/:id
    highlightTop = 48;
  }
   else if (location.pathname === "/exhibitor/previous-exhibitions") {
    highlightTop = 96;
  }
    else if (location.pathname.startsWith("/previous-exhibitions/")) {
    // dynamic route: matches /exhibitor/events/:id
    highlightTop = 96;
  }

   else if (location.pathname === "/exhibitor/create-event") {
    highlightTop = 144;
  } else if (location.pathname === "/exhibitor/messages") {
    highlightTop = 192;
  } else if (location.pathname === "/exhibitor/profile") {
    highlightTop = 240;
  }

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: 240,
            boxSizing: "border-box",
            bgcolor: "primary.main",
            color: "text.primary",
            position: "relative",
          },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", p: 2 }}>
          <Box sx={{ mx: 1 }}>
            <img src="Logo.png" alt="Logo" height={40} />
          </Box>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "text.primary" }}
          >
            Event
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "text.logoLite" }}
          >
            Sphere
          </Typography>
        </Box>

        {/* Highlight bar */}
        <Box sx={{ position: "relative", flex: 1, mt: 2 }}>
          {highlightTop !== -1 && (
            <Box
              sx={{
                position: "absolute",
                top: `${highlightTop}px`,
                left: 0,
                width: "100%",
                height: "48px",
                bgcolor: "secondary.main",
                transition: "top 0.3s ease",
                zIndex: 0,
                mt:1
              }}
            />
          )}

          <List>
            <ListItem disablePadding>
              <ListItemButton
                component={NavLink}
                to="/exhibitor/dashboard"
                sx={{ position: "relative", zIndex: 1 }}
              >
                <ListItemIcon sx={{ color: "text.primary" }}>
                  <Dashboard />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton
                component={NavLink}
                to="/exhibitor/exhibitions"
                sx={{ position: "relative", zIndex: 1 }}
              >
                <ListItemIcon sx={{ color: "text.primary" }}>
                  <Event />
                </ListItemIcon>
                <ListItemText primary="My Exhibitions" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton
                component={NavLink}
                to="/exhibitor/previous-exhibitions"
                sx={{ position: "relative", zIndex: 1 }}
              >
                <ListItemIcon sx={{ color: "text.primary" }}>
                  <History />
                </ListItemIcon>
                <ListItemText primary="Previous Exhibitions" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton
                component={NavLink}
                to="/exhibitor/create-event"
                sx={{ position: "relative", zIndex: 1 }}
              >
                <ListItemIcon sx={{ color: "text.primary" }}>
                  <AddCircle />
                </ListItemIcon>
                <ListItemText primary="Create Event" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton
                component={NavLink}
                to="/exhibitor/messages"
                sx={{ position: "relative", zIndex: 1 }}
              >
                <ListItemIcon sx={{ color: "text.primary" }}>
                  <Message />
                </ListItemIcon>
                <ListItemText primary="Messages" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          elevation={0}
          sx={{
            bgcolor: "primary.main",
            borderBottom: "1px solid #eee",
            color: "text.primary",
            width: "100%",
          }}
        >
          <Toolbar sx={{ position: "relative" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                position: "absolute",
                right: 0,
              }}
            >
              <Typography variant="body1" fontWeight="500">
                John Doe
              </Typography>
              <IconButton onClick={handleMenuOpen}>
                <Avatar src="https://randomuser.me/api/portraits/men/11.jpg" />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={() => navigate("/exhibitor/profile")}>
                  Profile
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                  <Logout fontSize="small" sx={{ mr: 1 }} /> Logout
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </AppBar>

        {/* Page content */}
        <Box p={3}>{children}</Box>
      </Box>
    </Box>
  );
}

export default Navbar;
