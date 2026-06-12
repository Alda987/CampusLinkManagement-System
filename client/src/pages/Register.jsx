import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";
import registerImage from "../assets/register-banner.jpg";

function Register() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "student",
  });

  const handleRegister = async (e) => {
    e.preventDefault();

    const fullName = `${firstName} ${lastName}`.trim();

    try {
      await api.post("/auth/register", {
        name: fullName,
        email: formData.email,
        password: formData.password,
        role: formData.role,
      });

      alert("Registration Successful");
      navigate("/login");
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Registration Failed"
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#06040a] flex items-center justify-center p-4 md:p-6 font-sans antialiased select-none">
      
      {/* Main Container Layout - Split 70% / 30% */}
      <div className="w-full max-w-7xl min-h-[800px] bg-[#110c1f] rounded-[40px] overflow-hidden border border-white/5 flex shadow-[0_0_60px_rgba(0,0,0,0.8)]">
        
        {/* LEFT PANEL: Cinematic Media & Branding Display (Upgraded to 70% Width) */}
        <div className="w-full lg:w-[70%] relative hidden lg:flex flex-col justify-between p-12 overflow-hidden border-r border-white/5">
          
          {/* Background Image Layer with scale optimization */}
          <img
            src={registerImage}
            alt="Register Background"
            className="absolute inset-0 w-full h-full object-cover scale-105 pointer-events-none"
            style={{
              objectPosition: "center center",
            }}
          />

          {/* Upgraded Background Overlay for much better image visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/30 to-black/50 z-0"></div>

          {/* Top Row: Clean Branding Text Header & System Navigation */}
          <div className="relative z-10 flex items-center justify-between w-full">
            {/* Plain Text Brand Identity replaces sailboat icon */}
            <h2 className="text-white text-2xl font-bold tracking-tight">
              CampusLink
            </h2>

            {/* Premium Header Link Interface Button */}
            <button 
              onClick={() => navigate("/")}
              className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white text-xs font-medium border border-white/10 backdrop-blur-md flex items-center gap-2 transition duration-200"
            >
              Back to website
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
              </svg>
            </button>
          </div>

          {/* Typography Panel Container (Shifted up to bottom-24 with shadow safety configurations) */}
          <div className="absolute bottom-24 left-12 z-20 max-w-2xl">
            <p className="text-purple-400 text-2xl font-semibold mb-3">
              Welcome to
            </p>

            <h1 
              className="text-6xl md:text-7xl xl:text-8xl font-extrabold text-white mb-4 leading-none tracking-tight"
              style={{
                textShadow: "0 4px 20px rgba(0,0,0,0.45)",
              }}
            >
              CampusLink
            </h1>

            <h2 
              className="text-4xl font-semibold text-white/90 mb-5 tracking-tight"
              style={{
                textShadow: "0 2px 14px rgba(0,0,0,0.4)",
              }}
            >
              Your Journey Beautifully Framed
            </h2>

            <p 
              className="text-xl text-gray-200 leading-relaxed"
              style={{
                textShadow: "0 2px 10px rgba(0,0,0,0.35)",
              }}
            >
              Connect Students, Alumni, Recruiters and Opportunities in one modern platform.
            </p>
          </div>

          {/* Active Navigation Slide Track Progress Indicator Bars */}
          <div className="relative z-10 flex items-center gap-2.5 mt-auto">
            <div className="w-8 h-1.5 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)] transition-all"></div>
            <div className="w-5 h-1.5 rounded-full bg-white/20 hover:bg-white/40 transition-colors cursor-pointer"></div>
            <div className="w-5 h-1.5 rounded-full bg-white/20 hover:bg-white/40 transition-colors cursor-pointer"></div>
          </div>

        </div>

        {/* RIGHT FORM PANEL: Premium Ultra-Blur Glassmorphism Workspace (Adjusted to 30% Width) */}
        <div className="w-full lg:w-[30%] flex items-center justify-center p-6 sm:p-12 md:p-16 bg-[#0a0614]/55 backdrop-blur-[30px] relative z-10">
          <div className="w-full max-w-md">
            
            <h2 className="text-3xl font-semibold text-white tracking-tight">
              Create an account
            </h2>
            <p className="text-gray-400 text-sm mt-1 mb-8">
              Join us and start your beautiful journey.
            </p>

            <form onSubmit={handleRegister} className="space-y-4">
              
              {/* Dual Column Single Row Split Name Inputs */}
              <div className="grid grid-cols-2 gap-3">
                <div className="relative group">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-500 group-focus-within:text-purple-400 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </span>
                  <input
                    type="text"
                    placeholder="First Name"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full pl-10 pr-3 py-3.5 rounded-xl bg-[#140d24]/60 border border-white/[0.06] text-white placeholder-gray-500 text-sm focus:outline-none focus:border-purple-500 transition duration-200"
                  />
                </div>

                <div className="relative group">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-500 group-focus-within:text-purple-400 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </span>
                  <input
                    type="text"
                    placeholder="Last Name"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full pl-10 pr-3 py-3.5 rounded-xl bg-[#140d24]/60 border border-white/[0.06] text-white placeholder-gray-500 text-sm focus:outline-none focus:border-purple-500 transition duration-200"
                  />
                </div>
              </div>

              {/* Email Input Container - Path coordinates updated */}
              <div className="relative group">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-500 group-focus-within:text-purple-400 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-[#140d24]/60 border border-white/[0.06] text-white placeholder-gray-500 text-sm focus:outline-none focus:border-purple-500 transition duration-200"
                />
              </div>

              {/* Password Entry Field with Toggling Actions */}
              <div className="relative group">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-500 group-focus-within:text-purple-400 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create Password"
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full pl-10 pr-12 py-3.5 rounded-xl bg-[#140d24]/60 border border-white/[0.06] text-white placeholder-gray-500 text-sm focus:outline-none focus:border-purple-500 transition duration-200"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-500 hover:text-gray-300"
                >
                  {showPassword ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>

              {/* Context Account Role Target Menu Selector Dropdown */}
              <div className="relative">
                <select
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full p-3.5 rounded-xl bg-[#140d24]/90 border border-white/[0.06] text-white text-sm focus:outline-none focus:border-purple-500 appearance-none cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='rgba(156,163,175,1)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 1.25rem center",
                    backgroundSize: "1.1rem"
                  }}
                >
                  <option value="student" className="bg-[#0a0514] text-white">Student</option>
                  <option value="alumni" className="bg-[#0a0514] text-white">Alumni</option>
                  <option value="admin" className="bg-[#0a0514] text-white">Admin</option>
                </select>
              </div>

              {/* Agreement Acceptance Checkbox */}
              <div className="flex items-center gap-3 text-gray-300 text-xs py-1 px-0.5">
                <input 
                  type="checkbox" 
                  required 
                  className="w-4 h-4 rounded border-white/10 bg-slate-900 accent-purple-600 focus:ring-0 cursor-pointer"
                />
                <span>
                  I agree to the{" "}
                  <span className="text-purple-400 hover:underline cursor-pointer font-medium">Terms & Conditions</span>
                </span>
              </div>

              {/* Main Submit Action Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#6355f6] to-[#a032f6] hover:opacity-90 active:scale-[0.99] py-4 rounded-xl text-white font-semibold transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-purple-600/20"
              >
                <span>Create account</span>
                <svg className="w-4 h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

            </form>

            {/* Split Decorative Horizontal Row Separator */}
            <div className="mt-6">
              <div className="flex items-center mb-5">
                <div className="flex-1 border-t border-white/[0.06]"></div>
                <span className="px-4 text-[11px] font-medium tracking-wider text-gray-500 uppercase">or continue with</span>
                <div className="flex-1 border-t border-white/[0.06]"></div>
              </div>

              {/* Third-Party Federated Identity Sign-In Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <button className="py-3 px-4 rounded-xl border border-white/[0.08] bg-[#140d24]/30 hover:bg-white/[0.04] text-gray-200 text-xs font-medium transition duration-200 flex items-center justify-center gap-2.5">
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path fill="#EA4335" d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.113-5.137 4.113-3.41 0-6.165-2.766-6.165-6.177 0-3.41 2.755-6.177 6.165-6.177 1.493 0 2.845.54 3.9 1.429l3.03-3.04C18.94 1.912 15.86 1 12.24 1c-6.075 0-11 4.936-11 11s4.925 11 11 11c5.98 0 10.154-4.212 10.154-10.335 0-.627-.066-1.108-.165-1.39H12.24z"/>
                  </svg>
                  <span>Google</span>
                </button>

                <button className="py-3 px-4 rounded-xl border border-white/[0.08] bg-[#140d24]/30 hover:bg-white/[0.04] text-gray-200 text-xs font-medium transition duration-200 flex items-center justify-center gap-2.5">
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.7-1.13 1.84-1.01 2.95 1.07.08 2.18-.53 2.84-1.34z" />
                  </svg>
                  <span>Apple</span>
                </button>
              </div>

              {/* Login View Alternative Redirection Context Router */}
              <p className="text-center text-xs text-gray-400 mt-6">
                Already have an account?{" "}
                <Link to="/login" className="text-purple-400 hover:text-purple-300 font-semibold underline decoration-purple-500/30 underline-offset-4 ml-1 transition">
                  Log in
                </Link>
              </p>

              {/* Compliance Trust Banner Footer Indicator */}
              <div className="flex items-center justify-center gap-1.5 text-gray-500 text-[11px] mt-6 pt-3 border-t border-white/[0.04]">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>We respect your privacy and protect your data.</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Register;