import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
} from "@mui/material";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
    alert("Message sent successfully!");
  };

  return (
    <Box p={4}>
      <Typography variant="h3" mb={3} fontWeight="bold" textAlign="center">
        Contact Us
      </Typography>

      <Grid container spacing={4}>
        {/* Left side - Contact Info */}
        <Grid item xs={12} md={5}>
          <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
            <Typography variant="h5" gutterBottom>
              Get in Touch
            </Typography>
            <Typography variant="body1" mb={2}>
              We’d love to hear from you! Fill out the form or use the details
              below to reach us.
            </Typography>
            <Typography variant="body1">
              📍 Address: 123 Tech Street, Innovation City
            </Typography>
            <Typography variant="body1">📧 Email: support@example.com</Typography>
            <Typography variant="body1">📞 Phone: +92 3132245263</Typography>
          </Paper>
        </Grid>

        {/* Right side - Contact Form */}
        <Grid item xs={12} md={7}>
          <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
            <Typography variant="h5" mb={2}>
              Send a Message
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Your Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Your Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                margin="normal"
                multiline
                rows={4}
                required
              />
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 2, px: 4, py: 1 }}
              >
                Send
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Contact;
