function Navbar() {
  return (
    <div className="bg-slate-800 text-white p-4 flex justify-between items-center rounded-xl">
      <h2 className="text-2xl font-bold">
        Dashboard
      </h2>

      <button className="bg-cyan-500 px-4 py-2 rounded-lg">
        Profile
      </button>
    </div>
  );
}

export default Navbar;