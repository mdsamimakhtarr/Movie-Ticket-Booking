import React, { useState } from "react";
import { Link } from "react-router-dom";

const Section = () => {
  const [showToast, setShowToast] = useState(false);

  const movies = [
    {
      id: 1,
      title: "Avengers: Endgame",
      image: "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SL1500_.jpg",
    },
    {
      id: 2,
      title: "Jawan",
      image:
        "https://tse1.mm.bing.net/th/id/OIP.XsarncrIYHXv1QSySLLxbAHaEK?pid=Api&P=0&h=180",
    },
    {
      id: 3,
      title: "Pushpa 2",
      image:
        "https://tse1.mm.bing.net/th/id/OIP.d3CLOZp5ptxKND1gjEWOJwHaFj?pid=Api&P=0&h=180",
    },
    {
      id: 4,
      title: "Salaar",
      image:
        "https://www.mypunepulse.com/wp-content/uploads/2023/12/SALAAR-1024x576.webp",
    },
  ];

  const handleBookTicket = () => {
    setShowToast(true);

    // auto hide toast after 3 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <>
      <section className="w-full bg-zinc-900 py-10 px-6">
        <h2 className="text-white text-2xl font-bold mb-6">
          🎥 Our Showing Movies
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="bg-black rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform"
            >
              <img
                src={movie.image}
                alt={movie.title}
                className="h-64 w-full object-cover"
              />

              <div className="p-4">
                <h3 className="text-white font-semibold text-lg">
                  {movie.title}
                </h3>

                <button
                  onClick={handleBookTicket}
                  className="mt-3 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-md font-semibold"
                >
                  Book Ticket
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🔔 Toast Notification */}
      {showToast && (
        <div className="fixed top-5 right-5 bg-green-500 text-white px-5 py-4 rounded-lg shadow-lg border-l-4 border-green-700 z-50 animate-slide-in">
          <p className="font-semibold mb-2">
            Please login first to book tickets
          </p>

          <Link
            to="/login"
            className="text-white underline text-sm font-semibold"
          >
            Go to Login →
          </Link>
        </div>
      )}
    </>
  );
};

export default Section;
