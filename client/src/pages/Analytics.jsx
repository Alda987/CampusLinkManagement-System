import { useState } from "react";
import { Link } from "react-router-dom";
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

import {
  FaCheckCircle,
  FaChartLine,
  FaClock,
  FaUsers,
  FaTachometerAlt,
  FaBriefcase,
  FaNewspaper,
  FaCalendarAlt,
  FaUserGraduate,
  FaChartPie,
  FaCog,
  FaBell,
  FaSearch,
} from "react-icons/fa";

function Analytics() {
  const activityData = [
    { day: "Mon", created: 12, completed: 8 },
    { day: "Tue", created: 18, completed: 12 },
    { day: "Wed", created: 15, completed: 14 },
    { day: "Thu", created: 22, completed: 16 },
    { day: "Fri", created: 10, completed: 20 },
    { day: "Sat", created: 5, completed: 7 },
  ];

  const statusData = [
    { name: "Completed", value: 55 },
    { name: "In Progress", value: 25 },
    { name: "Review", value: 12 },
    { name: "Todo", value: 8 },
  ];

  const productivityData = [
    { day: "Mon", value: 30 },
    { day: "Tue", value: 55 },
    { day: "Wed", value: 80 },
    { day: "Thu", value: 45 },
    { day: "Fri", value: 95 },
    { day: "Sat", value: 70 },
  ];

  const COLORS = ["#10b981", "#06b6d4", "#f59e0b", "#8b5cf6"];

  // Custom tooltips matching screen style
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 rounded-xl shadow-2xl">
          <p className="text-gray-400 font-semibold mb-1">{label}</p>
          {payload.map((pld, index) => (
            <p key={index} style={{ color: pld.fill }} className="text-sm font-bold">
              {pld.name}: {pld.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#070b19] via-[#0f112a] to-[#0a0d1e] text-white flex font-sans selection:bg-purple-500/30">
      
      {/* 1. Dashboard Premium Sidebar Navigation */}
      <div className="w-64 bg-[#0d1127]/60 backdrop-blur-2xl border-r border-white/5 p-6 flex flex-col justify-between hidden md:flex sticky h-screen top-0 z-50">
        <div>
          <div className="flex items-center gap-3 mb-10 px-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
              <span className="font-black text-xl tracking-tighter">Q</span>
            </div>
            <h1 className="text-2xl font-black bg-gradient-to-r from-white via-slate-200 to-gray-400 bg-clip-text text-transparent">
              Quantix
            </h1>
          </div>

          <ul className="space-y-2 text-gray-400">
            <li>
              <Link to="/" className="flex items-center gap-3 hover:text-white hover:bg-white/5 px-4 py-3 rounded-xl transition duration-200">
                <FaTachometerAlt className="text-lg" />
                <span className="font-medium text-[15px]">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/students" className="flex items-center gap-3 hover:text-white hover:bg-white/5 px-4 py-3 rounded-xl transition duration-200">
                <FaUserGraduate className="text-lg" />
                <span className="font-medium text-[15px]">Students</span>
              </Link>
            </li>
            <li>
              <Link to="/jobs" className="flex items-center gap-3 hover:text-white hover:bg-white/5 px-4 py-3 rounded-xl transition duration-200">
                <FaBriefcase className="text-lg" />
                <span className="font-medium text-[15px]">Jobs</span>
              </Link>
            </li>
            <li>
              <Link to="/posts" className="flex items-center gap-3 hover:text-white hover:bg-white/5 px-4 py-3 rounded-xl transition duration-200">
                <FaNewspaper className="text-lg" />
                <span className="font-medium text-[15px]">Posts</span>
              </Link>
            </li>
            <li>
              <Link to="/events" className="flex items-center gap-3 hover:text-white hover:bg-white/5 px-4 py-3 rounded-xl transition duration-200">
                <FaCalendarAlt className="text-lg" />
                <span className="font-medium text-[15px]">Events</span>
              </Link>
            </li>
            <li>
              <Link to="/alumni" className="flex items-center gap-3 hover:text-white hover:bg-white/5 px-4 py-3 rounded-xl transition duration-200">
                <FaUsers className="text-lg" />
                <span className="font-medium text-[15px]">Alumni</span>
              </Link>
            </li>
            <li>
              <Link to="/analytics" className="flex items-center gap-3 text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-4 py-3 rounded-xl transition duration-200 shadow-[0_0_20px_rgba(6,182,212,0.15)]">
                <FaChartPie className="text-lg" />
                <span className="font-semibold text-[15px]">Analytics</span>
              </Link>
            </li>
            <li>
              <Link to="/settings" className="flex items-center gap-3 hover:text-white hover:bg-white/5 px-4 py-3 rounded-xl transition duration-200">
                <FaCog className="text-lg" />
                <span className="font-medium text-[15px]">Settings</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-b from-purple-900/20 to-indigo-900/10 border border-purple-500/20 rounded-2xl p-4 text-center relative overflow-hidden">
          <div className="absolute -right-6 -bottom-6 w-20 h-20 bg-purple-500/10 rounded-full blur-xl"></div>
          <p className="text-xs text-purple-300 font-semibold uppercase tracking-wider mb-1">Upgrade Tier</p>
          <h4 className="text-sm font-bold text-white mb-3">Activate Quantum AI</h4>
          <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-xs py-2.5 px-4 rounded-xl shadow-lg transition duration-200">
            Go Premium
          </button>
        </div>
      </div>

      {/* Main Container Area */}
      <div className="flex-1 p-6 md:p-10 max-w-[1600px] mx-auto w-full space-y-8 overflow-x-hidden">
        
        {/* Upper Top Navbar Component */}
        <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4 border-b border-white/5 pb-6">
          <div className="relative flex-1 max-w-md">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-500">
              <FaSearch size={15} />
            </span>
            <input
              type="text"
              placeholder="Search data index, tools or logs..."
              className="w-full bg-[#0d1127]/50 backdrop-blur-xl border border-white/10 pl-11 pr-4 py-2.5 rounded-xl text-sm outline-none text-gray-200 placeholder-slate-500 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition duration-200"
            />
          </div>
          
          <div className="flex items-center justify-end gap-4">
            <button className="relative bg-[#0d1127]/50 p-3 rounded-xl border border-white/10 text-gray-400 hover:text-white transition">
              <FaBell size={17} />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-rose-500 rounded-full animate-pulse"></span>
            </button>
            <div className="h-8 w-[1px] bg-white/10 hidden sm:block"></div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#10b981] to-emerald-400 flex items-center justify-center font-bold text-slate-950 shadow-md">
                AC
              </div>
              <div className="hidden xl:block text-left">
                <p className="text-sm font-bold text-white leading-3">Alex Chen</p>
                <span className="text-[11px] text-gray-400 font-medium">Co-Founder</span>
              </div>
            </div>
          </div>
        </div>

        {/* Workspace Title Header Block */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-white via-slate-200 to-gray-400 bg-clip-text text-transparent tracking-tight">
              Analytics Overview
            </h2>
            <p className="text-gray-400 text-sm mt-1">
              Real-time core performance logs and automated metric tracking indexes.
            </p>
          </div>
          <div className="flex gap-3">
            <select className="bg-[#0d1127]/60 text-gray-300 border border-white/10 px-4 py-2.5 rounded-xl text-xs font-semibold outline-none focus:border-white/20">
              <option>Last 30 Days</option>
              <option>Last 6 Months</option>
              <option>All Time</option>
            </select>
            <button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs px-5 py-3 rounded-xl shadow-lg shadow-purple-500/20 transition duration-200">
              Export Matrix
            </button>
          </div>
        </div>

        {/* 2. Cyber Neon Glowing KPI System Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          <div className="bg-[#0d1127]/40 backdrop-blur-xl border border-white/5 p-6 rounded-3xl relative overflow-hidden group shadow-[0_4px_30px_rgba(0,0,0,0.4)] hover:border-emerald-500/30 transition duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/10 transition duration-300"></div>
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[11px] text-emerald-400 font-bold uppercase tracking-widest bg-emerald-500/10 px-2.5 py-1 rounded-md">System Live</span>
                <h3 className="mt-4 text-sm font-semibold text-gray-400">Tasks Completed</h3>
                <p className="text-4xl font-black text-white tracking-tight mt-1">256</p>
              </div>
              <div className="p-3 bg-emerald-500/10 rounded-2xl text-emerald-400 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                <FaCheckCircle size={22} />
              </div>
            </div>
            <p className="text-[11px] text-gray-400 mt-4"><span className="text-emerald-400 font-bold">↑ 12.5%</span> metrics increase from last interval</p>
          </div>

          <div className="bg-[#0d1127]/40 backdrop-blur-xl border border-white/5 p-6 rounded-3xl relative overflow-hidden group shadow-[0_4px_30px_rgba(0,0,0,0.4)] hover:border-cyan-500/30 transition duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition duration-300"></div>
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[11px] text-cyan-400 font-bold uppercase tracking-widest bg-cyan-500/10 px-2.5 py-1 rounded-md">High Output</span>
                <h3 className="mt-4 text-sm font-semibold text-gray-400">Global Productivity</h3>
                <p className="text-4xl font-black text-white tracking-tight mt-1">87%</p>
              </div>
              <div className="p-3 bg-cyan-500/10 rounded-2xl text-cyan-400 border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                <FaChartLine size={22} />
              </div>
            </div>
            <p className="text-[11px] text-gray-400 mt-4"><span className="text-cyan-400 font-bold">↑ 4.2%</span> aggregate system velocity scaling</p>
          </div>

          <div className="bg-[#0d1127]/40 backdrop-blur-xl border border-white/5 p-6 rounded-3xl relative overflow-hidden group shadow-[0_4px_30px_rgba(0,0,0,0.4)] hover:border-amber-500/30 transition duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl group-hover:bg-amber-500/10 transition duration-300"></div>
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[11px] text-amber-400 font-bold uppercase tracking-widest bg-amber-500/10 px-2.5 py-1 rounded-md">Optimal Latency</span>
                <h3 className="mt-4 text-sm font-semibold text-gray-400">Avg Completion</h3>
                <p className="text-4xl font-black text-white tracking-tight mt-1">2.4d</p>
              </div>
              <div className="p-3 bg-amber-500/10 rounded-2xl text-amber-400 border border-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.1)]">
                <FaClock size={22} />
              </div>
            </div>
            <p className="text-[11px] text-gray-400 mt-4"><span className="text-emerald-400 font-bold">↓ 0.6 days</span> latency cycle drop duration</p>
          </div>

          <div className="bg-[#0d1127]/40 backdrop-blur-xl border border-white/5 p-6 rounded-3xl relative overflow-hidden group shadow-[0_4px_30px_rgba(0,0,0,0.4)] hover:border-purple-500/30 transition duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl group-hover:bg-purple-500/10 transition duration-300"></div>
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[11px] text-purple-400 font-bold uppercase tracking-widest bg-purple-500/10 px-2.5 py-1 rounded-md">Stable Node</span>
                <h3 className="mt-4 text-sm font-semibold text-gray-400">Active Members</h3>
                <p className="text-4xl font-black text-white tracking-tight mt-1">32</p>
              </div>
              <div className="p-3 bg-purple-500/10 rounded-2xl text-purple-400 border border-purple-500/20 shadow-[0_0_15px_rgba(139,92,246,0.1)]">
                <FaUsers size={22} />
              </div>
            </div>
            <p className="text-[11px] text-gray-400 mt-4"><span className="text-purple-400 font-bold">88%</span> execution team engagement metrics</p>
          </div>

        </div>

        {/* 3. Immersive Interactive Grid Charts Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Main Dual Bar Chart Section */}
          <div className="lg:col-span-8 bg-[#0b0e22]/50 backdrop-blur-xl border border-white/5 rounded-3xl p-6 shadow-2xl relative">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">Task Activity Metrics</h3>
                <p className="text-xs text-gray-400">Cross-referenced logs indicating asset creation vs deployment output loops.</p>
              </div>
              <div className="flex items-center gap-4 text-xs font-semibold">
                <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-[#8b5cf6]"></span><span className="text-gray-400">Created</span></div>
                <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-[#10b981]"></span><span className="text-gray-400">Completed</span></div>
              </div>
            </div>

            <ResponsiveContainer width="100%" height={320}>
              <BarChart data={activityData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="createdGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#8b5cf6" stopOpacity={1}/>
                    <stop offset="100%" stopColor="#6366f1" stopOpacity={0.2}/>
                  </linearGradient>
                  <linearGradient id="completedGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10b981" stopOpacity={1}/>
                    <stop offset="100%" stopColor="#059669" stopOpacity={0.2}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" vertical={false} />
                <XAxis dataKey="day" tick={{ fill: '#64748b', fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: '#64748b', fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.02)' }} />
                <Bar dataKey="created" fill="url(#createdGrad)" name="Created" radius={[6, 6, 0, 0]} maxBarSize={30} />
                <Bar dataKey="completed" fill="url(#completedGrad)" name="Completed" radius={[6, 6, 0, 0]} maxBarSize={30} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Glass Radial Distribution Donut Block */}
          <div className="lg:col-span-4 bg-[#0b0e22]/50 backdrop-blur-xl border border-white/5 rounded-3xl p-6 shadow-2xl flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight">Status Distribution</h3>
              <p className="text-xs text-gray-400">Modular status separation of internal working items matrix.</p>
            </div>

            <div className="relative flex items-center justify-center my-4">
              <ResponsiveContainer width="100%" height={210}>
                <PieChart>
                  <Pie
                    data={statusData}
                    cx="50%"
                    cy="50%"
                    innerRadius={65}
                    outerRadius={90}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {statusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index]} stroke="rgba(11,14,34,0.8)" strokeWidth={3} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute text-center">
                <span className="text-[11px] uppercase tracking-widest text-slate-400 font-bold block">Total Weight</span>
                <span className="text-3xl font-black text-white tracking-tighter">100%</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-x-2 gap-y-2.5 text-xs">
              {statusData.map((item, index) => (
                <div key={index} className="flex items-center gap-2 px-2 py-1.5 rounded-lg bg-white/5 border border-white/5">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: COLORS[index] }}></span>
                  <span className="text-gray-400 truncate">{item.name}</span>
                  <span className="ml-auto font-bold text-white">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Full-width Productive Smooth Wave Area Graph Component */}
        <div className="bg-[#0b0e22]/50 backdrop-blur-xl border border-white/5 rounded-3xl p-6 shadow-2xl">
          <div>
            <h3 className="text-lg font-bold text-white tracking-tight">Weekly Production Output Run</h3>
            <p className="text-xs text-gray-400">Continuous operation workload analytics loop tracking operational velocity indices.</p>
          </div>

          <div className="mt-6">
            <ResponsiveContainer width="100%" height={260}>
              <AreaChart data={productivityData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="neonGlowGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#8b5cf6" stopOpacity={0.35}/>
                    <stop offset="100%" stopColor="#6366f1" stopOpacity={0.0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.02)" vertical={false} />
                <XAxis dataKey="day" tick={{ fill: '#64748b', fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: '#64748b', fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Area
                  type="monotone"
                  dataKey="value"
                  name="Productivity Index"
                  stroke="#8b5cf6"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#neonGlowGrad)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Analytics;