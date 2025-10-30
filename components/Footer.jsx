import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center p-4 text-sm text-gray-600 border-t">
      © {new Date().getFullYear()} ForexEdu — Learn Forex the Smart Way
    </footer>
  );
}