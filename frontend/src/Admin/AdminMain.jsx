import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";

// Pages (you’ll need to create/rename them accordingly)
import Dashboard from "./Pages/Dashboard";
import EventRequest from "./Pages/EventRequest";
import ActiveEvents from "./Pages/ActiveEvents";
import PreviousExhibitions from "./Pages/PreviousExhibitions";
import Exhibitors from "./Pages/Exhibitors";
import Users from "./Pages/Users";
import Messages from "./Pages/Messages";
import Profile from "./Pages/Profile";
import PreviousExhibitionDetail from "../Exhibitor/Pages/PreviousExhibitionDetail";
import ActiveEventsDetails from "./Pages/ActiveEventsDetails";

function AdminMain() {
  return (
    
      <Navbar>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/event-request" element={<EventRequest />} />
          <Route path="/active-events" element={<ActiveEvents />} />
          <Route path="/active-events/:id" element={<ActiveEventsDetails />} />
          <Route path="/previous-exhibitions" element={<PreviousExhibitions />} />
          <Route path="/previous-exhibitions/:id" element={<PreviousExhibitionDetail />} />
          <Route path="/exhibitors" element={<Exhibitors />} />
          <Route path="/users" element={<Users />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Navbar>

  );
}

export default AdminMain;
