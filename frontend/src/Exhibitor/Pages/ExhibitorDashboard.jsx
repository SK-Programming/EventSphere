import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
  List,
  ListItem,
  ListItemText,
  Divider,
  Stack,
} from "@mui/material";
import {
  Event,
  Message,
  History,
  People,
} from "@mui/icons-material";

function ExhibitorDashboard() {
  const stats = {
    previousEvents: 8,
    messages: 12,
    visitors: 340,
    upcomingEvents: [
      {
        id: 1,
        title: "Tech Expo 2025",
        date: "2025-09-20",
        location: "Dubai Expo Center",
      },
      {
        id: 2,
        title: "AI Innovation Summit",
        date: "2025-11-05",
        location: "Berlin Convention Hall",
      },
    ],
  };

  const statCards = [
    {
      label: "Previous Events",
      value: stats.previousEvents,
      icon: <History fontSize="large" />,
      gradient: "linear-gradient(135deg, #f7971e 0%, #ffd200 100%)",
    },
    {
      label: "Messages",
      value: stats.messages,
      icon: <Message fontSize="large" />,
      gradient: "linear-gradient(135deg, #f7971e 0%, #ffd200 100%)",
    },
    {
      label: "Total Visitors",
      value: stats.visitors,
      icon: <People fontSize="large" />,
      gradient: "linear-gradient(135deg, #f7971e 0%, #ffd200 100%)",
    },
  ];

  return (
    <Box sx={{ p: 3 }}>
      {/* Header */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={4}
      >
        <Box>
          <Typography variant="h4" fontWeight="bold">
            Welcome Back, John!
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Here’s a quick look at your exhibition stats
          </Typography>
        </Box>
       
      </Stack>

      {/* Stats grid */}
      <Grid container spacing={3}>
        {statCards.map((card, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Card
              sx={{
                background: card.gradient,
                color: "#fff",
                borderRadius: "16px",
                boxShadow: 3,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-6px) scale(1.02)",
                  boxShadow: 6,
                },
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor: "rgba(255,255,255,0.2)",
                      width: 56,
                      height: 56,
                    }}
                  >
                    {card.icon}
                  </Avatar>
                  <Box>
                    <Typography variant="h6">{card.label}</Typography>
                    <Typography variant="h4" fontWeight="bold">
                      {card.value}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Upcoming events */}
      <Box mt={6}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Upcoming Events
        </Typography>
        {stats.upcomingEvents.length > 0 ? (
          <List>
            {stats.upcomingEvents.map((event, index) => (
              <React.Fragment key={event.id}>
                <Card
                  sx={{
                    mb: 2,
                    borderRadius: "12px",
                    boxShadow: 2,
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                    "&:hover": {
                      transform: "translateX(8px)",
                      boxShadow: 5,
                    },
                  }}
                >
                  <CardContent>
                    <ListItem alignItems="flex-start">
                      <Avatar
                        sx={{
                          bgcolor: "primary.main",
                          mr: 2,
                          width: 48,
                          height: 48,
                        }}
                      >
                        <Event />
                      </Avatar>
                      <ListItemText
                        primary={
                          <Typography variant="h6" fontWeight="bold">
                            {event.title}
                          </Typography>
                        }
                        secondary={
                          <>
                            <Typography
                              variant="body2"
                              color="text.secondary"
                            >
                              📅 {event.date}
                            </Typography>
                            <Typography
                              variant="body2"
                              color="text.secondary"
                            >
                              📍 {event.location}
                            </Typography>
                          </>
                        }
                      />
                    </ListItem>
                  </CardContent>
                </Card>
                {index < stats.upcomingEvents.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </List>
        ) : (
          <Typography color="text.secondary">
            No upcoming events created yet.
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default ExhibitorDashboard;
