import React, { useState } from "react";
import {
  Box,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Avatar,
  IconButton,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Card,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";
import { Visibility } from "@mui/icons-material";

function Exhibitors() {
  const [open, setOpen] = useState(false);
  const [selectedExhibitor, setSelectedExhibitor] = useState(null);
  const [search, setSearch] = useState("");

  const [requestModal, setRequestModal] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);

  const [exhibitors, setExhibitors] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "johndoe@example.com",
      phone: "+123 456 7890",
      companyName: "TechCorp Ltd.",
      profileImage: "https://picsum.photos/200",
      companyLogo: "https://picsum.photos/100",
      previousExhibitions: [
        {
          id: 1,
          title: "Tech Expo 2023",
          date: "12 Jan 2023",
          location: "New York",
          description: "Showcased latest AI technologies.",
          image: "https://picsum.photos/300/200",
        },
      ],
      requests: [
        {
          id: 1,
          title: "AI World Expo",
          booth: "A12",
          products: "AI Software, Cloud Solutions",
          details: "Requesting booth for AI showcase.",
          status: "Pending",
        },
        {
          id: 2,
          title: "Cloud Future 2024",
          booth: "B07",
          products: "Cloud Hosting, Serverless Tools",
          details: "Expanding cloud solutions.",
          status: "Approved",
        },
      ],
    },
  ]);

  const handleView = (exhibitor) => {
    setSelectedExhibitor(exhibitor);
    setOpen(true);
  };

  const handleDelete = (id) => {
    setExhibitors((prev) => prev.filter((ex) => ex.id !== id));
    setOpen(false);
  };

  const getStatusColor = (status) => {
    if (status === "Pending") return "orange";
    if (status === "Approved") return "green";
    if (status === "Rejected") return "red";
    return "inherit";
  };

  const handleViewRequest = (req) => {
    setSelectedRequest(req);
    setRequestModal(true);
  };

  const filteredExhibitors = exhibitors.filter(
    (ex) =>
      ex.name.toLowerCase().includes(search.toLowerCase()) ||
      ex.companyName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Exhibitors
      </Typography>

      {/* Search Box */}
      <TextField
        fullWidth
        label="Search by Name or Company"
        variant="outlined"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ mb: 2 }}
      />

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Profile</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Company</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredExhibitors.map((ex) => (
            <TableRow key={ex.id}>
              <TableCell>
                <Avatar src={ex.profileImage} />
              </TableCell>
              <TableCell>{ex.name}</TableCell>
              <TableCell>{ex.email}</TableCell>
              <TableCell>{ex.phone}</TableCell>
              <TableCell>
                <Box display="flex" alignItems="center" gap={1}>
                  <Avatar src={ex.companyLogo} sx={{ width: 30, height: 30 }} />
                  {ex.companyName}
                </Box>
              </TableCell>
              <TableCell align="center">
                <IconButton  onClick={() => handleView(ex)}>
                  <Visibility />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Exhibitor Details Modal */}
      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle>Exhibitor Details</DialogTitle>
        <DialogContent dividers>
          {selectedExhibitor && (
            <Box>
              {/* Profile */}
              <Box display="flex" alignItems="center" gap={2} mb={2}>
                <Avatar
                  src={selectedExhibitor.profileImage}
                  sx={{ width: 64, height: 64 }}
                />
                <Box>
                  <Typography variant="h6">{selectedExhibitor.name}</Typography>
                  <Typography>{selectedExhibitor.email}</Typography>
                  <Typography>{selectedExhibitor.phone}</Typography>
                  <Box display="flex" alignItems="center" gap={1} mt={1}>
                    <Avatar
                      src={selectedExhibitor.companyLogo}
                      sx={{ width: 40, height: 40 }}
                    />
                    <Typography fontWeight="bold">
                      {selectedExhibitor.companyName}
                    </Typography>
                  </Box>
                </Box>
              </Box>

              {/* Previous Exhibitions */}
              <Typography variant="h6" gutterBottom>
                Previous Exhibitions
              </Typography>
              <Grid container spacing={2}>
                {selectedExhibitor.previousExhibitions.map((event) => (
                  <Grid item xs={12} sm={6} md={4} key={event.id}>
                    <Card
                      sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
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
                        <Typography
                          variant="body2"
                          mt={1}
                          sx={{ minHeight: "60px" }}
                        >
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

              {/* Requests */}
              <Typography variant="h6" mt={3} gutterBottom>
                Requests
              </Typography>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Event</TableCell>
                    <TableCell>Booth</TableCell>
                    <TableCell>Products</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell align="center">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {selectedExhibitor.requests.map((req) => (
                    <TableRow key={req.id}>
                      <TableCell>{req.title}</TableCell>
                      <TableCell>{req.booth}</TableCell>
                      <TableCell>{req.products}</TableCell>
                      <TableCell sx={{ color: getStatusColor(req.status), fontWeight: "bold" }}>
                        {req.status}
                      </TableCell>
                      <TableCell align="center">
                        <IconButton color="primary" onClick={() => handleViewRequest(req)}>
                          <Visibility />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          {selectedExhibitor && (
            <Button color="error" onClick={() => handleDelete(selectedExhibitor.id)}>
              Delete Account
            </Button>
          )}
          <Button onClick={() => setOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>

      {/* Request Details Modal */}
      <Dialog
        open={requestModal}
        onClose={() => setRequestModal(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Request Details</DialogTitle>
        <DialogContent dividers>
          {selectedRequest && (
            <Box>
              <Typography><strong>Event:</strong> {selectedRequest.title}</Typography>
              <Typography><strong>Booth:</strong> {selectedRequest.booth}</Typography>
              <Typography><strong>Products:</strong> {selectedRequest.products}</Typography>
              <Typography><strong>Details:</strong> {selectedRequest.details}</Typography>
              <Typography sx={{ mt: 1 }}>
                <strong>Status:</strong>{" "}
                <span style={{ color: getStatusColor(selectedRequest.status) }}>
                  {selectedRequest.status}
                </span>
              </Typography>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setRequestModal(false)}>Close</Button>
          <Button color="success" variant="contained">
            Approve
          </Button>
          <Button color="error" variant="contained">
            Reject
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Exhibitors;
