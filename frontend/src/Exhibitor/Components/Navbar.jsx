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
import { useNavigate, useLocation } from "react-router";

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

  // Sidebar nav items (updated according to routes)
  const navItems = [
    { text: "Dashboard", icon: <Dashboard />, path: "/exhibitor/dashboard" },
    { text: "My Exhibitions", icon: <Event />, path: "/exhibitor/exhibitions" },
    { text: "Previous Exhibitions", icon: <History />, path: "/exhibitor/previous-exhibitions" },
    { text: "Create Event", icon: <AddCircle />, path: "/exhibitor/create-event" },
    { text: "Messages", icon: <Message />, path: "/exhibitor/messages" },
  ];

  // Active index
  const activeIndex = navItems.findIndex((item) =>
    location.pathname.startsWith(item.path)
  );

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

        <Box sx={{ position: "relative", flex: 1 ,mt:2}}>
     
          <Box
            sx={{
              position: "absolute",
              top: `${activeIndex * 48}px`,
              left: 0,
              mt:1,
              width: "100%",
              height: "48px",
              bgcolor: "secondary.main",
           
              transition: "top 0.3s ease",
            }}
          />
          <List>
            {navItems.map((item, index) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton
                  onClick={() => navigate(item.path)}
                  selected={index === activeIndex}
                  sx={{
                    "&.Mui-selected": {
                      fontWeight: "bold",
                      color: "text.primary",
                    },
                  }}
                >
                  <ListItemIcon sx={{ color: "text.primary" }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      <Box sx={{ flexGrow: 1 }}>

        <AppBar
          position="static"
          elevation={0}
          sx={{
            bgcolor: "primary.main",
            borderBottom: "1px solid #eee",
            color: "text.primary",
            width:"100%",
          }}
        >
          <Toolbar sx={{ position:"relative"}}>
           
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 ,position:"absolute",right:0}}>
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
