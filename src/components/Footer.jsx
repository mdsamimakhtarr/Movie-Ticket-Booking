import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 pt-12">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-red-500 mb-4">🎬 MovieBook</h2>
          <p className="text-sm text-gray-400">
            Book movie tickets, explore cinemas, and enjoy the best
            entertainment experiences near you.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-red-400 cursor-pointer">Movies</li>
            <li className="hover:text-red-400 cursor-pointer">Cinemas</li>
            <li className="hover:text-red-400 cursor-pointer">Events</li>
            <li className="hover:text-red-400 cursor-pointer">Offers</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-red-400 cursor-pointer">Help Center</li>
            <li className="hover:text-red-400 cursor-pointer">
              Terms & Conditions
            </li>
            <li className="hover:text-red-400 cursor-pointer">
              Privacy Policy
            </li>
            <li className="hover:text-red-400 cursor-pointer">Refund Policy</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact Us</h3>
          <div className="space-y-3 text-sm text-gray-400">
            <p className="flex items-center gap-2">
              <Mail size={16} /> support@moviebook.com
            </p>
            <p className="flex items-center gap-2">
              <Phone size={16} /> +91 98765 43210
            </p>
            <p className="flex items-center gap-2">
              <MapPin size={16} /> India
            </p>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="mt-10 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} MovieBook. All rights reserved.
          </p>

          <div className="flex gap-4">
            <Facebook className="hover:text-red-500 cursor-pointer" />
            <Twitter className="hover:text-red-500 cursor-pointer" />
            <Instagram className="hover:text-red-500 cursor-pointer" />
            <Youtube className="hover:text-red-500 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
