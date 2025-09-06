import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import ExhibitorDashboard from "./Pages/ExhibitorDashboard";
import Exhibitions from "./Pages/Exhibitions";
import PreviousExhibitions from "./Pages/PreviousExhibitions";
import CreateEvent from "./Pages/CreateEvent";
import Messages from "./Pages/Messages";
import Profile from "./Pages/Profile";
import Container from '@mui/material/Container'

function ExhibitorMain() {
  return (
    <Router>

      
  
      <Navbar>
        <Routes>
          <Route path="/exhibitor/dashboard" element={<ExhibitorDashboard />} />
          <Route path="/exhibitor/exhibitions" element={<Exhibitions />} />
          <Route
            path="/exhibitor/previous-exhibitions"
            element={<PreviousExhibitions />}
          />
          <Route path="/exhibitor/create-event" element={<CreateEvent />} />
          <Route path="/exhibitor/messages" element={<Messages />} />
          <Route path="/exhibitor/profile" element={<Profile />} />
        </Routes>
      </Navbar>
 
    </Router>
  );
}

export default ExhibitorMain;
