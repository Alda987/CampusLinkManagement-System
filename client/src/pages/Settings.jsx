import React from "react";

function Settings() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-4xl font-bold mb-6">
        Settings
      </h1>

      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6">
        <h2 className="text-2xl font-semibold">
          Profile Settings
        </h2>

        <p className="text-gray-400 mt-3">
          Manage account and preferences.
        </p>
      </div>
    </div>
  );
}

export default Settings;