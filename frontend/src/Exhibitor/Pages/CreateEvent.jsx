import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Chip,
  Stack,
} from "@mui/material";

function CreateEvent() {
  const amber = "#FFC107";
  const [selectedBooth, setSelectedBooth] = useState(null);
  const [bookedBooths] = useState([5, 12, 28, 40]);
  const [formData, setFormData] = useState({
    companyName: "",
    logo: null,
    products: "",
    productDetails: "",
  });

  const handleBoothClick = (id) => {
    if (bookedBooths.includes(id)) return;
    setSelectedBooth(id);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      setFormData({ ...formData, logo: file });
    }
  };

  const handleSubmit = () => {
    if (!selectedBooth) {
      alert("Please select a booth first!");
      return;
    }
    console.log("Event Request:", { boothId: selectedBooth, ...formData });
    alert("Request sent to admin!");
  };

  return (
    <Box sx={{ p: { xs: 2, md: 6 }, width: "100%",position:"relative",top:-40 }}>
      <Typography variant="h3" fontWeight="bold" gutterBottom >
        Create Event & Select Booth
      </Typography>

      {/* Floor Plan Section */}
      <Typography variant="h6" sx={{ mt: 3, mb: 2 }} color={amber}>
        Floor Plan
      </Typography>

      {/* Legend */}
      <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
        <Chip label="Available" sx={{ bgcolor: "#ccc", color: "white" }} />
        <Chip label="Selected" sx={{ bgcolor: amber, color: "black" }} />
        <Chip label="Booked" sx={{ bgcolor: "red", color: "white" }} />
      </Stack>

      {/* Floor Plan SVG */}
      <svg
        width="100%"
        height="500"
        viewBox="0 0 800 400"
        style={{
          border: `2px dashed ${amber}`,
          borderRadius: "8px",
          background: "#fff9e6",
        }}
      >
        {Array.from({ length: 50 }, (_, i) => {
          const id = i + 1;
          const col = i % 10;
          const row = Math.floor(i / 10);
          const x = col * 75 + 50;
          const y = row * 75 + 50;

          let fill = "#ccc";
          if (bookedBooths.includes(id)) fill = "red";
          else if (selectedBooth === id) fill = amber;

          return (
            <g
              key={id}
              onClick={() => handleBoothClick(id)}
              style={{
                cursor: bookedBooths.includes(id) ? "not-allowed" : "pointer",
                transition: "transform 0.2s",
              }}
            >
              <circle cx={x} cy={y} r={30} fill={fill} stroke="black" />
              <text
                x={x}
                y={y + 5}
                fontSize="14"
                textAnchor="middle"
                fill={fill === amber ? "black" : "white"}
                fontWeight="bold"
              >
                {id}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Form Section */}
      <Box sx={{ mt: 6, width: "100%" }}>
        <Typography variant="h5" gutterBottom sx={{ color: amber, mb: 3 }}>
          Company Details
        </Typography>

        <Stack spacing={3} sx={{ width: "100%" }}>
          {/* Image Uploader */}
          <Box
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            sx={{
              border: `2px dashed ${amber}`,
              borderRadius: "8px",
              p: 3,
              textAlign: "center",
              cursor: "pointer",
              "&:hover": { bgcolor: "#fff9c4" },
              width: "100%",
              height: "200px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={() => document.getElementById("logoInput").click()}
          >
            {formData.logo ? (
              <Box>
                <img
                  src={URL.createObjectURL(formData.logo)}
                  alt="Preview"
                  style={{
                    maxWidth: "120px",
                    maxHeight: "120px",
                    borderRadius: "8px",
                    marginBottom: "8px",
                  }}
                />
                <Typography variant="body2">{formData.logo.name}</Typography>
              </Box>
            ) : (
              <Typography color="textSecondary">
                Drag & Drop Logo Here or Click to Upload
              </Typography>
            )}
            <input
              type="file"
              id="logoInput"
              name="logo"
              hidden
              accept="image/*"
              onChange={handleChange}
            />
          </Box>

          {/* Fields */}
          <TextField
            fullWidth
            label="Company Name"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Products Names"
            name="products"
            value={formData.products}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            multiline
            rows={4}
            label="Product Details"
            name="productDetails"
            value={formData.productDetails}
            onChange={handleChange}
          />

          {/* Submit */}
          <Button
            variant="contained"
            size="large"
            fullWidth
            onClick={handleSubmit}
            sx={{
              borderRadius: "8px",
              bgcolor: amber,
              color: "black",
              fontWeight: "bold",
              "&:hover": { bgcolor: "#ffb300" },
            }}
          >
            🚀 Send Request to Admin
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

export default CreateEvent;
