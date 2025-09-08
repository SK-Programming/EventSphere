import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  TextField,
  MenuItem,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const dummyPreviousEvents = [
  {
    id: 1,
    title: "Tech Expo 2024",
    date: "2024-03-15",
    location: "Berlin, Germany",
    description: "Showcased the latest in AI and robotics.",
    image: "https://picsum.photos/400/200?random=1",
    highlights: [
      "AI-powered assistants",
      "Robotics showcases",
      "Networking opportunities",
    ],
  },
  {
    id: 2,
    title: "Design Fair 2023",
    date: "2023-10-05",
    location: "Milan, Italy",
    description: "Celebrated creativity in product and UI/UX design.",
    image: "https://picsum.photos/400/200?random=2",
    highlights: [
      "UI/UX workshops",
      "Product design awards",
      "Exhibitor booths",
    ],
  },
  {
    id: 3,
    title: "Medical Innovations Summit",
    date: "2023-06-20",
    location: "Boston, USA",
    description: "Explored breakthroughs in healthcare technology.",
    image: "https://picsum.photos/400/200?random=3",
    highlights: [
      "AI in healthcare",
      "Biotech startups",
      "Medical device demos",
    ],
  },
];

function PreviousExhibitions() {
  const [search, setSearch] = useState("");
  const [filterYear, setFilterYear] = useState("All");
  const navigate = useNavigate();

  const years = ["All", "2024", "2023"];

  const filteredEvents = dummyPreviousEvents.filter((event) => {
    const matchesSearch = event.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesYear =
      filterYear === "All" || event.date.startsWith(filterYear);
    return matchesSearch && matchesYear;
  });

  return (
    <Box p={4}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Previous Exhibitions
      </Typography>

      <Box display="flex" gap={2} mb={3}>
        <TextField
          label="Search Exhibitions"
          variant="outlined"
          size="small"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          fullWidth
        />
        <TextField
          select
          label="Filter by Year"
          value={filterYear}
          onChange={(e) => setFilterYear(e.target.value)}
          size="small"
          sx={{ minWidth: 150 }}
        >
          {years.map((year) => (
            <MenuItem key={year} value={year}>
              {year}
            </MenuItem>
          ))}
        </TextField>
      </Box>

      <Grid container spacing={3}>
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <Grid item xs={12} sm={6} md={4} key={event.id}>
              <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
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
                <Box p={2} pt={0}>
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={() => navigate(`/admin/previous-exhibitions/${event.id}`)}
                  >
                    View Details
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="body1" color="text.secondary" mt={3}>
            No exhibitions found.
          </Typography>
        )}
      </Grid>
    </Box>
  );
}

export default PreviousExhibitions;
