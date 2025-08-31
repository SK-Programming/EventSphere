import React from "react"
import Navbar from "./Components/Navbar"
import Container from "@mui/material/Container"
import { BrowserRouter as Router, Routes, Route } from "react-router"
import Home from "./Pages/Home"
import Contact from "./Pages/Contact"
import Events from "./Pages/Events"
import Exhibitors from "./Pages/Exhibitors"
import UpcomingEventsPage from "./Pages/UpcomingEventsPage"
import LoginRegister from "./Pages/LoginRegister"
import EventDetails from "./Pages/EventDetails"

function Main() {
  return (
    <Router>
      <Container maxWidth="xl" sx={{ p: 0 }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
          <Route path="/exhibitors" element={<Exhibitors />} />
           <Route path="/upcoming-events" element={<UpcomingEventsPage />} />
         <Route path="/events/:id" element={<EventDetails />} />
        </Routes>
      </Container>
      <Routes>
            <Route path="/login" element={<LoginRegister/>}/>
      </Routes>
    </Router>
  )
}

export default Main
