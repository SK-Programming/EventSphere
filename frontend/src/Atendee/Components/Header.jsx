import { Box, Typography } from '@mui/material'
import React from 'react'


function Header() {
  return (
    <div>
<Box sx={{width:1, height:"70vh" ,width:"100%",display: "flex" , alignItems: "center" ,justifyContent:"center" ,position:"relative" ,overflow:"hidden"}}>

      <Box sx={{ display: "flex" , alignItems: "center" , position:"relative" ,top: -120 ,justifyContent:"center",height:"100%"}}>
     
        <img src="header.png" alt="" style={{backgroundSize:"contain",zIndex:1,position:"absolute",top:-186,scale:.93}}/>
    
        <Box sx={{position:"absolute",top:182,display:'flex'}}>
            <Typography variant="h1" sx={{ fontWeight: "bold", color: "text.primary" ,textAlign:"center"}}>
              Event
            </Typography>
            <Typography variant="h1" sx={{ fontWeight: "bold", color: "text.logoLite" ,textAlign:"center"}}>
              Sphere
            </Typography>
        </Box>
          
          </Box>


</Box>

    </div>
  )
}

export default Header
