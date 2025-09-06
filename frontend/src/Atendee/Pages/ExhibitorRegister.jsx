import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
  Paper,
  Alert,
  CircularProgress,
  Divider,
} from "@mui/material";
import { Visibility, VisibilityOff, Email, Lock, Person, Phone } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ExhibitorRegister() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });

    if (formData.password !== formData.confirmPassword) {
      setMessage({ type: "error", text: "Passwords do not match" });
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/exhibitor/register", formData, {
        headers: { "Content-Type": "application/json" },
      });

      const data = res.data;

      localStorage.setItem("token", data.token);
      localStorage.setItem("exhibitor", JSON.stringify(data.exhibitor));

      setMessage({ type: "success", text: "Exhibitor registered successfully!" });

      setTimeout(() => {
        navigate("/exhibitor-dashboard");
      }, 1500);
    } catch (err) {
      setMessage({
        type: "error",
        text: err.response?.data?.message || "Registration failed, please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1600&q=80')",
        backgroundSize: "cover",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
      }}
    >
      <Paper
        elevation={6}
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: 380,
          p: 4,
          borderRadius: 4,
          background: "rgba(0, 0, 0, 0.25)",
          backdropFilter: "blur(5px)",
          border: "1px solid rgba(255,255,255,0.3)",
          textAlign: "center",
        }}
      >
        <Typography variant="h5" fontWeight="bold" sx={{ mb: 3, color: "#fff" }}>
          Exhibitor Registration
        </Typography>

        {message.text && (
          <Alert severity={message.type} sx={{ mb: 2 }}>
            {message.text}
          </Alert>
        )}

        <TextField
          fullWidth
          placeholder="Name"
          margin="normal"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Person sx={{ color: "#fff" }} />
              </InputAdornment>
            ),
          }}
          sx={{
            input: { color: "#fff" },
            "& .MuiOutlinedInput-root": {
              borderRadius: 3,
              "& fieldset": { borderColor: "#fff" },
              "&:hover fieldset": { borderColor: "#fff" },
              "&.Mui-focused fieldset": { borderColor: "#fff" },
            },
          }}
        />

        <TextField
          fullWidth
          placeholder="Email"
          margin="normal"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Email sx={{ color: "#fff" }} />
              </InputAdornment>
            ),
          }}
          sx={{
            input: { color: "#fff" },
            "& .MuiOutlinedInput-root": {
              borderRadius: 3,
              "& fieldset": { borderColor: "#fff" },
              "&:hover fieldset": { borderColor: "#fff" },
              "&.Mui-focused fieldset": { borderColor: "#fff" },
            },
          }}
        />

        <TextField
          fullWidth
          placeholder="Phone"
          margin="normal"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Phone sx={{ color: "#fff" }} />
              </InputAdornment>
            ),
          }}
          sx={{
            input: { color: "#fff" },
            "& .MuiOutlinedInput-root": {
              borderRadius: 3,
              "& fieldset": { borderColor: "#fff" },
              "&:hover fieldset": { borderColor: "#fff" },
              "&.Mui-focused fieldset": { borderColor: "#fff" },
            },
          }}
        />

        <TextField
          fullWidth
          placeholder="Password"
          margin="normal"
          name="password"
          value={formData.password}
          onChange={handleChange}
          type={showPassword ? "text" : "password"}
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock sx={{ color: "#fff" }} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  {showPassword ? <VisibilityOff sx={{ color: "#fff" }} /> : <Visibility sx={{ color: "#fff" }} />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{
            input: { color: "#fff" },
            "& .MuiOutlinedInput-root": {
              borderRadius: 3,
              "& fieldset": { borderColor: "#fff" },
              "&:hover fieldset": { borderColor: "#fff" },
              "&.Mui-focused fieldset": { borderColor: "#fff" },
            },
          }}
        />

        <TextField
          fullWidth
          placeholder="Confirm Password"
          margin="normal"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          type="password"
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock sx={{ color: "#fff" }} />
              </InputAdornment>
            ),
          }}
          sx={{
            input: { color: "#fff" },
            "& .MuiOutlinedInput-root": {
              borderRadius: 3,
              "& fieldset": { borderColor: "#fff" },
              "&:hover fieldset": { borderColor: "#fff" },
              "&.Mui-focused fieldset": { borderColor: "#fff" },
            },
          }}
        />
        
        <Divider
          sx={{
            my: 2,
            fontFamily: "Arial, sans-serif",
            "&::before, &::after": { borderColor: "#fff", borderWidth: "2px" },
            "& .MuiDivider-wrapper": { color: "#fff", fontWeight: "bold" },
          }}
        >
          OR
        </Divider>

        <Typography
          sx={{
            mt: 2,
            cursor: "pointer",
            color: "#fff",
            textDecoration: "underline",
          }}

        >
          Back To Login
        </Typography>


        <Button
          fullWidth
          variant="contained"
          type="submit"
          disabled={loading}
          sx={{
            mt: 2,
            borderRadius: 3,
            bgcolor: "#000",
            color: "#fff",
            "&:hover": { bgcolor: "#333" },
          }}
        >
          {loading ? <CircularProgress size={24} /> : "Register as Exhibitor"}
        </Button>
      </Paper>
    </Box>
  );
}

export default ExhibitorRegister;
