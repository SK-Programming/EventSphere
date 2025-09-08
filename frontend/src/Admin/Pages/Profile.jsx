import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Avatar,
  Button,
  Modal,
  TextField,
} from "@mui/material";

function Profile() {
  const [open, setOpen] = useState(false);
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+123 456 7890",
    companyName: "TechCorp Ltd.",
    profileImage: "https://picsum.photos/200",
    companyLogo: "https://picsum.photos/100",
  });

  const previousEvents = [
    {
      id: 1,
      title: "Tech Expo 2024",
      date: "2024-03-15",
      location: "Berlin, Germany",
      description: "Showcased the latest in AI and robotics.",
      image: "https://picsum.photos/400/200?random=1",
    },
    {
      id: 2,
      title: "Design Fair 2023",
      date: "2023-10-05",
      location: "Milan, Italy",
      description: "Celebrated creativity in product and UI/UX design.",
      image: "https://picsum.photos/400/200?random=2",
    },
  ];

  const pendingRequests = [
    {
      id: 1,
      title: "Health Tech 2025",
      status: "Pending Approval",
      image: "https://picsum.photos/400/200?random=5",
    },
  ];

  const activeEvents = [
    {
      id: 1,
      title: "Medical Innovations 2025",
      date: "2025-09-15",
      location: "Boston, USA",
      description: "Exploring breakthroughs in healthcare technology.",
      image: "https://picsum.photos/400/200?random=6",
    },
  ];

  const handleChange = (field, value) => {
    setProfile({ ...profile, [field]: value });
  };

  const handleImageChange = (field, file) => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile({ ...profile, [field]: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box p={4}>
      {/* Profile Header */}
      <Box display="flex" alignItems="center" gap={3} mb={5}>
        <Avatar
          src={profile.profileImage}
          alt={profile.name}
          sx={{ width: 120, height: 120 }}
        />
        <Box>
          <Typography variant="h5" fontWeight="bold">
            {profile.name}
          </Typography>
          <Typography color="text.secondary">{profile.email}</Typography>
          <Typography color="text.secondary">{profile.phone}</Typography>
          <Box mt={2} display="flex" alignItems="center" gap={1}>
            <Avatar
              src={profile.companyLogo}
              alt={profile.companyName}
              sx={{ width: 40, height: 40 }}
            />
            <Typography variant="subtitle1">{profile.companyName}</Typography>
          </Box>
          <Button
            variant="contained"
            sx={{ mt: 2 }}
            onClick={() => setOpen(true)}
          >
            Edit Profile
          </Button>
        </Box>
      </Box>

      {/* Previous Events */}
      <Typography variant="h6" gutterBottom>
        Previous Events
      </Typography>
      <Grid container spacing={3} mb={4}>
        {previousEvents.map((event) => (
          <Grid item xs={12} sm={6} md={4} key={event.id}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
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
                <Typography variant="body2" mt={1} sx={{ minHeight: "60px" }}>
                  {event.description}
                </Typography>
              </CardContent>
              <Box p={2} pt={0}>
                <Button variant="contained" fullWidth>
                  View Details
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Pending Requests */}
      <Typography variant="h6" gutterBottom>
        Pending Requests
      </Typography>
      <Grid container spacing={3} mb={4}>
        {pendingRequests.map((req) => (
          <Grid item xs={12} sm={6} md={4} key={req.id}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardMedia
                component="img"
                height="160"
                image={req.image}
                alt={req.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" fontWeight="bold">
                  {req.title}
                </Typography>
                <Typography color="warning.main">{req.status}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Active Events */}
      <Typography variant="h6" gutterBottom>
        Active Events
      </Typography>
      <Grid container spacing={3}>
        {activeEvents.map((event) => (
          <Grid item xs={12} sm={6} md={4} key={event.id}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
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
                <Typography variant="body2" mt={1} sx={{ minHeight: "60px" }}>
                  {event.description}
                </Typography>
              </CardContent>
              <Box p={2} pt={0}>
                <Button variant="contained" fullWidth>
                  Manage Event
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Edit Profile Modal */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          p={4}
          bgcolor="white"
          sx={{
            maxWidth: 400,
            mx: "auto",
            mt: "10%",
            borderRadius: 2,
            boxShadow: 24,
          }}
        >
          <Typography variant="h6" mb={2}>
            Edit Profile
          </Typography>

          {/* Profile Image */}
          <Box display="flex" alignItems="center" gap={2} mb={2}>
            <Avatar src={profile.profileImage} sx={{ width: 60, height: 60 }} />
            <Button component="label" variant="outlined">
              Change
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={(e) =>
                  handleImageChange("profileImage", e.target.files[0])
                }
              />
            </Button>
          </Box>

          {/* Company Logo */}
          <Box display="flex" alignItems="center" gap={2} mb={2}>
            <Avatar src={profile.companyLogo} sx={{ width: 60, height: 60 }} />
            <Button component="label" variant="outlined">
              Change
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={(e) =>
                  handleImageChange("companyLogo", e.target.files[0])
                }
              />
            </Button>
          </Box>

          <TextField
            fullWidth
            label="Name"
            value={profile.name}
            onChange={(e) => handleChange("name", e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Email"
            value={profile.email}
            onChange={(e) => handleChange("email", e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Phone"
            value={profile.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Company Name"
            value={profile.companyName}
            onChange={(e) => handleChange("companyName", e.target.value)}
            sx={{ mb: 2 }}
          />
          <Button variant="contained" fullWidth onClick={() => setOpen(false)}>
            Save
          </Button>
        </Box>
      </Modal>
    </Box>
  );
}

export default Profile;
