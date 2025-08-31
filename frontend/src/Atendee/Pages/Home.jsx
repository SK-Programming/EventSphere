import React from 'react'
import Typography from '@mui/material/Typography'
import Header from '../Components/Header'
import UpcomingEvents from '../Components/UpcomingEvents'
import Exhibitors from '../Components/Exhibitors'
import Gallery from '../Components/Gallery'

function Home() {
  return (
    <div>
<Header/>
<UpcomingEvents/>
<Exhibitors/>
<Gallery/>
    </div>
  )
}

export default Home
