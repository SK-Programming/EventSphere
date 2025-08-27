import { Box, Typography } from '@mui/material'
import React from 'react'


function Header() {
  return (
    <div>
<Box sx={{width:1,bgcolor:"secondary.main" , height:"70vh",display: "flex" , alignItems: "center" ,justifyContent:"center"}}>
      <Box sx={{ display: "flex" , alignItems: "center" , }}>
            <Box sx={{ mx: 1 }}>
              <img src="Logo.png" alt="" height={40} />
            </Box>
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
