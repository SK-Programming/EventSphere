import React from "react";
import { useParams, Link } from "react-router";
import { Typography, Button, Container } from "@mui/material";

const events = [
  { id: 1, date: "Dec 02", title: "Web Design Conference", location: "New York", img: "https://picsum.photos/800/400?random=1", description: "A deep dive into the latest web design trends." },
  { id: 2, date: "Dec 10", title: "Marketing Summit", location: "San Francisco", img: "https://picsum.photos/800/400?random=2", description: "Learn cutting-edge marketing strategies." },
  { id: 3, date: "Dec 15", title: "AI Expo", location: "Chicago", img: "https://picsum.photos/800/400?random=3", description: "Explore innovations in artificial intelligence." },
  { id: 4, date: "Jan 05", title: "Startup Fair", location: "Los Angeles", img: "https://picsum.photos/800/400?random=4", description: "Network with startups and investors." },
];

function EventDetails() {
  const { id } = useParams();
  const event = events.find((e) => e.id === parseInt(id));

  if (!event) {
    return <Typography variant="h5">Event not found</Typography>;
  }

  return (
    <Container sx={{ mt: 5 }}>
      <img src={event.img} alt={event.title} style={{ width: "100%", borderRadius: "8px" }} />
      <Typography variant="h4" sx={{ mt: 3 }}>{event.title}</Typography>
      <Typography color="textSecondary">{event.date} — {event.location}</Typography>
      <Typography sx={{ mt: 2 }}>{event.description}</Typography>

      <Button component={Link} to="/events" variant="outlined" sx={{ mt: 3 }}>
        Back to Events
      </Button>
    </Container>
  );
}

export default EventDetails;
