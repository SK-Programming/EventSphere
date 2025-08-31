import React, { useRef, useState } from "react";
import {
  Box,
  Typography,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
  TextField,
} from "@mui/material";
import { Link } from "react-router";
import InfoIcon from "@mui/icons-material/Info";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const galleryEvents = [
  { id: 1, title: "Web Design Conference", date: "Dec 02, 2024", img: "https://picsum.photos/500/300?random=11" },
  { id: 2, title: "Marketing Summit", date: "Dec 10, 2024", img: "https://picsum.photos/500/300?random=12" },
  { id: 3, title: "AI Expo", date: "Dec 15, 2024", img: "https://picsum.photos/500/300?random=13" },
  { id: 4, title: "Startup Fair", date: "Jan 05, 2025", img: "https://picsum.photos/500/300?random=14" },
  { id: 5, title: "Tech Meetup", date: "Jan 15, 2025", img: "https://picsum.photos/500/300?random=15" },
  { id: 6, title: "Developers Forum", date: "Feb 01, 2025", img: "https://picsum.photos/500/300?random=16" },
  { id: 7, title: "AI Hackathon", date: "Feb 20, 2025", img: "https://picsum.photos/500/300?random=17" },
  { id: 8, title: "Cloud Expo", date: "Mar 05, 2025", img: "https://picsum.photos/500/300?random=18" },
  { id: 9, title: "Design Meetup", date: "Mar 15, 2025", img: "https://picsum.photos/500/300?random=19" },
];

function Gallery() {
  const [selectedDate, setSelectedDate] = useState("");
  const scrollRef = useRef(null);

  const filteredEvents = selectedDate
    ? galleryEvents.filter((e) => e.date === selectedDate)
    : galleryEvents;

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -600 : 600,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box sx={{ p: 4 }}>
      {/* Header with Date Picker */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
        <Typography variant="h4" fontWeight="bold">
          Recent Events Gallery
        </Typography>
        <TextField
          type="date"
          size="small"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </Box>

      {/* Carousel Wrapper */}
      <Box sx={{ position: "relative" }}>
        {/* Left Scroll Button */}
        <IconButton
          onClick={() => scroll("left")}
          sx={{
            position: "absolute",
            top: "40%",
            left: -20,
            zIndex: 2,
            background: "white",
            boxShadow: 2,
            "&:hover": { background: "secondary.light" },
          }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>

    
        <Box
          ref={scrollRef}
          sx={{
            display: "grid",
            gridTemplateRows: "repeat(2, 1fr)", 
            gridAutoFlow: "column",
            gap: 2,
            overflowX: "auto",
            scrollBehavior: "smooth",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
            p: 1,
          }}
        >
          {filteredEvents.map((event) => (
            <ImageList key={event.id} cols={1} gap={16} sx={{ width: 300 ,overflow:"hidden"}}>
              <ImageListItem>
                <img
                  src={event.img}
                  alt={event.title}
                  loading="lazy"
                  style={{
                    borderRadius: "12px",
                    transition: "transform 0.3s ease",
                    cursor: "pointer",
                  }}
           
                />
                <ImageListItemBar
                  title={event.title}
                  subtitle={event.date}
                  sx={{ borderBottomRightRadius: "12px", borderBottomLeftRadius: "12px"}}
                  actionIcon={
                    <IconButton
                      component={Link}
                      to={`/events/${event.id}`}
                      sx={{ color: "white" }}
                      
                    >
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </ImageListItem>
            </ImageList>
          ))}
        </Box>

        
        <IconButton
          onClick={() => scroll("right")}
          sx={{
            position: "absolute",
            top: "40%",
            right: -20,
            zIndex: 2,
            background: "white",
            boxShadow: 2,
            "&:hover": { background: "secondary.light" },
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Gallery;
