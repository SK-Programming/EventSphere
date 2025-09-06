import React, { useState } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  TextField,
  InputAdornment,
  Avatar,
  Chip,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const exhibitorsData = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    phone: "123-456-7890",
    company: "Tech Solutions",
    profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
    coverImage: "https://picsum.photos/800/200?random=1",
    exhibitions: ["Expo 2023", "Tech Fair 2024"],
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "987-654-3210",
    company: "Creative Agency",
    profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
    coverImage: "https://picsum.photos/800/200?random=2",
    exhibitions: ["Design Expo 2022", "Marketing Summit 2024"],
  },
];

function Exhibitors() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filtered = exhibitorsData.filter(
    (ex) =>
      ex.name.toLowerCase().includes(search.toLowerCase()) ||
      ex.company.toLowerCase().includes(search.toLowerCase()) ||
      ex.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box p={3}>
      <Typography variant="h4" mb={2} fontWeight="bold">
        Exhibitors
      </Typography>

      <TextField
        fullWidth
        placeholder="Search exhibitors..."
        variant="outlined"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
        sx={{ mb: 4 }}
      />

      <Grid container spacing={3}>
        {filtered.map((ex) => (
          <Grid item xs={12} sm={6} md={4} key={ex.id}>
            <Card
              sx={{
                borderRadius: 3,
                overflow: "hidden",
                cursor: "pointer",
                transition: "0.3s",
                "&:hover": { transform: "translateY(-5px)", boxShadow: 6 },
              }}
              onClick={() => navigate(`/exhibitors/${ex.id}`, { state: ex })}
            >
              {/* Cover Image */}
              <Box sx={{ position: "relative" }}>
                <CardMedia
                  component="img"
                  height="120"
                  image={ex.coverImage}
                  alt={`${ex.name} cover`}
                />
                <Avatar
                  src={ex.profileImage}
                  alt={ex.name}
                  sx={{
                    width: 70,
                    height: 70,
                    border: "3px solid white",
                    position: "absolute",
                    bottom: -30,
                    left: 16,
                  }}
                />
              </Box>

              <CardContent sx={{ pt: 4 }}>
                <Typography variant="h6" fontWeight="bold">
                  {ex.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {ex.email}
                </Typography>
                <Chip
                  label={ex.company}
                  size="small"
                  sx={{ mt: 1, fontWeight: "medium" }}
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Exhibitors;
