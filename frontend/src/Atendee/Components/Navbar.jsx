import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Drawer,
  IconButton,
  List,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import { Menu as MenuIcon, Notifications } from "@mui/icons-material";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  // ✅ Safe JSON.parse for user data
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user");
      setUser(storedUser ? JSON.parse(storedUser) : null);
    } catch (error) {
      console.error("Error parsing user from localStorage:", error);
      setUser(null);
    }
  }, []);

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    handleMenuClose();
    navigate("/login");
  };

  // 🔹 Active underline bar logic
  let left = 228;
  let width = 55;
  if (
    location.pathname === "/upcoming-events" ||
    location.pathname.startsWith("/events/")
  ) {
    left = 312;
    width = 62;
  } else if (location.pathname === "/exhibitors") {
    left = 400;
    width = 85;
  } else if (location.pathname === "/contact") {
    left = 510;
    width = 70;
  }

  return (
    <AppBar
      position="static"
      elevation={0}
      color="primary"
      sx={{ position: "relative" }}
    >
      {/* Active underline bar */}
      <Box
        sx={{
          width: `${width}px`,
          height: "2px",
          bgcolor: "secondary.main",
          position: "absolute",
          bottom: 0,
          left: `${left}px`,
          transition: "all 0.3s ease",
          display: { xs: "none", md: "flex" },
        }}
      />

      <Toolbar disableGutters sx={{ justifyContent: "space-between", px: 2 }}>
        {/* Left: Logo + Links */}
        <Box sx={{ display: "flex", gap: 5, alignItems: "center" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
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

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 5,
              alignItems: "center",
            }}
          >
            <Typography
              component={Link}
              to="/"
              sx={{ textDecoration: "none", color: "text.primary" }}
            >
              Home
            </Typography>
            <Typography
              component={Link}
              to="/upcoming-events"
              sx={{ textDecoration: "none", color: "text.primary" }}
            >
              Events
            </Typography>
            <Typography
              component={Link}
              to="/exhibitors"
              sx={{ textDecoration: "none", color: "text.primary" }}
            >
              Exhibitors
            </Typography>
            <Typography
              component={Link}
              to="/contact"
              sx={{ textDecoration: "none", color: "text.primary" }}
            >
              Contact
            </Typography>
          </Box>
        </Box>

        {/* Right: Notifications + Auth */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton>
            <Notifications />
          </IconButton>

          {user ? (
            <>
              {/* Avatar instead of Register button */}
              <IconButton onClick={handleMenuOpen}>
                <Avatar sx={{ bgcolor: "secondary.main" }}>
                  {user.username ? user.username.charAt(0).toUpperCase() : "U"}
                </Avatar>
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem
                  component={Link}
                  to="/profile"
                  onClick={handleMenuClose}
                >
                  Profile
                </MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </>
          ) : (
            <Button
              variant="contained"
              sx={{
                display: { xs: "none", md: "inline-flex" },
                backgroundColor: "secondary.main",
                fontWeight: "bold",
                borderRadius: "8px",
                "&:hover": { backgroundColor: "secondary.main" },
              }}
              component={Link}
              to="/login"
            >
              Register
            </Button>
          )}

          <IconButton
            sx={{
              display: { xs: "inline-flex", md: "none" },
              color: "text.primary",
            }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 250,
            p: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          <List>
            <Button component={Link} to="/" sx={{ color: "text.primary" }}>
              Home
            </Button>
            <Button
              component={Link}
              to="/upcoming-events"
              sx={{ color: "text.primary" }}
            >
              Events
            </Button>
            <Button
              component={Link}
              to="/exhibitors"
              sx={{ color: "text.primary" }}
            >
              Exhibitors
            </Button>
            <Button
              component={Link}
              to="/contact"
              sx={{ color: "text.primary" }}
            >
              Contact
            </Button>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}

export default Navbar;
