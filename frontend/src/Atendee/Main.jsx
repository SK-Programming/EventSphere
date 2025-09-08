import React from "react";
import Navbar from "./Components/Navbar";
import Container from "@mui/material/Container";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Events from "./Pages/Events";
import Exhibitors from "./Pages/Exhibitors";
import UpcomingEventsPage from "./Pages/UpcomingEventsPage";
import LoginRegister from "./Pages/LoginRegister";
import EventDetails from "./Pages/EventDetails";
import Profile from "./Pages/Profile";
import ExhibitorRegister from "./Pages/ExhibitorRegister";
import ExhibitorDetail from "./Pages/ExhibitorDetail";
function Main() {
  return (

      <Container maxWidth="xl" sx={{ p: 0 }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
          <Route path="/exhibitors" element={<Exhibitors />} />
          <Route path="/upcoming-events" element={<UpcomingEventsPage />} />
          <Route path="/events/:id" element={<EventDetails />} />
          <Route path="/login" element={<LoginRegister />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/exhibitors-register" element={<ExhibitorRegister />} />
          <Route path="/exhibitors/:id" element={<ExhibitorDetail />} />
        </Routes>
      </Container>
 
  );
}

export default Main;
