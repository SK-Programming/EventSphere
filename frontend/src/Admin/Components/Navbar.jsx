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
  People,
  Group,
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

  let highlightTop = -1;
// /previous-exhibitions/:id
  if (location.pathname === "/admin/dashboard") highlightTop = 0;
  else if (location.pathname === "/admin/event-request") highlightTop = 48;
  else if (location.pathname === "/admin/active-events") highlightTop = 96;
  else if (location.pathname.startsWith("/admin/active-events")) highlightTop = 96;

  else if (location.pathname === "/admin/previous-exhibitions") highlightTop = 144;
  else if (location.pathname.startsWith("/admin/previous-exhibitions")) highlightTop = 144;

  else if (location.pathname === "/admin/exhibitors") highlightTop = 192;
  else if (location.pathname === "/admin/users") highlightTop = 240;
  else if (location.pathname === "/admin/messages") highlightTop = 288;

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
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
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center", p: 2 }}>
          <Box sx={{ mx: 1 }}>
            <img src="Logo.png" alt="Logo" height={40} />
          </Box>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "text.primary" }}
          >
            Admin
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "text.logoLite" }}
          >
            Panel
          </Typography>
        </Box>

        {/* Highlight */}
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
                mt: 1,
              }}
            />
          )}

          {/* Sidebar Links */}
          <List>
            <ListItem disablePadding>
              <ListItemButton component={NavLink} to="/admin/dashboard" sx={{ position: "relative", zIndex: 1 }}>
                <ListItemIcon sx={{ color: "text.primary" }}><Dashboard /></ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton component={NavLink} to="/admin/event-request" sx={{ position: "relative", zIndex: 1 }}>
                <ListItemIcon sx={{ color: "text.primary" }}><Event /></ListItemIcon>
                <ListItemText primary="Event Request" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton component={NavLink} to="/admin/active-events" sx={{ position: "relative", zIndex: 1 }}>
                <ListItemIcon sx={{ color: "text.primary" }}><Event /></ListItemIcon>
                <ListItemText primary="Active Events" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton component={NavLink} to="/admin/previous-exhibitions" sx={{ position: "relative", zIndex: 1 }}>
                <ListItemIcon sx={{ color: "text.primary" }}><History /></ListItemIcon>
                <ListItemText primary="Previous Exhibitions" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton component={NavLink} to="/admin/exhibitors" sx={{ position: "relative", zIndex: 1 }}>
                <ListItemIcon sx={{ color: "text.primary" }}><People /></ListItemIcon>
                <ListItemText primary="Exhibitors" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton component={NavLink} to="/admin/users" sx={{ position: "relative", zIndex: 1 }}>
                <ListItemIcon sx={{ color: "text.primary" }}><Group /></ListItemIcon>
                <ListItemText primary="Users" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton component={NavLink} to="/admin/messages" sx={{ position: "relative", zIndex: 1 }}>
                <ListItemIcon sx={{ color: "text.primary" }}><Message /></ListItemIcon>
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
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, position: "absolute", right: 0 }}>
              <Typography variant="body1" fontWeight="500">Admin User</Typography>
              <IconButton onClick={handleMenuOpen}>
                <Avatar src="https://randomuser.me/api/portraits/men/11.jpg" />
              </IconButton>
              <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                <MenuItem onClick={() => navigate("/admin/profile")}>Profile</MenuItem>
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
