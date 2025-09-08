import React, { useState } from "react";
import {
  Box,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import { Visibility } from "@mui/icons-material";

function EventRequest() {
  const [open, setOpen] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [search, setSearch] = useState("");
  const [requests, setRequests] = useState([
    {
      id: 1,
      company: "TechCorp Ltd.",
      booth: "A12",
      products: "AI Software, Cloud Solutions",
      details: "Focusing on AI-powered business automation.",
      status: "Pending",
    },
    {
      id: 2,
      company: "Green Energy Inc.",
      booth: "B07",
      products: "Solar Panels, Wind Turbines",
      details: "Renewable energy innovations.",
      status: "Approved",
    },
    {
      id: 3,
      company: "HealthPlus",
      booth: "C03",
      products: "Medical Devices",
      details: "Healthcare equipment and digital solutions.",
      status: "Rejected",
    },
  ]);

  const handleView = (req) => {
    setSelectedRequest(req);
    setOpen(true);
  };

  const handleStatusChange = (id, newStatus) => {
    setRequests((prev) =>
      prev.map((req) =>
        req.id === id ? { ...req, status: newStatus } : req
      )
    );
    setOpen(false);
  };

  const getStatusColor = (status) => {
    if (status === "Pending") return "orange";
    if (status === "Approved") return "green";
    if (status === "Rejected") return "red";
    return "inherit";
  };

  const filteredRequests = requests.filter(
    (req) =>
      req.company.toLowerCase().includes(search.toLowerCase()) ||
      req.booth.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Event Requests
      </Typography>

      {/* Search Box */}
      <TextField
        fullWidth
        label="Search by Company or Booth"
        variant="outlined"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ mb: 2 }}
      />

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Company</TableCell>
            <TableCell>Booth</TableCell>
            <TableCell>Products</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredRequests.map((req) => (
            <TableRow key={req.id}>
              <TableCell>{req.company}</TableCell>
              <TableCell>{req.booth}</TableCell>
              <TableCell>{req.products}</TableCell>
              <TableCell sx={{ color: getStatusColor(req.status), fontWeight: "bold" }}>
                {req.status}
              </TableCell>
              <TableCell align="center">
                <IconButton  onClick={() => handleView(req)}>
                  <Visibility />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* View Request Modal */}
      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Request Details</DialogTitle>
        <DialogContent dividers>
          {selectedRequest && (
            <Box>
              <Typography><strong>Company:</strong> {selectedRequest.company}</Typography>
              <Typography><strong>Booth:</strong> {selectedRequest.booth}</Typography>
              <Typography><strong>Products:</strong> {selectedRequest.products}</Typography>
              <Typography sx={{ mt: 1 }}>
                <strong>Details:</strong> {selectedRequest.details}
              </Typography>
              <Typography sx={{ mt: 1, color: getStatusColor(selectedRequest.status) }}>
                <strong>Status:</strong> {selectedRequest.status}
              </Typography>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Close</Button>
          <Button
            color="success"
            variant="contained"
            onClick={() => handleStatusChange(selectedRequest.id, "Approved")}
          >
            Accept
          </Button>
          <Button
            color="error"
            variant="contained"
            onClick={() => handleStatusChange(selectedRequest.id, "Rejected")}
          >
            Decline
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default EventRequest;
