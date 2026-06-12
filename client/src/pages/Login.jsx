import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";

function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await api.post("/auth/login", {
        email: formData.email,
        password: formData.password,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Login Successful");
      navigate("/dashboard");
    } catch (error) {
      alert(error.response?.data?.message || "Login Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 md:p-6 select-none font-sans">
      <div className="w-full max-w-7xl min-h-[780px] grid lg:grid-cols-2 overflow-hidden rounded-[40px] border border-white/10 bg-slate-900 shadow-[0_0_50px_rgba(0,0,0,0.8)] relative">
        
        {/* Background Ambient Corner Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-amber-500/15 blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[45%] h-[45%] rounded-full bg-purple-600/15 blur-[140px] pointer-events-none"></div>

        {/* LEFT PANEL: Branding & Features */}
        <div className="relative p-8 md:p-16 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col justify-between border-r border-white/5">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_30%,_#4f46e5_0%,_transparent_60%)]"></div>
          
          <div className="relative z-10 my-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold tracking-wider uppercase mb-6">
              ✨ Premium Ecosystem
            </div>
            
            <h1 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight bg-gradient-to-r from-white via-slate-200 to-gray-400 bg-clip-text text-transparent">
              CampusLink
            </h1>
            
            <p className="text-lg text-gray-400 mb-12 max-w-md leading-relaxed">
              The modern platform for students, alumni, recruiters and campus management.
            </p>

            <div className="space-y-6 max-w-md">
              <div className="flex gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm transition duration-300 hover:bg-white/[0.04]">
                <div className="w-12 h-12 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-xl shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                  🎓
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base">Student Management</h3>
                  <p className="text-gray-400 text-sm mt-0.5">Track real-time skills, global CGPA scores, and pipeline placements.</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm transition duration-300 hover:bg-white/[0.04]">
                <div className="w-12 h-12 rounded-xl bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center text-xl shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                  👨‍🎓
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base">Alumni Network</h3>
                  <p className="text-gray-400 text-sm mt-0.5">Directly connect and request mentorship with verified alumni.</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm transition duration-300 hover:bg-white/[0.04]">
                <div className="w-12 h-12 rounded-xl bg-green-600/20 border border-green-500/30 flex items-center justify-center text-xl shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                  📅
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base">Events & Placements</h3>
                  <p className="text-gray-400 text-sm mt-0.5">Seamlessly organize micro-workshops and targeted career drives.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 text-xs text-gray-500 mt-8">
            &copy; 2026 CampusLink Inc. All rights reserved.
          </div>
        </div>

        {/* RIGHT PANEL: Modern UI Glass Login */}
        <div className="bg-slate-950/80 flex items-center justify-center p-6 md:p-12 relative">
          <div className="w-full max-w-md bg-gradient-to-b from-white/[0.07] to-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-[32px] p-8 md:p-10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]">
            
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold text-white tracking-tight">
                Welcome back
              </h2>
              <p className="text-gray-400 text-sm mt-1.5 mb-8">
                Sign in to your account
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              
              {/* Email Input Field */}
              <div className="relative group">
                <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-500 group-focus-within:text-purple-400 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.206" />
                  </svg>
                </span>
                <input
                  type="email"
                  placeholder="Email address"
                  value={formData.email}
                  required
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-200"
                />
              </div>

              {/* Password Input Field with Integrated Action Arrow */}
              <div className="relative group">
                <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-500 group-focus-within:text-purple-400 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input
                  type="password"
                  placeholder="Password"
                  value={formData.password}
                  required
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full pl-12 pr-14 py-4 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-200"
                />
                <button 
                  type="submit"
                  disabled={loading}
                  className="absolute right-2 top-2 bottom-2 w-11 bg-yellow-400 hover:bg-yellow-500 active:scale-95 text-slate-950 flex items-center justify-center rounded-lg transition duration-200 shadow-md disabled:opacity-50 disabled:scale-100"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <svg className="w-5 h-5 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  )}
                </button>
              </div>

              <div className="text-right">
                <span className="text-xs text-gray-400 hover:text-purple-400 cursor-pointer transition">
                  Forgot password?
                </span>
              </div>
            </form>

            {/* Clean OR Divider Separator */}
            <div className="my-6 flex items-center">
              <div className="flex-1 border-t border-white/5"></div>
              <span className="px-4 text-xs font-semibold tracking-widest text-gray-500">OR</span>
              <div className="flex-1 border-t border-white/5"></div>
            </div>

            {/* Social Sign In Providers */}
            <div className="space-y-3">
              <button className="w-full p-3.5 rounded-xl border border-white/10 text-gray-200 text-sm font-medium hover:bg-white/5 flex items-center justify-between px-5 transition duration-200 group">
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path fill="#EA4335" d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.113-5.137 4.113-3.41 0-6.165-2.766-6.165-6.177 0-3.41 2.755-6.177 6.165-6.177 1.493 0 2.845.54 3.9 1.429l3.03-3.04C18.94 1.912 15.86 1 12.24 1c-6.075 0-11 4.936-11 11s4.925 11 11 11c5.98 0 10.154-4.212 10.154-10.335 0-.627-.066-1.108-.165-1.39H12.24z"/>
                  </svg>
                  <span>Continue with Google</span>
                </div>
                <svg className="w-4 h-4 text-gray-500 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <button className="w-full p-3.5 rounded-xl border border-white/10 text-gray-200 text-sm font-medium hover:bg-white/5 flex items-center justify-between px-5 transition duration-200 group">
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span>Continue with LinkedIn</span>
              </div>
              <svg className="w-4 h-4 text-gray-500 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Registration Link */}
          <p className="text-center text-sm text-gray-400 mt-8">
            Don't have an account?{" "}
            <Link to="/register" className="text-yellow-400 hover:underline font-semibold transition ml-1">
              Create Account
            </Link>
          </p>

        </div>
      </div>

    </div>
  </div>
);
}

export default Login;