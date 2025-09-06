import { Box, Typography, Avatar, Grid, Card, CardContent, CardMedia, Divider, Button } from "@mui/material";
import { Link, useParams } from "react-router-dom";

const exhibitors = [
  {
    id: 1,
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "987-654-3210",
    company: "Creative Agency",
    profileImg: "https://randomuser.me/api/portraits/women/44.jpg",
    coverImg: "https://picsum.photos/1200/300?grayscale",
    exhibitions: {
      current: [
        {
          id: "expo2024",
          title: "Marketing Summit 2024",
          date: "Feb 2024",
          location: "New York, USA",
          img: "https://picsum.photos/400/200?random=10",
        },
      ],
      previous: [
        {
          id: "expo2022",
          title: "Design Expo 2022",
          date: "Aug 2022",
          location: "Berlin, Germany",
          img: "https://picsum.photos/400/200?random=11",
        },
      ],
    },
  },
];

function ExhibitorDetail() {
  const { id } = useParams();
  const exhibitor = exhibitors.find((e) => e.id === parseInt(id));

  if (!exhibitor) return <Typography>No Exhibitor Found</Typography>;

  return (
    <Box>
      {/* Cover Section */}
      <Box
        sx={{
          position: "relative",
          height: 250,
          backgroundImage: `url(${exhibitor.coverImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Avatar
          src={exhibitor.profileImg}
          sx={{
            width: 120,
            height: 120,
            border: "4px solid white",
            position: "absolute",
            bottom: -60,
            left: 40,
          }}
        />
      </Box>

      {/* Profile Info */}
      <Box sx={{ mt: 8, px: 4 }}>
        <Typography variant="h4" fontWeight="bold">{exhibitor.name}</Typography>
        <Typography variant="body1" color="text.secondary">{exhibitor.email}</Typography>
        <Typography variant="body1" color="text.secondary">{exhibitor.phone}</Typography>
        <Typography variant="h6" sx={{ mt: 1 }}>{exhibitor.company}</Typography>
      </Box>

      {/* Exhibitions */}
      <Box sx={{ mt: 5, px: 4 }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Current Exhibitions
        </Typography>
        <Grid container spacing={3}>
          {exhibitor.exhibitions.current.map((event) => (
            <Grid item xs={12} sm={6} md={4} key={event.id}>
              <Card sx={{ borderRadius: 3, boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}>
                <CardMedia component="img" height="160" image={event.img} alt={event.title} />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">{event.date}</Typography>
                  <Typography variant="h6" fontWeight="bold" sx={{ mt: 1 }}>
                    {event.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">{event.location}</Typography>
                  <Divider sx={{ my: 2 }} />
                  <Button
                    variant="text"
                    sx={{ fontWeight: "bold", color: "text.primary" }}
                    component={Link}
                    to={`/events/${event.id}`}
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 5 }}>
          Previous Exhibitions
        </Typography>
        <Grid container spacing={3}>
          {exhibitor.exhibitions.previous.map((event) => (
            <Grid item xs={12} sm={6} md={4} key={event.id}>
              <Card sx={{ borderRadius: 3, boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}>
                <CardMedia component="img" height="160" image={event.img} alt={event.title} />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">{event.date}</Typography>
                  <Typography variant="h6" fontWeight="bold" sx={{ mt: 1 }}>
                    {event.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">{event.location}</Typography>
                  <Divider sx={{ my: 2 }} />
                  <Button
                    variant="text"
                    sx={{ fontWeight: "bold", color: "text.primary" }}
                    component={Link}
                    to={`/events/${event.id}`}
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default ExhibitorDetail;
