import React from 'react'
import Typography from '@mui/material/Typography'
import Header from '../Components/Header'
import UpcomingEvents from '../Components/UpcomingEvents'
import Exhibitors from '../Components/Exhibitors'

function Home() {
  return (
    <div>
<Header/>
<UpcomingEvents/>
<Exhibitors/>
    </div>
  )
}

export default Home
