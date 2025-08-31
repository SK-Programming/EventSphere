import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import { Link} from "react-router";
const events = [
  {
    date: "Dec 02",
    title: "Web Design Conference",
    location: "New York",
    img: "https://picsum.photos/400/200?random=1",
  },
  {
    date: "Dec 10",
    title: "Marketing Summit",
    location: "San Francisco",
    img: "https://picsum.photos/400/200?random=2",
  },
  {
    date: "Dec 15",
    title: "AI Expo",
    location: "Chicago",
    img: "https://picsum.photos/400/200?random=3",
  },
  {
    date: "Jan 05",
    title: "Startup Fair",
    location: "Los Angeles",
    img: "https://picsum.photos/400/200?random=4",
  },
];

function UpcomingEvents() {
  return (
    <Box sx={{ p: 4}}>
 <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}} >
       <Typography variant="h4" fontWeight="bold" gutterBottom>
        Upcoming Events
      </Typography>

      <Button
          variant="contained"
          sx={{ bgcolor: "secondary.main", mb: 3 }}
          component={Link}
          to="/upcoming-events" 
        >
          View All
        </Button>
 </Box>
  

   
  
      <Grid container  spacing={2} sx={{placeitems:"center",alignItems:"center",justifyContent:"space-between"}}>
        {events.map((event, index) => (
          <Grid item  key={index}>
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                width: "100%",
                height: "100%",
              
              }}
            >
            
              <CardMedia
                component="img"
                height="140"
                image={event.img}
                alt={event.title}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {event.date}
                </Typography>
                <Typography variant="h6" fontWeight="bold" sx={{ mt: 1 }}>
                  {event.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {event.location}
                </Typography>

                <Divider sx={{ my: 2 }} />

                <Button
                  variant="text"
                  sx={{
                    color:"text.primary",
                    fontWeight: "bold",
                  }}
                 
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default UpcomingEvents;
