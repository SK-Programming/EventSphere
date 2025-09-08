import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Divider,
  Chip,
} from "@mui/material";
import { ArrowBack, Event, Place } from "@mui/icons-material";

const dummyActiveEvents = [
  {
    id: 1,
    title: "Global Startup Meet 2025",
    date: "2025-09-20",
    location: "Dubai, UAE",
    description: "Bringing together startups, investors, and innovators.",
    image: "https://source.unsplash.com/1200x600/?business,conference",
    tags: ["Startups", "Innovation", "Networking"],
    highlights: [
      "Pitch sessions",
      "Investor meetups",
      "Global exposure",
    ],
    status: "Ongoing",
  },
  {
    id: 2,
    title: "Future of Design 2025",
    date: "2025-09-12",
    location: "Paris, France",
    description: "Exploring the new trends in creative design industries.",
    image: "https://source.unsplash.com/1200x600/?design,conference",
    tags: ["Design", "Creativity", "UI/UX"],
    highlights: ["Workshops", "Awards", "Exhibitions"],
    status: "Live",
  },
  {
    id: 3,
    title: "AI World Conference",
    date: "2025-09-10",
    location: "San Francisco, USA",
    description: "Latest advancements in AI, ML, and automation.",
    image: "https://source.unsplash.com/1200x600/?artificial,intelligence",
    tags: ["AI", "Machine Learning", "Automation"],
    highlights: ["AI research papers", "Product demos", "Networking"],
    status: "Ongoing",
  },
];

function ActiveEventsDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const event = dummyActiveEvents.find((e) => e.id.toString() === id);

  if (!event) {
    return (
      <Box sx={{ p: 4 }}>
        <Typography variant="h6" color="error">
          Event not found!
        </Typography>
        <Button
          variant="outlined"
          sx={{ mt: 2 }}
          onClick={() => navigate(-1)}
        >
          Go Back
        </Button>
      </Box>
    );
  }

  return (
    <Box>
      {/* Hero Section */}
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

      {/* Details Section */}
      <Box sx={{ p: 4, maxWidth: "1200px", mx: "auto" }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Event Details
          </Typography>
          <Chip
            label={event.status}
            color={event.status === "Ongoing" ? "success" : "warning"}
          />
        </Box>
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

        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Key Highlights
        </Typography>
        <ul>
          {event.highlights.map((highlight, i) => (
            <li key={i}>
              <Typography variant="body2" sx={{ mb: 1 }}>
                {highlight}
              </Typography>
            </li>
          ))}
        </ul>

        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mt: 2 }}>
          {event.tags?.map((tag, i) => (
            <Chip key={i} label={tag} color="secondary" variant="outlined" />
          ))}
        </Box>

        {/* Actions */}
        <Box mt={4} display="flex" gap={2}>
          <Button variant="contained" color="success">
            Manage Event
          </Button>
          <Button variant="outlined" color="error">
            End Event
          </Button>
          <Button variant="text" onClick={() => navigate(-1)}>
            <ArrowBack sx={{ mr: 1 }} /> Back
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default ActiveEventsDetails;
