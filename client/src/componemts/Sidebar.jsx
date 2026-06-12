import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 bg-slate-900 text-white min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-10">
        CampusLink
      </h1>

      <div className="flex flex-col gap-4">
        <Link to="/" className="hover:text-cyan-400">
          📊 Dashboard
        </Link>

        <Link to="/students" className="hover:text-cyan-400">
          👨‍🎓 Students
        </Link>

        <Link to="/jobs" className="hover:text-cyan-400">
          💼 Jobs
        </Link>

        <Link to="/posts" className="hover:text-cyan-400">
          📝 Posts
        </Link>

        <Link to="/events" className="hover:text-cyan-400">
          📅 Events
        </Link>

        <Link to="/alumni" className="hover:text-cyan-400">
          🎓 Alumni
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;