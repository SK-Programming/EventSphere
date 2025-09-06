import React, { useEffect, useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Alert,
} from "@mui/material";
import axios from "axios";

function Profile() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });
  const [message, setMessage] = useState("");

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/auth/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setFormData({ username: res.data.username, email: res.data.email });
      } catch (err) {
        setMessage("Failed to load profile");
      }
    };
    fetchProfile();
  }, [token]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:5000/api/auth/profile", formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMessage("Profile updated successfully!");
    } catch (err) {
      setMessage("Error updating profile");
    }
  };

  return (
    <Box sx={{ p: 3, display: "flex", justifyContent: "center" }}>
      <Paper sx={{ p: 4, width: 400 }}>
        <Typography variant="h5" mb={2}>
          My Profile
        </Typography>

        {message && <Alert sx={{ mb: 2 }}>{message}</Alert>}

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            name="username"
            label="Username"
            margin="normal"
            value={formData.username}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            name="email"
            label="Email"
            margin="normal"
            value={formData.email}
            onChange={handleChange}
          />
          <Button fullWidth type="submit" variant="contained" sx={{ mt: 2 }}>
            Update Profile
          </Button>
        </form>
      </Paper>
    </Box>
  );
}

export default Profile;
