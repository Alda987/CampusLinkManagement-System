import { useEffect, useState } from "react";
import api from "../services/api";
import banner from "../assets/events-banner.jpg";

function Events() {
  const [events, setEvents] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    date: "",
    venue: "",
    description: "",
    image: "",
    organizer: "",
    category: "",
    registrationLink: "",
  });

  const fetchEvents = () => {
    api
      .get("/events")
      .then((res) => setEvents(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/events/add", formData);
      alert("Event Added Successfully");

      // Reset Form State
      setFormData({
        title: "",
        date: "",
        venue: "",
        description: "",
        image: "",
        organizer: "",
        category: "",
        registrationLink: "",
      });

      fetchEvents();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div 
      className="min-h-screen text-white p-8 bg-cover bg-no-repeat bg-fixed"
      style={{
        backgroundImage: `linear-gradient(
          to bottom,
          rgba(2, 6, 23, 0.75),
          rgba(15, 23, 42, 0.9)
        ), url(${banner})`,
        backgroundPosition: "center center"
      }}
    >
      
      {/* Clean Minimalist Header (No separate image block anymore) */}
      <div className="pt-12 pb-16 max-w-4xl">
        <h1 className="text-6xl font-bold text-white mb-4 tracking-tight">
          Events Management
        </h1>
        <p className="text-xl text-gray-200 leading-relaxed">
          Manage workshops, hackathons, seminars, placement drives, cultural programs and
          alumni meetups from one dashboard.
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-purple-600/20 backdrop-blur-xl p-6 rounded-3xl border border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.4)]">
          <h3 className="text-sm font-medium tracking-wide uppercase text-purple-200">Total Events</h3>
          <p className="text-4xl font-bold mt-1">{events.length}</p>
        </div>

        <div className="bg-cyan-600/20 backdrop-blur-xl p-6 rounded-3xl border border-cyan-500/30 shadow-[0_0_30px_rgba(34,211,238,0.4)]">
          <h3 className="text-sm font-medium tracking-wide uppercase text-cyan-200">Workshops</h3>
          <p className="text-4xl font-bold mt-1">10+</p>
        </div>

        <div className="bg-green-600/20 backdrop-blur-xl p-6 rounded-3xl border border-green-500/30 shadow-[0_0_30px_rgba(34,197,94,0.4)]">
          <h3 className="text-sm font-medium tracking-wide uppercase text-green-200">Upcoming</h3>
          <p className="text-4xl font-bold mt-1">5+</p>
        </div>

        <div className="bg-pink-600/20 backdrop-blur-xl p-6 rounded-3xl border border-pink-500/30 shadow-[0_0_30px_rgba(236,72,153,0.4)]">
          <h3 className="text-sm font-medium tracking-wide uppercase text-pink-200">Participants</h3>
          <p className="text-4xl font-bold mt-1">500+</p>
        </div>
      </div>

      {/* Add Event Form */}
      <div className="bg-slate-950/40 backdrop-blur-xl border border-white/10 rounded-3xl p-6 mb-10 shadow-2xl">
        <h2 className="text-3xl font-bold mb-6">Add Event</h2>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Title"
            className="p-3 rounded-xl bg-slate-900/80 text-white border border-white/10 outline-none focus:ring-2 focus:ring-purple-500"
            value={formData.title}
            required
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />

          <input
            type="date"
            className="p-3 rounded-xl bg-slate-900/80 text-white border border-white/10 outline-none focus:ring-2 focus:ring-purple-500"
            value={formData.date}
            required
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          />

          <input
            type="text"
            placeholder="Venue"
            className="p-3 rounded-xl bg-slate-900/80 text-white border border-white/10 outline-none focus:ring-2 focus:ring-purple-500"
            value={formData.venue}
            required
            onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
          />

          <input
            type="text"
            placeholder="Organizer"
            className="p-3 rounded-xl bg-slate-900/80 text-white border border-white/10 outline-none focus:ring-2 focus:ring-purple-500"
            value={formData.organizer}
            required
            onChange={(e) => setFormData({ ...formData, organizer: e.target.value })}
          />

          <input
            type="text"
            placeholder="Category"
            className="p-3 rounded-xl bg-slate-900/80 text-white border border-white/10 outline-none focus:ring-2 focus:ring-purple-500"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          />

          <input
            type="text"
            placeholder="Event Image URL"
            className="p-3 rounded-xl bg-slate-900/80 text-white border border-white/10 outline-none focus:ring-2 focus:ring-purple-500"
            value={formData.image}
            onChange={(e) => setFormData({ ...formData, image: e.target.value })}
          />

          <input
            type="text"
            placeholder="Registration Link"
            className="p-3 rounded-xl bg-slate-900/80 text-white border border-white/10 outline-none focus:ring-2 focus:ring-purple-500 md:col-span-2"
            value={formData.registrationLink}
            onChange={(e) => setFormData({ ...formData, registrationLink: e.target.value })}
          />

          <textarea
            placeholder="Description"
            rows="3"
            className="p-3 rounded-xl bg-slate-900/80 text-white border border-white/10 outline-none focus:ring-2 focus:ring-purple-500 md:col-span-2"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          />

          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 font-semibold p-3 rounded-xl transition duration-200 md:col-span-2 shadow-lg"
          >
            Add Event
          </button>
        </form>
      </div>

      {/* Dynamic Event Cards Display */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div
            key={event._id}
            className="bg-slate-950/60 backdrop-blur-xl border border-purple-500/20 rounded-3xl overflow-hidden shadow-[0_0_30px_rgba(168,85,247,0.25)] flex flex-col justify-between hover:scale-105 transition-all duration-300"
          >
            <div>
              {event.image && (
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-56 object-cover"
                />
              )}

              <div className="p-5">
                <h2 className="text-2xl font-bold tracking-tight">{event.title}</h2>
                <p className="text-purple-400 font-medium mt-1 text-sm tracking-wider uppercase">
                  {event.category || "General"}
                </p>

                <div className="mt-3 space-y-1 text-sm text-gray-200">
                  <p>📅 {event.date}</p>
                  <p>📍 {event.venue}</p>
                  <p>👤 {event.organizer}</p>
                </div>

                <p className="mt-4 text-gray-300 text-sm leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>

            {event.registrationLink && (
              <div className="px-5 pb-5">
                <a
                  href={event.registrationLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block w-full text-center bg-purple-600 hover:bg-purple-700 transition duration-200 font-semibold px-4 py-2.5 rounded-xl shadow-md"
                >
                  Register
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;