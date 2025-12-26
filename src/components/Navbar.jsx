import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check login status on mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="bg-black text-white flex justify-between items-center p-4">
      <Link to="/" className="text-red-500 font-bold text-lg">
        MovieBook
      </Link>

      <div>
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 px-4 py-1 rounded-md font-semibold"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="bg-red-500 hover:bg-red-600 px-4 py-1 rounded-md font-semibold"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
