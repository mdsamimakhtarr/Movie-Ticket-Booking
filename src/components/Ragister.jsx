import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Ragister = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-zinc-900 flex items-center justify-center px-4">
        <div className="bg-black text-white p-8 rounded-xl w-full max-w-md shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6">
            Register on MovieBook
          </h2>

          <form className="space-y-4">
            {/* Name */}
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 rounded bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-red-500"
            />

            {/* Phone */}
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-2 rounded bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-red-500"
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-red-500"
            />

            {/* Password */}
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 rounded bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-red-500"
            />

            <button className="w-full bg-red-500 hover:bg-red-600 py-2 rounded-md font-semibold">
              Register
            </button>
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
