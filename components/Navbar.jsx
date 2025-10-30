import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white p-4 flex justify-between items-center shadow-md">
      <Link to="/" className="text-2xl font-bold">
        ForexEdu
      </Link>

      <div className="flex gap-4">
        <Link to="/" className="hover:text-yellow-300">Home</Link>
        <Link to="/lessons" className="hover:text-yellow-300">Lessons</Link>
        <Link to="/about" className="hover:text-yellow-300">About</Link>
      </div>
    </nav>
  );
}