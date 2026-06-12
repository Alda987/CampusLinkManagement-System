import { useEffect, useState } from "react";
import api from "../services/api";

function Jobs() {
  const [jobs, setJobs] = useState([]);

  const [formData, setFormData] = useState({
    company: "",
    role: "",
    location: "",
    description: "",
  });

  const fetchJobs = () => {
    api
      .get("/jobs")
      .then((res) => setJobs(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/jobs/add", formData);

      alert("Job Added Successfully");

      setFormData({
        company: "",
        role: "",
        location: "",
        description: "",
      });

      fetchJobs();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-4xl font-bold mb-6">
        Jobs Management
      </h1>

      <div className="bg-slate-900 p-6 rounded-xl mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Add Job
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-4"
        >
          <input
            type="text"
            placeholder="Company"
            className="p-3 rounded bg-slate-800"
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
            className="p-3 rounded bg-slate-800"
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
            placeholder="Location"
            className="p-3 rounded bg-slate-800"
            value={formData.location}
            onChange={(e) =>
              setFormData({
                ...formData,
                location: e.target.value,
              })
            }
          />

          <textarea
            placeholder="Description"
            className="p-3 rounded bg-slate-800"
            value={formData.description}
            onChange={(e) =>
              setFormData({
                ...formData,
                description: e.target.value,
              })
            }
          />

          <button
            type="submit"
            className="bg-purple-600 p-3 rounded"
          >
            Add Job
          </button>
        </form>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {jobs.map((job) => (
          <div
            key={job._id}
            className="bg-slate-900 p-5 rounded-xl"
          >
            <h2 className="text-xl font-bold">
              {job.role}
            </h2>

            <p>{job.company}</p>
            <p>{job.location}</p>
            <p>{job.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Jobs;