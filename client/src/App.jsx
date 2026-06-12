import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Students from "./pages/Students";
import Jobs from "./pages/Jobs";
import Posts from "./pages/Posts";
import Events from "./pages/Events";
import Alumni from "./pages/Alumni";

import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Authentication */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* CampusLink Modules */}
        <Route path="/students" element={<Students />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/events" element={<Events />} />
        <Route path="/alumni" element={<Alumni />} />

        {/* Additional Pages */}
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/settings" element={<Settings />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;