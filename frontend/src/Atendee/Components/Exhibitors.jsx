import { Box, Button, Typography } from '@mui/material'

import React, { useState } from 'react'
const exhibitors = [
  {
    name: "Google",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "Spotify",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg",
  },

  
  {
    name: "Amazon",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    name: "Microsoft",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },

  {
    name: "Netflix",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  },
];

function Exhibitors() {
      const [active, setActive] = useState("All");

  const categories = ["All", "Tech", "Business", "Creative"];
  return (
    <div>
        <Box sx={{p:4}}>
       <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}} >
       <Typography variant="h4" fontWeight="bold" gutterBottom>
        Featured Exhibitors
      </Typography>
   <Box sx={{ display: "flex", gap: 1 }}>
      {categories.map((cat) => (
        <Button
          key={cat}
          variant={active === cat ? "contained" : "text"}
          onClick={() => setActive(cat)}
          sx={{
            color: active === cat ? "#3f3f3fff" : "gray",
            bgcolor: active === cat ? "#FFC107" : "transparent",
            "&:hover": {
              bgcolor: active === cat ? "#e6ac00" : "transparent",
            },
          }}
        >
          {cat}
        </Button>
      ))}
    </Box>
    
 </Box>
   <Box
      sx={{
        width: "100%",
        maxWidth: "1536px",
        marginInline: "auto",
        position: "relative",
        height: "150px",
        mt: "5rem",
        top: -60,
        pt:"1rem",
        overflow: "hidden",
    
        maskImage:
          "linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0))",
        WebkitMaskImage:
          "linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0))",
      }}
    >
      {exhibitors.map((exhibitor, i) => (
        <Box
          key={i}
          sx={{
            width: "200px",
            height: "100px",
            backgroundColor: "#fff",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
            borderRadius: "6px",
            position: "absolute",
            left: `max(calc(200px * ${exhibitors.length}), 100%)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: 2,
            animationName: "scrollLeft",
            animationDuration: "30s",
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
            animationDelay: `calc(30s / ${exhibitors.length} * (${
              exhibitors.length
            } - ${i + 1}) * -1)`,
          }}
        >
          <img
            src={exhibitor.img}
            alt={exhibitor.name}
            style={{
              maxWidth: "100%",
              maxHeight: "80%",
              objectFit: "contain",
            }}
          />
        </Box>
      ))}

     
      <style>
        {`
          @keyframes scrollLeft {
            to {
              left: -200px;
            }
          }
        `}
      </style>
    </Box>
  </Box>
    </div>
  )
}

export default Exhibitors
