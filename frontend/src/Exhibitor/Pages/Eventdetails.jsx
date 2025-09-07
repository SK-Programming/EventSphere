import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Divider,
  Grid,
  Chip,
} from "@mui/material";
import { ArrowBack, Event, Place } from "@mui/icons-material";

function EventDetail() {
  const { id } = useParams();

  // Mock event data (replace with API call later)
  const events = [
    {
      id: 1,
      title: "Tech Expo 2025",
      date: "2025-09-20",
      location: "Dubai Expo Center",
      description:
        "A global showcase of cutting-edge technology, bringing together innovators, startups, and industry leaders.",
      image: "https://source.unsplash.com/1200x600/?technology,expo",
      tags: ["Technology", "Innovation", "Networking"],
    },
    {
      id: 2,
      title: "AI Innovation Summit",
      date: "2025-11-05",
      location: "Berlin Convention Hall",
      description:
        "An international summit focusing on Artificial Intelligence, Machine Learning, and Robotics.",
      image: "https://source.unsplash.com/1200x600/?artificial-intelligence,conference",
      tags: ["AI", "Robotics", "Machine Learning"],
    },
    {
      id: 3,
      title: "Green Energy Fair",
      date: "2025-12-10",
      location: "London Eco Park",
      description:
        "An exhibition dedicated to renewable energy solutions, eco-technology, and sustainable innovation.",
      image: "https://source.unsplash.com/1200x600/?green-energy,expo",
      tags: ["Sustainability", "Energy", "Eco-Tech"],
    },
  ];

  const event = events.find((e) => e.id.toString() === id);

  if (!event) {
    return (
      <Box sx={{ p: 4 }}>
        <Typography variant="h6" color="error">
          Event not found!
        </Typography>
      </Box>
    );
  }

  return (
    <Box>
      {/* Hero Image */}
      <Box
        sx={{
          position: "relative",
          height: "400px",
          backgroundImage: `url(${event.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            bgcolor: "rgba(0,0,0,0.45)",
            display: "flex",
            alignItems: "flex-end",
            p: 4,
          }}
        >
          <Typography
            variant="h3"
            fontWeight="bold"
            color="white"
            sx={{ textShadow: "2px 2px 8px rgba(0,0,0,0.8)" }}
          >
            {event.title}
          </Typography>
        </Box>
      </Box>

      {/* Content Section */}
      <Box sx={{ p: 4 }}>
  

        <Grid container spacing={4}>
          {/* Left content */}
          <Grid item xs={12} md={8}>
            <Typography
              variant="h6"
              fontWeight="bold"
              gutterBottom

            >
              Event Details
            </Typography>
            <Divider sx={{ mb: 2 }} />

            <Typography
              variant="body1"
              sx={{ display: "flex", alignItems: "center", mb: 1 }}
            >
              <Event sx={{ mr: 1, color: "secondary.main" }} /> {event.date}
            </Typography>

            <Typography
              variant="body1"
              sx={{ display: "flex", alignItems: "center", mb: 2 }}
            >
              <Place sx={{ mr: 1, color: "secondary.main" }} /> {event.location}
            </Typography>

            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              {event.description}
            </Typography>

 
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
              {event.tags?.map((tag, i) => (
                <Chip key={i} label={tag} color="secondary" variant="outlined" />
              ))}
            </Box>
          </Grid>

         
        </Grid>
      </Box>
    </Box>
  );
}

export default EventDetail;
