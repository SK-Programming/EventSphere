import React, { useState } from "react"
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Drawer,
  IconButton,
  List,
} from "@mui/material"
import { Menu, Notifications } from "@mui/icons-material"
import { Link, useLocation } from "react-router"

function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const toggleDrawer = (state) => () => {
    setOpen(state)
  }

  let left = 228
  let width = 55

  if (location.pathname === "/events") {
    left = 312
    width = 62
  } else if (location.pathname === "/exhibitors") {
    left = 400
    width = 85
  } else if (location.pathname === "/contact") {
    left = 510
    width = 70
  }

  return (
    <AppBar position="static" elevation={0} color="primary" sx={{ position: "relative" }}>

      <Box
        sx={{
          width: `${width}px`,
          height: "2px",
          bgcolor: "secondary.main",
          position: "absolute",
          bottom: 0,
          left: `${left}px`,
          transition: "all 0.3s ease",
          display: { xs: "none",md:"flex"}
        }}
      />

      <Toolbar disableGutters sx={{ justifyContent: "space-between", px: 2 }}>
        <Box sx={{ display:   "flex", gap: 5, alignItems: "center" }}>
      
          <Box sx={{ display: "flex" , alignItems: "center" }}>
            <Box sx={{ mx: 1 }}>
              <img src="Logo.png" alt="" height={40} />
            </Box>
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "text.primary" }}>
              Event
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "text.logoLite" }}>
              Sphere
            </Typography>
          </Box>


          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 5, alignItems: "center" }}>
            <Typography component={Link} to="/" sx={{ textDecoration: "none", color: "text.primary" }}>
              Home
            </Typography>
            <Typography component={Link} to="/events" sx={{ textDecoration: "none", color: "text.primary" }}>
              Events
            </Typography>
            <Typography component={Link} to="/exhibitors" sx={{ textDecoration: "none", color: "text.primary" }}>
              Exhibitors
            </Typography>
            <Typography component={Link} to="/contact" sx={{ textDecoration: "none", color: "text.primary" }}>
              Contact
            </Typography>
          </Box>
        </Box>


        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton>
            <Notifications />
          </IconButton>
          <Box sx={{ height: 30, width: 30, borderRadius: 50, bgcolor: "lightgray", mr: 2 ,display:"none"}} />
          <Button
            variant="contained"
            sx={{
              display: { xs: "none", md: "inline-flex" },
              backgroundColor: "secondary.main",
              fontWeight: "bold",
              borderRadius: "8px",
              "&:hover": { backgroundColor: "secondary.main" },
            }}
          >
            Start Free Now
          </Button>

          <IconButton
            sx={{ display: { xs: "inline-flex", md: "none" }, color: "text.primary" }}
            onClick={toggleDrawer(true)}
          >
            <Menu />
          </IconButton>
        </Box>
      </Toolbar>

    
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250, p: 2, display: "flex", flexDirection: "column", gap: 2 }}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          <List>
            <Button component={Link} to="/" sx={{ color: "text.primary" }}>
              Home
            </Button>
            <Button component={Link} to="/events" sx={{ color: "text.primary" }}>
              Events
            </Button>
            <Button component={Link} to="/exhibitors" sx={{ color: "text.primary" }}>
              Exhibitors
            </Button>
            <Button component={Link} to="/contact" sx={{ color: "text.primary" }}>
              Contact
            </Button>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  )
}

export default Navbar
