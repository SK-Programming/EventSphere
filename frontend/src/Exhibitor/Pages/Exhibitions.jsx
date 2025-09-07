import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  TextField,
  InputAdornment,
  Button,
} from "@mui/material";
import { Search, Event } from "@mui/icons-material";

function Exhibitions() {
  const allEvents = [
    {
      id: 1,
      title: "Tech Expo 2025",
      date: "2025-09-20",
      location: "Dubai Expo Center",
      image: "https://source.unsplash.com/800x400/?technology,expo",
    },
    {
      id: 2,
      title: "AI Innovation Summit",
      date: "2025-11-05",
      location: "Berlin Convention Hall",
      image: "https://source.unsplash.com/800x400/?artificial-intelligence,conference",
    },
    {
      id: 3,
      title: "Green Energy Fair",
      date: "2025-12-10",
      location: "London Eco Park",
      image: "https://source.unsplash.com/800x400/?green-energy,expo",
    },
  ];

  const [search, setSearch] = useState("");
  const filteredEvents = allEvents.filter(
    (event) =>
      event.title.toLowerCase().includes(search.toLowerCase()) ||
      event.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Upcoming Exhibitions & Events
      </Typography>

      {/* Search bar */}
      <TextField
        placeholder="Search events by title or location..."
        variant="outlined"
        fullWidth
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ mb: 4, bgcolor: "background.paper", borderRadius: 2 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search color="action" />
            </InputAdornment>
          ),
        }}
      />

      {/* Events grid */}
      <Grid container spacing={3} alignItems="stretch">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <Grid item xs={12} sm={6} md={4} key={event.id}>
              <Card
                sx={{
                  borderRadius: 3,
                  overflow: "hidden",
                  boxShadow: 3,
                  height: "100%", // ✅ make all cards equal height
                  display: "flex",
                  flexDirection: "column",
                  transition: "0.3s",
                  "&:hover": { transform: "translateY(-6px)", boxShadow: 6 },
                }}
              >
                <CardMedia
                  component="img"
                  height="180"
                  image={event.image}
                  alt={event.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" fontWeight="bold">
                    {event.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    📅 {event.date}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    📍 {event.location}
                  </Typography>
                </CardContent>
                <Box sx={{ p: 2 }}>
                  <Button
                    variant="contained"
                    startIcon={<Event />}
                    sx={{ borderRadius: 2 }}
                    fullWidth
                     href={`/exhibitor/events/${event.id}`}
                  >
                    View Details
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography color="text.secondary" sx={{ ml: 2 }}>
            No events found for your search.
          </Typography>
        )}
      </Grid>
    </Box>
  );
}

export default Exhibitions;
