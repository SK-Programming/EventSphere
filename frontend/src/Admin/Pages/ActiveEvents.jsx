import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  TextField,
  Button,
  Chip,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const dummyActiveEvents = [
  {
    id: 1,
    title: "Global Startup Meet 2025",
    date: "2025-09-20",
    location: "Dubai, UAE",
    description: "Bringing together startups, investors, and innovators.",
    image: "https://picsum.photos/400/200?random=11",
    status: "Ongoing",
  },
  {
    id: 2,
    title: "Future of Design 2025",
    date: "2025-09-12",
    location: "Paris, France",
    description: "Exploring the new trends in creative design industries.",
    image: "https://picsum.photos/400/200?random=12",
    status: "Live",
  },
  {
    id: 3,
    title: "AI World Conference",
    date: "2025-09-10",
    location: "San Francisco, USA",
    description: "Latest advancements in AI, ML, and automation.",
    image: "https://picsum.photos/400/200?random=13",
    status: "Ongoing",
  },
];

function ActiveEvents() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filteredEvents = dummyActiveEvents.filter((event) =>
    event.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box p={4}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Active Events
      </Typography>

      {/* Search Bar */}
      <Box display="flex" mb={3}>
        <TextField
          label="Search Active Events"
          variant="outlined"
          size="small"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          fullWidth
        />
      </Box>

      {/* Events Grid */}
      <Grid container spacing={3}>
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <Grid item xs={12} sm={6} md={4} key={event.id}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                }}
              >
                <CardMedia
                  component="img"
                  height="160"
                  image={event.image}
                  alt={event.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" fontWeight="bold">
                    {event.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {event.date} | {event.location}
                  </Typography>
                  <Typography
                    variant="body2"
                    mt={1}
                    sx={{ minHeight: "60px" }}
                  >
                    {event.description}
                  </Typography>
                </CardContent>
                <Box p={2} pt={0} display="flex" justifyContent="space-between">
                  <Chip
                    label={event.status}
                    color={event.status === "Ongoing" ? "success" : "warning"}
                  />
                  <Button
                    variant="contained"
                    onClick={() => navigate(`/admin/active-events/${event.id}`)}
                  >
                    View Details
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="body1" color="text.secondary" mt={3}>
            No active events found.
          </Typography>
        )}
      </Grid>
    </Box>
  );
}

export default ActiveEvents;
