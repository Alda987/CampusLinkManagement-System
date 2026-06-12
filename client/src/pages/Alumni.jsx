import { useEffect, useState } from "react";
import api from "../services/api";
import banner from "../assets/alumni-banner.jpg";

function Alumni() {
  const [alumni, setAlumni] = useState([]);
  const [search, setSearch] = useState("");
  const [preview, setPreview] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    role: "",
    batch: "",
    email: "",
    linkedin: "",
    photo: "",
  });

  const fetchAlumni = async () => {
    try {
      const res = await api.get("/alumni");
      setAlumni(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAlumni();
  }, []);

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);

      setPreview(imageUrl);

      setFormData({
        ...formData,
        photo: imageUrl,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/alumni/add", formData);

      fetchAlumni();

      setFormData({
        name: "",
        company: "",
        role: "",
        batch: "",
        email: "",
        linkedin: "",
        photo: "",
      });

      setPreview("");

      alert("Alumni Added Successfully");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 text-white p-8">

      {/* Banner */}
      <div className="mb-8 overflow-hidden rounded-3xl shadow-2xl">
        <img
          src={banner}
          alt="Alumni Banner"
          className="w-full h-[320px] object-cover"
        />
      </div>

      <h1 className="text-4xl font-bold mb-2">
        Alumni Network
      </h1>

      <p className="text-gray-400 mb-8">
        Connect with successful alumni
      </p>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">

        <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-6 rounded-3xl">
          <h2>Total Alumni</h2>
          <p className="text-4xl font-bold">
            {alumni.length}
          </p>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-6 rounded-3xl">
          <h2>Companies</h2>
          <p className="text-4xl font-bold">25+</p>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-6 rounded-3xl">
          <h2>Mentors</h2>
          <p className="text-4xl font-bold">18+</p>
        </div>

        <div className="bg-gradient-to-r from-orange-600 to-yellow-600 p-6 rounded-3xl">
          <h2>Recruiters</h2>
          <p className="text-4xl font-bold">12+</p>
        </div>

      </div>

      {/* Form */}
      <div className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl mb-8">

        <h2 className="text-2xl font-bold mb-4">
          Add Alumni
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-4"
        >

          <input
            type="text"
            placeholder="Name"
            className="p-3 rounded-xl bg-slate-800"
            value={formData.name}
            onChange={(e) =>
              setFormData({
                ...formData,
                name: e.target.value,
              })
            }
          />

          <input
            type="text"
            placeholder="Company"
            className="p-3 rounded-xl bg-slate-800"
            value={formData.company}
            onChange={(e) =>
              setFormData({
                ...formData,
                company: e.target.value,
              })
            }
          />

          <input
            type="text"
            placeholder="Role"
            className="p-3 rounded-xl bg-slate-800"
            value={formData.role}
            onChange={(e) =>
              setFormData({
                ...formData,
                role: e.target.value,
              })
            }
          />

          <input
            type="text"
            placeholder="Batch"
            className="p-3 rounded-xl bg-slate-800"
            value={formData.batch}
            onChange={(e) =>
              setFormData({
                ...formData,
                batch: e.target.value,
              })
            }
          />

          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded-xl bg-slate-800"
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
            placeholder="LinkedIn URL"
            className="p-3 rounded-xl bg-slate-800"
            value={formData.linkedin}
            onChange={(e) =>
              setFormData({
                ...formData,
                linkedin: e.target.value,
              })
            }
          />

          <input
            type="file"
            onChange={handleImage}
            className="p-3 rounded-xl bg-slate-800"
          />

          <button
            type="submit"
            className="bg-purple-600 rounded-xl p-3"
          >
            Add Alumni
          </button>

        </form>

        {preview && (
          <img
            src={preview}
            alt="preview"
            className="w-40 h-40 mt-4 rounded-2xl object-cover"
          />
        )}

      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search Alumni..."
        className="w-full mb-8 p-4 rounded-2xl bg-white/10 border border-white/20"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Alumni Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {alumni
          .filter((a) =>
            a.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((item) => (
            <div
              key={item._id}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition"
            >

              <img
                src={item.photo}
                alt={item.name}
                className="w-full h-60 object-cover"
              />

              <div className="p-5">

                <h2 className="text-2xl font-bold">
                  {item.name}
                </h2>

                <p className="text-purple-400">
                  {item.role}
                </p>

                <p>{item.company}</p>

                <p className="text-gray-400">
                  Batch {item.batch}
                </p>

                <p className="text-gray-400">
                  {item.email}
                </p>

                <a
                  href={item.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-4 bg-blue-600 px-4 py-2 rounded-xl"
                >
                  LinkedIn
                </a>

              </div>

            </div>
          ))}

      </div>

    </div>
  );
}

export default Alumni;