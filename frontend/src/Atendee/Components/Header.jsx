import { Box, Typography } from '@mui/material'
import React from 'react'


function Header() {
  return (
    <div>
<Box sx={{width:1, height:"70vh",display: "flex" , alignItems: "center" ,justifyContent:"center" ,position:"relative"}}>

      <Box sx={{ display: "flex" , alignItems: "center" , position:"relative" ,top: -60 }}>
        
            <Typography variant="h1" sx={{ fontWeight: "bold", color: "text.primary" ,textAlign:"center"}}>
              Event
            </Typography>
            <Typography variant="h1" sx={{ fontWeight: "bold", color: "text.logoLite" ,textAlign:"center"}}>
              Sphere
            </Typography>
          </Box>


</Box>

    </div>
  )
}

export default Header
