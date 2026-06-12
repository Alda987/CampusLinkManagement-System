import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Dashboard() {
  return (
    <div className="flex bg-slate-950 min-h-screen">
      <Sidebar />

      <div className="flex-1 p-6">
        <Navbar />

        <div className="grid grid-cols-4 gap-6 mt-8">
          <div className="bg-slate-800 text-white p-6 rounded-xl">
            <h2 className="text-lg">Students</h2>
            <p className="text-3xl font-bold mt-2">0</p>
          </div>

          <div className="bg-slate-800 text-white p-6 rounded-xl">
            <h2 className="text-lg">Jobs</h2>
            <p className="text-3xl font-bold mt-2">0</p>
          </div>

          <div className="bg-slate-800 text-white p-6 rounded-xl">
            <h2 className="text-lg">Posts</h2>
            <p className="text-3xl font-bold mt-2">0</p>
          </div>

          <div className="bg-slate-800 text-white p-6 rounded-xl">
            <h2 className="text-lg">Events</h2>
            <p className="text-3xl font-bold mt-2">0</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;