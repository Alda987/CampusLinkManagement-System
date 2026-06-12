import { useEffect, useState } from "react";
import api from "../services/api";
import banner from "../assets/students-banner.jpg";

function Students() {
  const [students, setStudents] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    year: "",
    cgpa: "",
    skills: "",
    placementStatus: "",
    linkedin: "",
    photo: "",
  });

  const fetchStudents = () => {
    api
      .get("/students")
      .then((res) => setStudents(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/students/add", formData);

      alert("Student Added Successfully");

      setFormData({
        name: "",
        email: "",
        phone: "",
        department: "",
        year: "",
        cgpa: "",
        skills: "",
        placementStatus: "",
        linkedin: "",
        photo: "",
      });

      fetchStudents();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 text-white p-8">

      {/* Banner */}
      <div className="mb-8 overflow-hidden rounded-3xl shadow-2xl">
        <img
          src={banner}
          alt="Students Banner"
          className="w-full h-[320px] object-cover"
        />
      </div>

      {/* Heading */}
      <h1 className="text-4xl font-bold mb-2">
        Students Management
      </h1>

      <p className="text-gray-400 mb-8">
        Manage students, placements, skills and academic performance.
      </p>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">

        <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-6 rounded-3xl shadow-[0_0_30px_rgba(168,85,247,0.4)]">
          <h3>Total Students</h3>
          <p className="text-4xl font-bold mt-2">
            {students.length}
          </p>
        </div>

        <div className="bg-gradient-to-r from-cyan-600 to-blue-700 p-6 rounded-3xl">
          <h3>Departments</h3>
          <p className="text-4xl font-bold mt-2">
            5+
          </p>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-emerald-700 p-6 rounded-3xl">
          <h3>Placed</h3>
          <p className="text-4xl font-bold mt-2">
            20+
          </p>
        </div>

        <div className="bg-gradient-to-r from-pink-600 to-rose-700 p-6 rounded-3xl">
          <h3>Average CGPA</h3>
          <p className="text-4xl font-bold mt-2">
            8.5
          </p>
        </div>

      </div>

      {/* Add Student Form */}
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 mb-10">

        <h2 className="text-2xl font-bold mb-4">
          Add Student
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-4"
        >

          <input
            type="text"
            placeholder="Student Name"
            className="p-3 rounded-xl bg-slate-800 outline-none border border-white/5 focus:border-purple-500"
            value={formData.name}
            onChange={(e) =>
              setFormData({
                ...formData,
                name: e.target.value,
              })
            }
          />

          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded-xl bg-slate-800 outline-none border border-white/5 focus:border-purple-500"
            value={formData.email}
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value,
              })
            }
          />

          <input
            type="text"
            placeholder="Phone"
            className="p-3 rounded-xl bg-slate-800 outline-none border border-white/5 focus:border-purple-500"
            value={formData.phone}
            onChange={(e) =>
              setFormData({
                ...formData,
                phone: e.target.value,
              })
            }
          />

          <input
            type="text"
            placeholder="Department"
            className="p-3 rounded-xl bg-slate-800 outline-none border border-white/5 focus:border-purple-500"
            value={formData.department}
            onChange={(e) =>
              setFormData({
                ...formData,
                department: e.target.value,
              })
            }
          />

          <input
            type="number"
            placeholder="Year"
            className="p-3 rounded-xl bg-slate-800 outline-none border border-white/5 focus:border-purple-500"
            value={formData.year}
            onChange={(e) =>
              setFormData({
                ...formData,
                year: e.target.value,
              })
            }
          />

          <input
            type="number"
            step="0.01"
            placeholder="CGPA"
            className="p-3 rounded-xl bg-slate-800 outline-none border border-white/5 focus:border-purple-500"
            value={formData.cgpa}
            onChange={(e) =>
              setFormData({
                ...formData,
                cgpa: e.target.value,
              })
            }
          />

          <input
            type="text"
            placeholder="Skills"
            className="p-3 rounded-xl bg-slate-800 outline-none border border-white/5 focus:border-purple-500"
            value={formData.skills}
            onChange={(e) =>
              setFormData({
                ...formData,
                skills: e.target.value,
              })
            }
          />

          <input
            type="text"
            placeholder="Placement Status"
            className="p-3 rounded-xl bg-slate-800 outline-none border border-white/5 focus:border-purple-500"
            value={formData.placementStatus}
            onChange={(e) =>
              setFormData({
                ...formData,
                placementStatus: e.target.value,
              })
            }
          />

          <input
            type="text"
            placeholder="LinkedIn URL"
            className="p-3 rounded-xl bg-slate-800 outline-none border border-white/5 focus:border-purple-500"
            value={formData.linkedin}
            onChange={(e) =>
              setFormData({
                ...formData,
                linkedin: e.target.value,
              })
            }
          />

          <input
            type="text"
            placeholder="Photo URL"
            className="p-3 rounded-xl bg-slate-800 outline-none border border-white/5 focus:border-purple-500"
            value={formData.photo}
            onChange={(e) =>
              setFormData({
                ...formData,
                photo: e.target.value,
              })
            }
          />

          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 rounded-xl p-3 font-bold transition md:col-span-2"
          >
            Add Student
          </button>

        </form>

      </div>

      {/* Students Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {students.map((student) => (

          <div
            key={student._id}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src={student.photo || "https://via.placeholder.com/400x300"}
              alt={student.name}
              className="w-full h-60 object-cover"
            />

            <div className="p-5">

              <h2 className="text-2xl font-bold">
                {student.name}
              </h2>

              <p className="text-purple-400">
                {student.department}
              </p>

              <p className="mt-2">
                📧 {student.email}
              </p>

              <p>
                📱 {student.phone}
              </p>

              <p>
                🎓 Year {student.year}
              </p>

              <p>
                📊 CGPA {student.cgpa}
              </p>

              <p>
                💼 {student.placementStatus}
              </p>

              <p className="truncate">
                🔗 <a href={student.linkedin} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">{student.linkedin || "No Profile Linked"}</a>
              </p>

              <div className="mt-3">
                <span className="bg-purple-600 px-3 py-1 rounded-full text-sm inline-block">
                  {student.skills}
                </span>
              </div>

            </div>
          </div>

        ))}

      </div>

    </div>
  );
}

export default Students;