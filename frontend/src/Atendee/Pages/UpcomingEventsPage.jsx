import React, { useState } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Divider,
  TextField,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import { Link } from "react-router";

const events = [
  {
    id: 1,
    date: "Dec 02",
    title: "Web Design Conference",
    location: "New York",
    img: "https://picsum.photos/1200/500?random=1",
  },
  {
    id: 2,
    date: "Dec 10",
    title: "Marketing Summit",
    location: "San Francisco",
    img: "https://picsum.photos/1200/500?random=2",
  },
  {
    id: 3,
    date: "Dec 15",
    title: "AI Expo",
    location: "Chicago",
    img: "https://picsum.photos/1200/500?random=3",
  },
  {
    id: 4,
    date: "Jan 05",
    title: "Startup Fair",
    location: "Los Angeles",
    img: "https://picsum.photos/1200/500?random=4",
  },
];

function UpcomingEventsPage() {
  const [search, setSearch] = useState("");

  const filteredEvents = events.filter(
    (event) =>
      event.title.toLowerCase().includes(search.toLowerCase()) ||
      event.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box sx={{ p: 4 }}>
      {/* Carousel with details */}
      {/* Carousel with details */}
      <Swiper
        modules={[Navigation]}
        navigation
        loop
        style={{
          marginBottom: "2rem",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        {events.map((event) => (
          <SwiperSlide key={event.id}>
            <Box sx={{ position: "relative", height: "400px" }}>
              <img
                src={event.img}
                alt={event.title}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  p: 3,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0))",
                  color: "white",
                }}
              >
                <Typography variant="body2">{event.date}</Typography>
                <Typography variant="h5" fontWeight="bold">
                  {event.title}
                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  {event.location}
                </Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  component={Link}
                  to={`/events/${event.id}`}
                  sx={{ borderRadius: 2, fontWeight: "bold" }}
                >
                  View Details
                </Button>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Header + Search */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          Upcoming Events
        </Typography>
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search events..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Box>

      {/* Event Cards */}
      <Grid container spacing={3}>
        {filteredEvents.map((event) => (
          <Grid item xs={12} sm={6} md={3} key={event.id}>
            <Card
              sx={{ borderRadius: 3, boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}
            >
              <CardMedia
                component="img"
                height="160"
                image={event.img}
                alt={event.title}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {event.date}
                </Typography>
                <Typography variant="h6" fontWeight="bold" sx={{ mt: 1 }}>
                  {event.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {event.location}
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Button
                  variant="text"
                  sx={{ fontWeight: "bold", color: "text.primary" }}
                  component={Link}
                  to={`/events/${event.id}`}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default UpcomingEventsPage;
