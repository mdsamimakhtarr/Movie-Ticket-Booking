import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";

const Ragister = () => {
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Something went wrong");
      } else {
        console.log("Register Success:", data);
        // Redirect to login page after successful registration
        navigate("/login");
      }
    } catch (err) {
      setError("Server error, try again later");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-zinc-900 flex items-center justify-center px-4">
        <div className="bg-black text-white p-8 rounded-xl w-full max-w-md shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6">
            Register on MovieBook
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />

            {/* Phone */}
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-red-500"
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />

            {/* Password */}
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />

            <button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 py-2 rounded-md font-semibold"
              disabled={loading}
            >
              {loading ? "Registering..." : "Register"}
            </button>

            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </form>

          <p className="text-sm text-gray-400 text-center mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-red-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Ragister;
