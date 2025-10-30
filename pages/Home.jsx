import React from "react";
import { Link } from "react-router-dom";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Home() {
  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold mb-4">Welcome to ForexEdu</h1>
      <p className="text-gray-700 mb-8 max-w-xl mx-auto">
        Master the basics of forex trading for free. Learn how the market works,
        understand key terms, and start your journey toward financial literacy.
      </p>

      <div className="flex justify-center gap-4">
        <Link
          to="/lessons"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700"
        >
          Start Learning
        </Link>
      </div>

      <div className="mt-10">
        <WhatsAppButton
          phone="254762048809"
          message="Hello, I’d like to learn advanced forex and get linked with real trading sources."
        />
      </div>
    </div>
  );
}