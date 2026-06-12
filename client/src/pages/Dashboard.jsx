import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import banner from "../assets/dashboard-banner.jpg";

import {
  FaUsers,
  FaBriefcase,
  FaNewspaper,
  FaCalendarAlt,
  FaChartPie,
  FaCog,
  FaUserGraduate,
  FaTachometerAlt,
  FaBell,
} from "react-icons/fa";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  CartesianGrid,
} from "recharts";

function Dashboard() {
  const [stats, setStats] = useState({
    students: 0,
    jobs: 0,
    posts: 0,
    events: 0,
  });

  useEffect(() => {
    api
      .get("/dashboard/stats")
      .then((res) => {
        setStats(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const data = [
    { name: "Students", value: stats.students },
    { name: "Jobs", value: stats.jobs },
    { name: "Posts", value: stats.posts },
    { name: "Events", value: stats.events },
  ];

  const pieData = [
    { name: "Students", value: stats.students },
    { name: "Jobs", value: stats.jobs },
    { name: "Posts", value: stats.posts },
    { name: "Events", value: stats.events },
  ];

  const COLORS = [
    "#8b5cf6",
    "#06b6d4",
    "#22c55e",
    "#f59e0b",
  ];

  const productivityData = [
    { day: "Mon", value: 30 },
    { day: "Tue", value: 55 },
    { day: "Wed", value: 80 },
    { day: "Thu", value: 45 },
    { day: "Fri", value: 95 },
    { day: "Sat", value: 70 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 text-white flex">

      {/* Sidebar */}
      <div className="w-64 bg-white/10 backdrop-blur-xl border-r border-white/10 p-6 shadow-2xl">

        <h1 className="text-3xl font-bold text-purple-400 mb-10">
          CampusLink
        </h1>

        <ul className="space-y-4 text-gray-300">

          <li>
            <Link
              to="/"
              className="flex items-center gap-3 bg-purple-600 px-4 py-2 rounded-xl text-white transition"
            >
              <FaTachometerAlt />
              Dashboard
            </Link>
          </li>

          <li>
            <Link
              to="/students"
              className="flex items-center gap-3 hover:text-purple-400 transition px-4 py-1"
            >
              <FaUsers />
              Students
            </Link>
          </li>

          <li>
            <Link
              to="/jobs"
              className="flex items-center gap-3 hover:text-purple-400 transition px-4 py-1"
            >
              <FaBriefcase />
              Jobs
            </Link>
          </li>

          <li>
            <Link
              to="/posts"
              className="flex items-center gap-3 hover:text-purple-400 transition px-4 py-1"
            >
              <FaNewspaper />
              Posts
            </Link>
          </li>

          <li>
            <Link
              to="/events"
              className="flex items-center gap-3 hover:text-purple-400 transition px-4 py-1"
            >
              <FaCalendarAlt />
              Events
            </Link>
          </li>

          <li>
            <Link
              to="/alumni"
              className="flex items-center gap-3 hover:text-purple-400 transition px-4 py-1"
            >
              <FaUserGraduate />
              Alumni
            </Link>
          </li>

          <li>
            <Link
              to="/analytics"
              className="flex items-center gap-3 hover:text-purple-400 transition px-4 py-1"
            >
              <FaChartPie />
              Analytics
            </Link>
          </li>

          <li>
            <Link
              to="/settings"
              className="flex items-center gap-3 hover:text-purple-400 transition px-4 py-1"
            >
              <FaCog />
              Settings
            </Link>
          </li>

        </ul>
      </div>

      {/* Main Area */}
      <div className="flex-1 p-8">

        {/* Navbar */}
        <div className="flex justify-between items-center mb-8">

          <input
            type="text"
            placeholder="Search..."
            className="bg-white/10 backdrop-blur-xl border border-white/20 px-4 py-3 rounded-xl w-80 outline-none"
          />

          <div className="flex items-center gap-4">

            <FaBell
              size={22}
              className="cursor-pointer text-gray-300 hover:text-white"
            />

            <button className="bg-green-500 px-4 py-2 rounded-lg">
              Live
            </button>

            <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center font-bold">
              A
            </div>

          </div>

        </div>

        {/* Dashboard Banner */}
        <div className="mb-8 overflow-hidden rounded-3xl shadow-2xl border border-white/10">
          <img
            src={banner}
            alt="Dashboard Banner"
            className="w-full h-[350px] object-cover"
          />
        </div>

        {/* Header */}
        <h1 className="text-4xl font-bold mb-2">
          Dashboard Overview
        </h1>

        <p className="text-gray-400 mb-8">
          Welcome to CampusLink Management System
        </p>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-6 rounded-3xl shadow-[0_0_30px_rgba(168,85,247,0.4)]">
            <FaUsers size={32} />
            <h2 className="mt-4 text-lg">Students</h2>
            <p className="text-5xl font-bold mt-2">{stats.students}</p>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 rounded-3xl shadow-[0_0_30px_rgba(59,130,246,0.4)]">
            <FaBriefcase size={32} />
            <h2 className="mt-4 text-lg">Jobs</h2>
            <p className="text-5xl font-bold mt-2">{stats.jobs}</p>
          </div>

          <div className="bg-gradient-to-r from-pink-600 to-pink-800 p-6 rounded-3xl shadow-[0_0_30px_rgba(236,72,153,0.4)]">
            <FaNewspaper size={32} />
            <h2 className="mt-4 text-lg">Posts</h2>
            <p className="text-5xl font-bold mt-2">{stats.posts}</p>
          </div>

          <div className="bg-gradient-to-r from-green-600 to-green-800 p-6 rounded-3xl shadow-[0_0_30px_rgba(34,197,94,0.4)]">
            <FaCalendarAlt size={32} />
            <h2 className="mt-4 text-lg">Events</h2>
            <p className="text-5xl font-bold mt-2">{stats.events}</p>
          </div>

        </div>

        {/* Analytics Section */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Bar Chart */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl">

            <h2 className="text-2xl font-bold mb-4">
              Analytics Overview
            </h2>

            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar
                  dataKey="value"
                  fill="#8b5cf6"
                  radius={[10, 10, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>

          </div>

          {/* Pie Chart */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl">

            <h2 className="text-2xl font-bold mb-4">
              Distribution
            </h2>

            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={100}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>

          </div>

        </div>

        {/* Productivity Graph */}
        <div className="mt-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl">

          <h2 className="text-2xl font-bold mb-4">
            Weekly Productivity
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={productivityData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#8b5cf6"
                fill="#8b5cf6"
              />
            </AreaChart>
          </ResponsiveContainer>

        </div>

        {/* Team, Jobs, and Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">

          {/* Team Members Card */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl">
            <h2 className="text-2xl font-bold mb-4">
              Team Members
            </h2>

            <div className="space-y-4">
              <div className="bg-white/10 p-4 rounded-xl">
                👩 Sarah - Frontend Developer
              </div>

              <div className="bg-white/10 p-4 rounded-xl">
                👨 John - Backend Developer
              </div>

              <div className="bg-white/10 p-4 rounded-xl">
                👩 Emma - UI Designer
              </div>
            </div>
          </div>

          {/* Recent Jobs Card */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl">
            <h2 className="text-2xl font-bold mb-4">
              Recent Jobs
            </h2>

            <div className="space-y-3">
              <div>💼 MERN Developer</div>
              <div>💼 Java Backend Engineer</div>
              <div>💼 Data Analyst Intern</div>
            </div>
          </div>

          {/* Upcoming Events Card */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl">
            <h2 className="text-2xl font-bold mb-4">
              Upcoming Events
            </h2>

            <div className="space-y-3">
              <div>📅 Placement Drive - June 20</div>
              <div>🎓 Alumni Meetup - June 25</div>
              <div>💻 Hackathon - July 1</div>
            </div>
          </div>

        </div>

        {/* Quick Actions */}
        <div className="mt-8">

          <h2 className="text-2xl font-bold mb-4">
            Quick Actions
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            <button className="bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl hover:bg-purple-600 transition">
              Add Student
            </button>

            <button className="bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl hover:bg-blue-600 transition">
              Add Job
            </button>

            <button className="bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl hover:bg-pink-600 transition">
              Add Post
            </button>

            <button className="bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl hover:bg-green-600 transition">
              Add Event
            </button>

          </div>

        </div>

        {/* Recent Activity */}
        <div className="mt-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl">

          <h2 className="text-2xl font-bold mb-4">
            Recent Activity
          </h2>

          <div className="space-y-4">

            <div className="bg-white/10 backdrop-blur-lg border border-white/10 p-4 rounded-xl">
              🎓 New student registered
            </div>

            <div className="bg-white/10 backdrop-blur-lg border border-white/10 p-4 rounded-xl">
              💼 New job posted
            </div>

            <div className="bg-white/10 backdrop-blur-lg border border-white/10 p-4 rounded-xl">
              📝 New post created
            </div>

            <div className="bg-white/10 backdrop-blur-lg border border-white/10 p-4 rounded-xl">
              📅 New event created
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Dashboard;