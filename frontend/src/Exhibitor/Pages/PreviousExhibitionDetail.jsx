import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Divider,
  Chip,
} from "@mui/material";
import { ArrowBack, Event, Place } from "@mui/icons-material";

const dummyPreviousEvents = [
  {
    id: 1,
    title: "Tech Expo 2024",
    date: "2024-03-15",
    location: "Berlin, Germany",
    description: "Showcased the latest in AI and robotics.",
    image: "https://source.unsplash.com/1200x600/?technology,expo",
    tags: ["AI", "Robotics", "Innovation"],
    highlights: ["AI-powered assistants", "Robotics showcases", "Networking opportunities"],
  },
  {
    id: 2,
    title: "Design Fair 2023",
    date: "2023-10-05",
    location: "Milan, Italy",
    description: "Celebrated creativity in product and UI/UX design.",
    image: "https://source.unsplash.com/1200x600/?design,exhibition",
    tags: ["UI/UX", "Creativity", "Product Design"],
    highlights: ["UI/UX workshops", "Product design awards", "Exhibitor booths"],
  },
  {
    id: 3,
    title: "Medical Innovations Summit",
    date: "2023-06-20",
    location: "Boston, USA",
    description: "Explored breakthroughs in healthcare technology.",
    image: "https://source.unsplash.com/1200x600/?medical,conference",
    tags: ["Healthcare", "Biotech", "Medical Tech"],
    highlights: ["AI in healthcare", "Biotech startups", "Medical device demos"],
  },
];

function PreviousExhibitionDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const event = dummyPreviousEvents.find(
    (e) => e.id.toString() === id
  );

  if (!event) {
    return (
      <Box sx={{ p: 4 }}>
        <Typography variant="h6" color="error">
          Exhibition not found!
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
      {/* Hero Image with Overlay */}
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
      <Box sx={{ p: 4, maxWidth: "1200px", mx: "auto" }}>
      
        <Typography
          variant="h6"
          fontWeight="bold"
          gutterBottom
     
        >
          Exhibition Details
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
      </Box>
    </Box>
  );
}

export default PreviousExhibitionDetail;
