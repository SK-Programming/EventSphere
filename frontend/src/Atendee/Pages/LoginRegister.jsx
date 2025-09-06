import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
  Paper,
  Divider,
  Alert,
  CircularProgress,
} from "@mui/material";
import {
  Visibility,
  VisibilityOff,
  Email,
  Lock,
  Person,
} from "@mui/icons-material";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function LoginRegister() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Toggle between Login & Signup
  const handleToggle = () => {
    setIsLogin(!isLogin);
    setMessage({ type: "", text: "" });
    setFormData({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  // Input field changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });

    // validation for signup
    if (!isLogin && formData.password !== formData.confirmPassword) {
      setMessage({ type: "error", text: "Passwords do not match" });
      setLoading(false);
      return;
    }

    try {
      const endpoint = isLogin
        ? "http://localhost:5000/api/auth/login"
        : "http://localhost:5000/api/auth/register";

      const payload = isLogin
        ? { email: formData.email, password: formData.password }
        : {
            username: formData.username,
            email: formData.email,
            password: formData.password,
          };

      // axios request
      const res = await axios.post(endpoint, payload, {
        headers: { "Content-Type": "application/json" },
      });

      const data = res.data;

      // save token + user to localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      setMessage({
        type: "success",
        text: isLogin ? "Login successful!" : "Signup successful!",
      });

      setTimeout(() => {
        navigate("/dashboard"); // adjust route as needed
      }, 1500);
    } catch (err) {
      setMessage({
        type: "error",
        text: err.response?.data?.message || "Network error, please try again.",
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
          width: 350,
          p: 4,
          borderRadius: 4,
          background: "rgba(0, 0, 0, 0.25)",
          backdropFilter: "blur(5px)",
          border: "1px solid rgba(255,255,255,0.3)",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{ mb: 3, color: "#fff" }}
        >
          {isLogin ? "Login" : "Sign Up"}
        </Typography>

        {message.text && (
          <Alert severity={message.type} sx={{ mb: 2 }}>
            {message.text}
          </Alert>
        )}

        {!isLogin && (
          <TextField
            fullWidth
            placeholder="Username"
            margin="normal"
            name="username"
            value={formData.username}
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
        )}

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
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? (
                    <VisibilityOff sx={{ color: "#fff" }} />
                  ) : (
                    <Visibility sx={{ color: "#fff" }} />
                  )}
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

        {!isLogin && (
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
        )}

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
          {loading ? (
            <CircularProgress size={24} />
          ) : isLogin ? (
            "Login"
          ) : (
            "Sign Up"
          )}
        </Button>

    
        <Typography
          sx={{
            mt: 2,
            cursor: "pointer",
            color: "#fff",
            textDecoration: "underline",
          }}
          onClick={handleToggle}
        >
          {isLogin
            ? "Don't have an account? Sign Up"
            : "Already have an account? Login"}
        </Typography>

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

        <Button
          fullWidth
          variant="contained"
          color="primary"
          component={Link}
          to="/exhibitors-register"
        >
          Register as Exhibitor
        </Button>
      </Paper>
    </Box>
  );
}

export default LoginRegister;
