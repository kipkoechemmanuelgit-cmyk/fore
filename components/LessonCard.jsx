import React from "react";

export default function LessonCard({ title, content }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition bg-white">
      <h2 className="text-xl font-semibold mb-2 text-blue-700">{title}</h2>
      <p className="text-gray-700">{content}</p>
    </div>
  );
}