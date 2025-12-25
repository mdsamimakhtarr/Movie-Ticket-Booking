import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-black text-white px-6 py-4 shadow-lg">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-red-500">
          🎬 MovieBook
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center">
          <li className="hover:text-red-400 cursor-pointer">Movies</li>
          <li className="hover:text-red-400 cursor-pointer">Cinemas</li>
          <li className="hover:text-red-400 cursor-pointer">Events</li>

          <Link
            to="/login"
            className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md font-semibold"
          >
            Login
          </Link>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-4 bg-zinc-900 rounded-lg p-4 space-y-4">
          <p>Movies</p>
          <p>Cinemas</p>
          <p>Events</p>

          <Link
            to="/login"
            className="block text-center bg-red-500 hover:bg-red-600 py-2 rounded-md font-semibold"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="block text-center border border-red-500 text-red-500 py-2 rounded-md font-semibold"
          >
            Register
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
