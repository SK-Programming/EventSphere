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
} from "@mui/material";
import {
  Visibility,
  VisibilityOff,
  Email,
  Lock,
  Person,
} from "@mui/icons-material";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { Link } from "react-router";

function LoginRegister() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const handleToggle = () => setIsLogin(!isLogin);

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
      }}
    >
      <Paper
        elevation={6}
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
          {isLogin ? "Login" : "SignUp"}
        </Typography>

        {/* Username field for signup */}
        {!isLogin && (
          <TextField
            fullWidth
            placeholder="Username"
            margin="normal"
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
          type={showPassword ? "text" : "password"}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock sx={{ color: "#fff" }} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
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
            type="password"
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
          sx={{
            mt: 2,
            borderRadius: 3,
            bgcolor: "#000",
            color: "#fff",
            "&:hover": { bgcolor: "#333" },
          }}
        >
          {isLogin ? "Login" : "SignUp"}
        </Button>

    
        <Divider
          sx={{
            my: 3,
              fontFamily: "Arial, sans-serif",
            "&::before, &::after": { borderColor: "#fff", borderWidth: "2px" },
            "& .MuiDivider-wrapper": { color: "#fff", fontWeight: "bold" },

          }}
          
        >
          OR
        </Divider>

        
        <Button
          fullWidth
          variant="outlined"
          startIcon={<FaGoogle />}
          sx={{
            borderRadius: 3,
            bgcolor: "#fff",
            color: "#000",
            "&:hover": { bgcolor: "#eee" },
          }}
        >
          {isLogin ? "Login with Google" : "SignUp with Google"}
        </Button>

        <Button
          fullWidth
          variant="contained"
          startIcon={<FaFacebook />}
          sx={{
            mt: 2,
            borderRadius: 3,
            bgcolor: "#1877f2",
            color: "#fff",
            "&:hover": { bgcolor: "#145dbf" },
          }}
        >
          {isLogin ? "Login with Facebook" : "SignUp with Facebook"}
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
          {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
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
          to="/upcoming-events"
        >
          Register as Exhibitor
        </Button>
      </Paper>
    </Box>
  );
}

export default LoginRegister;
