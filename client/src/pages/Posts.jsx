import { useEffect, useState } from "react";
import api from "../services/api";

function Posts() {
  const [posts, setPosts] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    author: "",
  });

  const fetchPosts = () => {
    api
      .get("/posts")
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/posts/add", formData);

      alert("Post Added Successfully");

      setFormData({
        title: "",
        content: "",
        author: "",
      });

      fetchPosts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-4xl font-bold mb-6">
        Posts Management
      </h1>

      <div className="bg-slate-900 p-6 rounded-xl mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Create Post
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid gap-4"
        >
          <input
            type="text"
            placeholder="Title"
            className="p-3 rounded bg-slate-800"
            value={formData.title}
            onChange={(e) =>
              setFormData({
                ...formData,
                title: e.target.value,
              })
            }
          />

          <textarea
            placeholder="Content"
            className="p-3 rounded bg-slate-800"
            value={formData.content}
            onChange={(e) =>
              setFormData({
                ...formData,
                content: e.target.value,
              })
            }
          />

          <input
            type="text"
            placeholder="Author"
            className="p-3 rounded bg-slate-800"
            value={formData.author}
            onChange={(e) =>
              setFormData({
                ...formData,
                author: e.target.value,
              })
            }
          />

          <button
            type="submit"
            className="bg-purple-600 p-3 rounded"
          >
            Add Post
          </button>
        </form>
      </div>

      <div className="grid gap-4">
        {posts.map((post) => (
          <div
            key={post._id}
            className="bg-slate-900 p-5 rounded-xl"
          >
            <h2 className="text-xl font-bold">
              {post.title}
            </h2>

            <p className="mt-2">
              {post.content}
            </p>

            <p className="text-gray-400 mt-3">
              By {post.author}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;