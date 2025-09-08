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
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import { Visibility } from "@mui/icons-material";

function Users() {
  const [open, setOpen] = useState(false);
  const [roleModal, setRoleModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [search, setSearch] = useState("");
  const [newRole, setNewRole] = useState("");

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "johndoe@example.com",
      phone: "+123 456 7890",
      companyName: "TechCorp Ltd.",
      profileImage: "https://picsum.photos/200",
      companyLogo: "https://picsum.photos/100",
      role: "Exhibitor",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "janesmith@example.com",
      phone: "+111 222 3333",
    
      profileImage: "https://picsum.photos/201",
   
      role: "Attendee",
    },
    {
      id: 3,
      name: "Admin User",
      email: "admin@example.com",
      phone: "+999 888 777",
      companyName: "EventSphere",
      profileImage: "https://picsum.photos/202",
      companyLogo: "https://picsum.photos/102",
      role: "Admin",
    },
  ]);

  const handleView = (user) => {
    setSelectedUser(user);
    setOpen(true);
  };

  const handleDelete = (id) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
    setOpen(false);
  };

  const handleRoleChange = () => {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === selectedUser.id ? { ...u, role: newRole } : u
      )
    );
    setRoleModal(false);
  };

  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.companyName.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Users
      </Typography>

      {/* Search Box */}
      <TextField
        fullWidth
        label="Search by Name, Email or Company"
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
            <TableCell>Role</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredUsers.map((user) => (
            <TableRow key={user.id}>
              <TableCell>
                <Avatar src={user.profileImage} />
              </TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>
                <Box display="flex" alignItems="center" gap={1}>
                  <Avatar src={user.companyLogo} sx={{ width: 30, height: 30 }} />
                  {user.companyName}
                </Box>
              </TableCell>
              <TableCell>
                <Typography fontWeight="bold">{user.role}</Typography>
              </TableCell>
              <TableCell align="center">
                <IconButton  onClick={() => handleView(user)}>
                  <Visibility />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* User Details Modal */}
      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>User Details</DialogTitle>
        <DialogContent dividers>
          {selectedUser && (
            <Box>
              <Box display="flex" alignItems="center" gap={2} mb={2}>
                <Avatar
                  src={selectedUser.profileImage}
                  sx={{ width: 64, height: 64 }}
                />
                <Box>
                  <Typography variant="h6">{selectedUser.name}</Typography>
                  <Typography>{selectedUser.email}</Typography>
                  <Typography>{selectedUser.phone}</Typography>
                  <Box display="flex" alignItems="center" gap={1} mt={1}>
                    <Avatar
                      src={selectedUser.companyLogo}
                      sx={{ width: 40, height: 40 }}
                    />
                    <Typography fontWeight="bold">
                      {selectedUser.companyName}
                    </Typography>
                  </Box>
                  <Typography sx={{ mt: 1 }}>
                    <strong>Role:</strong> {selectedUser.role}
                  </Typography>
                </Box>
              </Box>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          {selectedUser && (
            <>
              <Button
                color="secondary"
                variant="contained"
                onClick={() => {
                  setNewRole(selectedUser.role);
                  setRoleModal(true);
                }}
              >
                Change Role
              </Button>
              <Button
                color="error"
                onClick={() => handleDelete(selectedUser.id)}
              >
                Delete Account
              </Button>
            </>
          )}
          <Button onClick={() => setOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>

      {/* Change Role Modal */}
      <Dialog
        open={roleModal}
        onClose={() => setRoleModal(false)}
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle>Change Role</DialogTitle>
        <DialogContent>
          <FormControl fullWidth>
            <InputLabel>Role</InputLabel>
            <Select
              value={newRole}
              onChange={(e) => setNewRole(e.target.value)}
              fullWidth
            >
              <MenuItem value="Admin">Admin</MenuItem>
              <MenuItem value="Exhibitor">Exhibitor</MenuItem>
              <MenuItem value="Attendee">Attendee</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setRoleModal(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleRoleChange}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Users;
