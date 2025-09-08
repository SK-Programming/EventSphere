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

function AdminMain() {
  return (
    <Router>
      <Navbar>
        <Routes>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/event-request" element={<EventRequest />} />
          <Route path="/admin/active-events" element={<ActiveEvents />} />
          <Route path="/admin/previous-exhibitions" element={<PreviousExhibitions />} />
          <Route path="/admin/exhibitors" element={<Exhibitors />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/messages" element={<Messages />} />
          <Route path="/admin/profile" element={<Profile />} />
        </Routes>
      </Navbar>
    </Router>
  );
}

export default AdminMain;
