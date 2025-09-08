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
import EventDetail from "./Pages/Eventdetails";
import PreviousExhibitionDetail from "./Pages/PreviousExhibitionDetail";

function ExhibitorMain() {
  return (


      
  
      <Navbar>
        <Routes>
          <Route path="/dashboard" element={<ExhibitorDashboard />} />
          <Route path="/exhibitions" element={<Exhibitions />} />
                 <Route path="/events/:id" element={<EventDetail />} />
          <Route
            path="/previous-exhibitions/"
            element={<PreviousExhibitions />}
          />
            <Route path="/previous-exhibitions/:id" element={<PreviousExhibitionDetail />} />
          <Route path="/create-event" element={<CreateEvent />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/profile" element={<Profile />} />
   

        </Routes>
      </Navbar>
 
    
  );
}

export default ExhibitorMain;
